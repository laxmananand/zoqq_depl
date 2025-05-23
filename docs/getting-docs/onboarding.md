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


# Handle Onboarding RFIs

Successfully handle requests for information and activate accounts.

## KYC RFI
Handle additional information requests on the account related to KYC.

<!-- ## Payment Enablement RFI
Handle additional information requests related to payments acceptance capabilities. -->

---

# Explore Use Cases

Embedded finance use cases to support a range of financial infrastructure needs.

### Embedded Finance Use Cases

#### Global Treasury
Enable your platform to collect and disburse funds globally.

#### Banking as a Service
Offer a full-featured fintech solution including accounts and card issuing.

#### Payments for Platforms
Integrate end-to-end payments into your platform.


### How connected accounts work

As a platform, you can programmatically create connected accounts for your customers, whether businesses or individuals. During the onboarding process, Zoqq conducts comprehensive KYC (Know Your Customer), AML (Anti-Money Laundering), sanction screening, and identity verification.

Once onboarded, your customers receive access to fully functional accounts designed to streamline their payments experience, complete with the full set of Zoqq capabilities. See Onboard connected accounts.

Monetization opportunities for the platform include charging fees through:

- **Payout fees** on each transaction, charged by the platform to the connected account  
- **FX fees** on each currency conversion, charged by the platform to the connected account  
- **Issuing interchange rebates**  
- **Platform SaaS fees** or other platform fees may also be charged by the platform from the connected account's Wallet  

## Transacting on behalf of connected accounts

As a platform, you will be able to provide API instructions on behalf of the connected account using the respective account ID of the connected account for the following APIs:

- **Global Accounts** to equip your customers with virtual currency account numbers in each jurisdiction where Zoqq supports collections, for your customer to receive funds via local clearing systems or via SWIFT, in their name.  
- **Conversions** to debit the connected account’s wallet in one currency, convert funds to another currency and credit funds to the connected account’s wallet in the target currency.  
- **Transfers** to debit the connected account’s wallet to payout to an external bank account. End users can trigger payouts through the platform's interface.  
- **Connected Account Transfers** to debit your platform wallet and move funds to the connected account’s wallet.  
- **Charges** to debit the connected account’s wallet to move funds to your platform wallet.  



## Supported Regions

This page provides information on the latest capabilities of Connected Accounts.  
To explore coverage for Zoqq global payouts, Global Accounts, Linked Accounts, and transactional FX capabilities, see **[Market & infrastructure coverage](#)**.

For any further questions regarding capabilities specific to your region, please contact your Zoqq Account Manager.

---

## Connected Accounts Coverage

The below markets are the ones where you may onboard connected accounts.  
Creating connected accounts for your customers is not always required. This will be assessed by Zoqq based on the planned funds flow on your Platform, and other local regulatory constraints.

> **Note:** The connected account country refers to the country of the business's registration address.

| Region         | Connected Account Business Country | Local Zoqq Entity |
|----------------|------------------------------------|-------------------|
| **APAC**       | Australia                          | Zoqq AU           |
|                | Hong Kong                          | Zoqq HK           |
|                | New Zealand                        | Zoqq NZ           |
|                | Singapore                          | Zoqq SG           |
| **North America** | Canada                          | Zoqq CA           |
|                | United States                      | Zoqq US           |
| **Europe**     | United Kingdom                     | Zoqq UK           |
|                | Austria                            | Zoqq NL           |
|                | Belgium                            | Zoqq NL           |
|                | Bulgaria                           | Zoqq NL           |
|                | Croatia                            | Zoqq NL           |
|                | Cyprus                             | Zoqq NL           |
|                | Czech Republic                     | Zoqq NL           |
|                | Denmark                            | Zoqq NL           |
|                | Estonia                            | Zoqq NL           |
|                | Finland                            | Zoqq NL           |
|                | France                             | Zoqq NL           |
|                | Germany                            | Zoqq NL           |
|                | Greece                             | Zoqq NL           |
|                | Hungary                            | Zoqq NL           |
|                | Iceland                            | Zoqq NL           |
|                | Ireland                            | Zoqq NL           |
|                | Italy                              | Zoqq NL           |
|                | Latvia                             | Zoqq NL           |
|                | Liechtenstein                      | Zoqq NL           |
|                | Lithuania                          | Zoqq NL           |
|                | Luxembourg                         | Zoqq NL           |
|                | Malta                              | Zoqq NL           |
|                | Netherlands                        | Zoqq NL           |
|                | Norway                             | Zoqq NL           |
|                | Poland                             | Zoqq NL           |
|                | Portugal                           | Zoqq NL           |
|                | Romania                            | Zoqq NL           |
|                | Slovakia                           | Zoqq NL           |
|                | Slovenia                           | Zoqq NL           |
|                | Spain                              | Zoqq NL           |
|                | Sweden                             | Zoqq NL           |


## Onboard Connected Accounts

Onboard your users, merchants, subsidiaries, business partners, or clients onto your platform by creating connected accounts.  
You can update account information anytime, including adding identification documents. After providing all the required information, you can submit the account for activation.

Zoqq requires the following compliance checks for your customer for successful onboarding:

- **KYC (Know Your Customer)**  
  Required for general onboarding. This is also a prerequisite to access the KYB component.

- **KYB (Know Your Business)**  
  Required for payments onboarding.  
  > **Note:** The KYB check is only required if your customer will be onboarded as **Merchant-Of-Record**, which depends on your payments gateway model of choice.


## KYC and Onboarding

Zoqq offers multiple options to onboard connected accounts and submit them for KYC:
- **Hosted flow** (Zoqq-hosted full-page redirect)
- **Accounts API**

Once a new account is created and connected to your platform, you can update account information anytime prior to submitting the account for activation.

This section describes these options at a high level, including tradeoffs and use cases for each.  
> **Note:** These options are not mutually exclusive, but we recommend building a unified onboarding experience.

| Feature               | Hosted Flow                                  | Zoqq API                                          |
|-----------------------|-----------------------------------------------|--------------------------------------------------------|
| **Description**       | Redirect customers into a flow hosted by Zoqq | Fully control the onboarding UI, built on top of Zoqq APIs |
| **Suitable for**      | Spending minimal tech effort. Redirect connected accounts to Zoqq-hosted page to get to market quickly. | A highly customized onboarding workflow. Requires more time and development resources. |
| **KYC Information**   | Collects required KYC information from your end users | Collect on your own interface |
| **AML (Anti-money laundering)** | Supported                                     | Supported                                                 |
| **Sanctions Screening** | Supported                                     | Supported                                                 |
| **Identity Verification** | Real-time progressive verification             | Verification after submitting to Zoqq in the back end     |
| **Customization**     | Basic theming                                | Full control over look and feel                            |
| **Integration Effort**| Minimal coding                                | Most coding                                                |


## Key Features

- Dynamic adjustment of KYC information collection to meet local compliance requirements, based on country and business model
- Customized theming to reflect your company's brand
- Real-time progressive verifications in select jurisdictions, optimized for successful onboarding

[View the onboarding experience](https://demo.zoqq.com) offered by the Embedded KYC component.

This guide describes how to embed the KYC component into your page to start onboarding connected accounts.



## Hosted Onboarding

Hosted onboarding enables you, as a platform, to redirect end users to a **Zoqq-hosted** web form to complete onboarding. This means you can onboard customers without building a full-fledged onboarding form using Zoqq APIs.

Zoqq’s hosted form dynamically handles KYC data collection, customized by country or account type. You'll leverage our UX optimizations for localization and conversion. You can also customize the visual appearance of the form to reflect your brand.

### Hosted Flow Steps

1. Retrieve a secure, short-lived hosted flow link unique to each connected account via API.
2. Redirect the user to the **Zoqq-hosted** form.
3. Once completed, users are redirected to your return URL.

> Try out the hosted onboarding flow in the [Zoqq demo environment](https://awx-demo.vercel.app/).

---

## Before You Begin

Contact your **Zoqq Account Manager** to:

- Enable connected account onboarding using Hosted Flow.
- Provide you with a **hosted flow template open ID**.
- Customize the main landing page (business name, logo, color).
- Get your **access token** by authenticating with your Client ID and API Key.
- Ensure your integration supports Zoqq native API for other funds and payment control.
- Make sure connected accounts are **business accounts** only (not individuals).

---

## Step 1: Create a Connected Account for KYC

```bash
curl --request POST \
  --url 'https://api-demo.zoqq.com/api/v1/accounts/create' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your_bearer_token>' \
  --data-raw '{
    "primary_contact": {
      "email": "test@zoqq.com"
    },
    "account_details": {
      "business_details": {
        "business_name": "Example Company"
      }
    },
    "customer_agreements": {
      "agreed_to_terms_and_conditions": true,
      "agreed_to_data_usage": true
    }
  }'
```

## Business KYC Requirements

In this section, we will outline the KYC requirements tailored to each jurisdiction and business structure, ensuring that you have a clear understanding of the necessary documentation and steps involved. By following these guidelines, you can confidently navigate the onboarding process.

## Jurisdictions

- **AU** - Australia  
- **CA** - Canada  
- **CN** - China  
- **EU** - European Union  
- **DE** - Germany  
- **ES** - Spain  
- **FR** - France  
- **IE** - Ireland  
- **IT** - Italy  
- **NL** - Netherlands  
- **GB** - United Kingdom  
- **HK** - Hong Kong  
- **SG** - Singapore  
- **US** - United States  
- **Others** - Other jurisdictions not listed above

## Handle KYC RFI

After you submit your connected account for activation, zoqq might request additional information to successfully complete the account activation, even if the information you submitted when updating the account was initially deemed sufficient.

There are generally two reasons this might happen:

1. **Failed identity verification**  
   During KYC we have to verify the identity of your customer. If we are unable to verify the identity, you’ll need to ask the individual to submit a second form of identification, or retry after correcting any errors in the previously submitted data.

2. **Additional information requests**  
   During KYC, we have to assess the risk of each customer in order to decide whether the account can be activated or not. In some instances, more information will be required to make that decision.

## KYB and Onboarding

KYB screening is only required if your customer will be onboarded as Merchant-Of-Record for payments acceptance via the zoqq payment gateway.

After applying for general onboarding and submitting KYC information, you can proceed to submit **Know Your Business (KYB)** information. Note that KYB checks are only required if your customer will be onboarded as Merchant-Of-Record, which depends on your payments gateway model of choice.

KYB checks verify the identity of your customer's business and assess any potential risks. While this process is similar to Know Your Customer (KYC) regulations, KYB focuses on understanding the underlying business and its entities beyond the corporate legal structure and its associated business owners.

KYB is a legal requirement for many payment services designed to prevent businesses from becoming involved in money laundering, fraud, and other financial crimes. It serves as a protective measure ensuring businesses operate in a lawful and ethical manner, thereby maintaining the trust of clients and partners.

zoqq offers multiple options to submit KYB information:

- **Embedded KYB component**: You can onboard customers through a UI component embedded directly into your site.
- **Hosted flow**: You can redirect customers into a flow hosted by zoqq.
- **Native API**: You have full control of the onboarding UI, built on top of zoqq APIs.

## Handle Payment Enablement RFI

After you submit your connected account for activation, zoqq might request additional information to successfully enable payments-related capabilities on the account.

The additional information may include the following:

- Questions relating to the **business model** of the client or the information contained in their application.
- Questions relating to the **activation of specific payment methods** and requests for additional information relating to those payment methods.
- Questions relating to **requests for specific settings** to be added on to the account.
- Requests relating to **PCI DSS Compliance**.


## Handle Transaction RFI

zoqq conducts a risk assessment for each transaction to ensure that our teams have a strong understanding of your business model and account usage, as well as to protect both you and the zoqq ecosystem from financial crime.

Sometimes, additional information is needed to properly assess the risk associated with the transaction. This is commonly a request for supporting documents relating to the transaction itself, such as invoices or contracts to support the underlying fund movement, or other supporting information to help us understand the related context of the transaction.

zoqq provides multiple integration options to handle additional information requests for transactions. Note that these options are not mutually exclusive, but we recommend building a unified RFI experience:

- **Embedded component**
- **Hosted flow**
- **Native API**

We recommend that you **subscribe to RFI webhooks** to be informed of additional information requests for transactions.

## Onboard multiple connected accounts


As a platform, you have the ability to create multiple accounts for one existing, KYC-verified account. These supplementary accounts, which are tied to the same legal entity as the initial account, will all function as separate connected accounts to the platform. Notably, supplementary accounts for the same legal entity bypass the need for KYC verification and receive immediate approval.

Each account is equipped with its own wallet. Using multiple accounts for the same legal entity can be used to facilitate reconciliation as it enables each account to manage its segregated funds for various purposes — like inbound money transfers and treasury management — separately.

