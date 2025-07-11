import { DEFAULT_CONFIG } from "@goauthentik/common/api/config";
import { dateTimeLocal } from "@goauthentik/common/temporal";
import "@goauthentik/components/ak-hidden-text-input";
import { Form } from "@goauthentik/elements/forms/Form";
import "@goauthentik/elements/forms/HorizontalFormElement";
import { ModalForm } from "@goauthentik/elements/forms/ModalForm";

import { msg, str } from "@lit/localize";
import { TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import {
    CoreApi,
    Group,
    UserServiceAccountRequest,
    UserServiceAccountResponse,
} from "@goauthentik/api";

@customElement("ak-user-service-account-form")
export class ServiceAccountForm extends Form<UserServiceAccountRequest> {
    @property({ attribute: false })
    result?: UserServiceAccountResponse;

    @property({ attribute: false })
    group?: Group;

    getSuccessMessage(): string {
        if (this.group) {
            return msg(str`Successfully created user and added to group ${this.group.name}`);
        }
        return msg("Successfully created user.");
    }

    async send(data: UserServiceAccountRequest): Promise<UserServiceAccountResponse> {
        const result = await new CoreApi(DEFAULT_CONFIG).coreUsersServiceAccountCreate({
            userServiceAccountRequest: data,
        });
        this.result = result;
        (this.parentElement as ModalForm).showSubmitButton = false;
        if (this.group) {
            await new CoreApi(DEFAULT_CONFIG).coreGroupsAddUserCreate({
                groupUuid: this.group.pk,
                userAccountRequest: {
                    pk: this.result.userPk,
                },
            });
        }
        return result;
    }

    resetForm(): void {
        super.resetForm();
        this.result = undefined;
    }

    renderForm(): TemplateResult {
        return html`<ak-form-element-horizontal label=${msg("Username")} required name="name">
                <input
                    type="text"
                    value=""
                    class="pf-c-form-control pf-m-monospace"
                    autocomplete="off"
                    spellcheck="false"
                    required
                />
                <p class="pf-c-form__helper-text">
                    ${msg("User's primary identifier. 150 characters or fewer.")}
                </p>
            </ak-form-element-horizontal>
            <ak-form-element-horizontal name="createGroup">
                <label class="pf-c-switch">
                    <input class="pf-c-switch__input" type="checkbox" checked />
                    <span class="pf-c-switch__toggle">
                        <span class="pf-c-switch__toggle-icon">
                            <i class="fas fa-check" aria-hidden="true"></i>
                        </span>
                    </span>
                    <span class="pf-c-switch__label">${msg("Create group")}</span>
                </label>
                <p class="pf-c-form__helper-text">
                    ${msg(
                        "Enabling this toggle will create a group named after the user, with the user as member.",
                    )}
                </p>
            </ak-form-element-horizontal>
            <ak-form-element-horizontal name="expiring">
                <label class="pf-c-switch">
                    <input class="pf-c-switch__input" type="checkbox" checked />
                    <span class="pf-c-switch__toggle">
                        <span class="pf-c-switch__toggle-icon">
                            <i class="fas fa-check" aria-hidden="true"></i>
                        </span>
                    </span>
                    <span class="pf-c-switch__label">${msg("Expiring")}</span>
                </label>
                <p class="pf-c-form__helper-text">
                    ${msg(
                        "If this is selected, the token will expire. Upon expiration, the token will be rotated.",
                    )}
                </p>
            </ak-form-element-horizontal>
            <ak-form-element-horizontal label=${msg("Expires on")} name="expires">
                <input
                    type="datetime-local"
                    data-type="datetime-local"
                    value="${dateTimeLocal(new Date(Date.now() + 1000 * 60 ** 2 * 24 * 360))}"
                    class="pf-c-form-control"
                />
            </ak-form-element-horizontal>`;
    }

    renderResponseForm(): TemplateResult {
        return html`<p>
                ${msg(
                    "Use the username and password below to authenticate. The password can be retrieved later on the Tokens page.",
                )}
            </p>
            <form class="pf-c-form pf-m-horizontal">
                <ak-form-element-horizontal label=${msg("Username")}>
                    <input
                        type="text"
                        readonly
                        value=${ifDefined(this.result?.username)}
                        class="pf-c-form-control"
                    />
                </ak-form-element-horizontal>
                <ak-hidden-text-input
                    label=${msg("Password")}
                    value="${this.result?.token ?? ""}"
                    .help=${msg(
                        "Valid for 360 days, after which the password will automatically rotate. You can copy the password from the Token List.",
                    )}
                >
                </ak-hidden-text-input>
            </form>`;
    }

    renderFormWrapper(): TemplateResult {
        if (this.result) {
            return this.renderResponseForm();
        }
        return super.renderFormWrapper();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ak-user-service-account-form": ServiceAccountForm;
    }
}
