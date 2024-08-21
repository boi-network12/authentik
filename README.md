<p align="center">
    <img src="https://goauthentik.io/img/icon_top_brand_colour.svg" height="150" alt="authentik logo">
</p>

---

[![Join Discord](https://img.shields.io/discord/809154715984199690?label=Discord&style=for-the-badge)](https://goauthentik.io/discord)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/goauthentik/authentik/ci-main.yml?branch=main&label=core%20build&style=for-the-badge)](https://github.com/goauthentik/authentik/actions/workflows/ci-main.yml)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/goauthentik/authentik/ci-outpost.yml?branch=main&label=outpost%20build&style=for-the-badge)](https://github.com/goauthentik/authentik/actions/workflows/ci-outpost.yml)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/goauthentik/authentik/ci-web.yml?branch=main&label=web%20build&style=for-the-badge)](https://github.com/goauthentik/authentik/actions/workflows/ci-web.yml)
[![Code Coverage](https://img.shields.io/codecov/c/gh/goauthentik/authentik?style=for-the-badge)](https://codecov.io/gh/goauthentik/authentik)
![Docker pulls](https://img.shields.io/docker/pulls/beryju/authentik.svg?style=for-the-badge)
![Latest version](https://img.shields.io/docker/v/beryju/authentik?sort=semver&style=for-the-badge)
[![](https://img.shields.io/badge/Help%20translate-transifex-blue?style=for-the-badge)](https://www.transifex.com/authentik/authentik/)

## What is authentik?

authentik is an open-source Identity Provider that emphasizes flexibility and versatility. It can be seamlessly integrated into existing environments to support new protocols. authentik is also a great solution for implementing sign-up, recovery, and other similar features in your application, saving you the hassle of dealing with them.

## Installation

For small/test setups it is recommended to use Docker Compose; refer to the [documentation](https://goauthentik.io/docs/installation/docker-compose/?utm_source=github).

For bigger setups, there is a Helm Chart [here](https://github.com/goauthentik/helm). This is documented [here](https://goauthentik.io/docs/installation/kubernetes/?utm_source=github).

## Screenshots

| Light                                                       | Dark                                                       |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| ![](https://docs.goauthentik.io/img/screen_apps_light.jpg)  | ![](https://docs.goauthentik.io/img/screen_apps_dark.jpg)  |
| ![](https://docs.goauthentik.io/img/screen_admin_light.jpg) | ![](https://docs.goauthentik.io/img/screen_admin_dark.jpg) |

## Development

See [Developer Documentation](https://goauthentik.io/developer-docs/?utm_source=github)

## Security

See [SECURITY.md](SECURITY.md)

## Adoption and Contributions

Your organization uses authentik? We'd love to add your logo to the readme and our website! Email us @ hello@goauthentik.io or open a GitHub Issue/PR! For more information on how to contribute to authentik, please refer to our [CONTRIBUTING.md file](./CONTRIBUTING.md).


## Why Use authentik?

- **Flexibility:** authentik can be adapted to various environments, making it a versatile solution for both small and large-scale applications.
- **Security:** With robust authentication mechanisms, authentik ensures that your application remains secure.
- **Open-Source:** Being open-source, authentik benefits from a strong community of developers who contribute to its continuous improvement.
- **Easy Integration:** authentik can be easily integrated with existing systems, saving you time and resources.


## Getting Started

To get started with authentik, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/goauthentik/authentik.git
   cd authentik

## Key Features

- **Multi-Protocol Support:** authentik supports a wide range of authentication protocols, including OAuth2, SAML, and LDAP.
- **User Management:** Easily manage users, groups, and permissions within the authentik admin interface.
- **Custom Workflows:** Create custom authentication and authorization workflows tailored to your needs.
- **Multi-Factor Authentication:** Enhance security with built-in support for multi-factor authentication (MFA).
- **Extensible:** Add new functionality with plugins or by integrating with other services through APIs.


## Advanced Configuration

For users who need more than just the basics, authentik offers a variety of advanced configuration options:

- **High Availability:** Set up authentik in a clustered environment to ensure uptime and reliability.
- **Custom Plugins:** Extend authentik’s functionality by developing your own plugins. Refer to the [Developer Documentation](https://goauthentik.io/developer-docs/?utm_source=github) for details.
- **Environment Variables:** Fine-tune authentik by adjusting environment variables. See the [Environment Variables Guide](https://goauthentik.io/docs/environment/?utm_source=github) for a full list.
