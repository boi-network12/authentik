import "@goauthentik/elements/EmptyState";
import "@goauthentik/flow/FormStatic";
import { BaseStage } from "@goauthentik/flow/stages/base";

import { msg } from "@lit/localize";
import { TemplateResult, html } from "lit";
import { customElement } from "lit/decorators.js";

import { OAuthDeviceCodeFinishChallenge } from "@goauthentik/api";

@customElement("ak-flow-provider-oauth2-code-finish")
export class DeviceCodeFinish extends BaseStage<
    OAuthDeviceCodeFinishChallenge,
    OAuthDeviceCodeFinishChallenge
> {
    render(): TemplateResult {
        if (!this.challenge) {
            return html`<ak-empty-state loading> </ak-empty-state>`;
        }
        return html`<ak-empty-state icon="fas fa-check">
            <span>${msg("You may close this page now.")}</span>
            <span slot="body"> ${msg("You've successfully authenticated your device.")} </span>
        </ak-empty-state>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ak-flow-provider-oauth2-code-finish": DeviceCodeFinish;
    }
}
