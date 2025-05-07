---
id: onboarding
title: Onboarding
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Onboard connected accounts

Onboard your users, merchants, subsidiaries, business partners, or clients on to your platform by creating connected accounts. You can update account information anytime including adding identification documents. After providing all the required information, you can submit the account for activation.

Zoqq requires the following compliance checks for your customer for successful onboarding:

KYC (Know Your Customer) checks for general onboarding. This is also required as a prerequiste to access the KYB component.
KYB (Know Your Business) checks for payments onboarding. Note that KYB check is only required if your customer will be onboarded as Merchant-Of-Record, which depends on your payments gateway model of choice.

## KYC and onboarding

Zoqq offers multiple options to onboard connected accounts and submit them for KYC.

- **Embedded KYC component** (Zoqq-hosted iFrame)
- **Hosted flow** (Zoqq-hosted full-page redirect)
- **Accounts API**

Once a new account is created and connected to your platform, you can update account information anytime prior to submitting the account for activation.

This page describes these options at a high level, including tradeoffs and use cases for each. Note that these options are not mutually exclusive but we recommend building a unified onboarding experience.

| Feature                         | Embedded KYC component                                                                                                                           | Hosted flow                                                                                                                                                      | Accounts API                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**                 | Onboard customers through a UI component embedded directly into your site                                                                        | Redirect customers into a flow hosted by Zoqq                                                                                                                    | Fully control the onboarding UI, built on top of Zoqq APIs                                                                                    |
| **Suitable for**                | Spending minimal tech effort to build an onboarding workflow. Leverage a pre-built UI element that perfectly matches your brand's look and feel. | Spending minimal tech effort to build an onboarding workflow. Instead, redirect connected accounts to an Zoqq-hosted page so that you can get to market quickly. | A highly customized onboarding workflow. Please note that this option requires more time and development resources to implement and maintain. |
| **KYC information**             | Collects required KYC information from your end users                                                                                            | Collects required KYC information from your end users                                                                                                            | Collect on your own interface                                                                                                                 |
| **AML (Anti-money laundering)** | Supported                                                                                                                                        | Supported                                                                                                                                                        | Supported                                                                                                                                     |
| **Sanctions screening**         | Supported                                                                                                                                        | Supported                                                                                                                                                        | Supported                                                                                                                                     |
| **Identity verification**       | Real-time progressive verification                                                                                                               | Real-time progressive verification                                                                                                                               | Verification after submitting to Zoqq in the back end                                                                                         |
| **Customization**               | Advanced theming to align with your design system                                                                                                | Basic theming                                                                                                                                                    | Full control over look and feel                                                                                                               |
| **Integration effort**          | Minimal coding                                                                                                                                   | Minimal coding                                                                                                                                                   | Most coding                                                                                                                                   |
