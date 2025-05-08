---
id: issuing
title: Issuing
hide_table_of_contents: true
---

[← Back to Home](/)
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Issuing

**Issue and manage multi-currency cards at scale, while reducing international transaction and FX fees.**

---

## Choose an issuing solution that best fits your needs

Use one or more products to build a unique solution for your use case.  
Learn more on [Choose your issuing solution](#).

---

## Issue cards

Pay out business expenses or issue cards to individuals.

---

## Set spending controls

Control the spending on issued cards.

---

## Manage cards

Cancel, freeze, or retrieve sensitive details.

---

## Our issuing network

Explore our supported regions and currencies on multi-currency cards.

### Geographic coverage

Issue multi-currency Visa cards across the world.

### Multi-currency support

Transact securely in 140+ currencies worldwide.

---

## Explore related products

Integrate your issuing solution with Airwallex products to strengthen your global financial infrastructure.

### Embedded Finance Use Cases

#### Banking as a Service

Offer a full-featured fintech solution including accounts and card issuing.

#### Global Treasury

Enable your platform to collect and disburse funds globally.

---

### Platform APIs

#### Payouts

Programmatically make cost-effective, fast and secure global payouts.


## How Zoqq Issuing Works

Zoqq’s Issuing platform enables businesses to create and manage multi-currency cards, allowing you to pay millions of suppliers globally within seconds. Unlike a traditional prepaid product, Zoqq-issued cards don't require you to lock-in funds on the card when requesting it – the funds are sourced from your Zoqq Wallet.

All Zoqq-issued cards are Visa multi-currency cards that allow you to transact in over 140 currencies, with no international transaction fees. Zoqq also offers direct billing in multiple currencies (see supported regions and currencies).

---

## Key Features

- **Provisioning of Visa cards** through Zoqq’s Global Issuing infrastructure and licensing.
- **Single-use or multi-use cards** issued directly to you with ease and efficiency.
- **Choice between business and individual cards**:  
  - Business cards are associated with your company.  
  - Individual cards are associated with a named representative of your business and can be used with digital wallets (Apple/Google Pay) as well as physical card products.
- **Authorization controls** to manage card usage, including real-time participation in the transaction sequence.
- **RESTful APIs** to manage your entire card program.
- **Flexible funding options**:  
  - Use a single funding source for all cards or  
  - Separate sources for each card.
- **Whitelabeling capabilities** to customize Zoqq products to match your company’s brand and offerings.

---

As a Zoqq Issuing customer, you don't need to worry about BIN sponsorship, card production, transaction processing, or balance management. Zoqq is fully PCI compliant and handles all PCI requirements on your behalf. Depending on your requirements and certifications, Zoqq will work with you to provide an end-to-end solution tailored to your needs.

## Supported Regions and Currencies

This page provides information on the latest capabilities of Zoqq Issuing. For any further questions regarding capabilities specific to your region and currency, please contact your Zoqq Account Manager.

---

## Currencies

Zoqq-issued cards are multi-currency cards, which can be used for transactions in any currency supported by Visa, as long as you have a sufficient balance in your Zoqq Wallet to cover the transaction.

**Direct Billing** is a feature that allows Zoqq to directly debit your Zoqq multi-currency Wallet in that currency without any hidden charges or conversion fees.  
For example, for a GBP transaction, your GBP Wallet will be debited.

Zoqq offers Direct Billing in the following currencies:

- USD
- AUD
- CAD
- SGD
- NZD
- HKD
- JPY
- EUR
- GBP
- CHF
- ILS¹

> ¹ Only available for cards issued to businesses based in Israel.

For transactions in all other currencies, Zoqq will debit an equivalent amount from your base currency Wallet (AUD for Australia). In such cases, the conversion rate will be based on Visa’s daily exchange rate.  
For example, for an AED transaction, your AUD Wallet will be debited for an equivalent amount based on Visa's rate.

---

## Regions

Zoqq has issuance capabilities in over **50+ countries** worldwide. Some of the most common countries where Zoqq issues cards include:

- Australia  
- Canada  
- European Economic Area (31 countries)  
- Hong Kong SAR  
- Israel  
- New Zealand  
- Singapore  
- United States of America  
- United Kingdom

Zoqq is rapidly expanding its infrastructure and geographic coverage to become your one-stop solution for global operations.  
If you're looking to operate in a country not listed above, please contact us. We’re eager to understand your needs and develop a tailored solution for you.


## Supported Card Programs

> This information is relevant only for API version `2024-03-31` and later.

Zoqq's card programs provide a variety of card issuance options to meet different business needs. These programs can be used simultaneously and flexibly based on your business workflows.

---

## Card Programs Overview

Zoqq supports several card programs that determine the **Bank Identification Number (BIN)** and the **program type** of the issued card. Please contact your Zoqq Account Manager for regional availability.

### Program Structure

- **Brand**: Currently, only Visa is supported.
- **Program Purpose**: Choose between **commercial** and **consumer** cards based on your business use case.
- **Cardholder Types**:
  - **Delegate**
  - **Individual**
- **Personalization Options**:
  - Personalized
  - Non-personalized
- **Card Forms**:
  - Virtual
  - Physical
  - Digital (e.g., Apple Pay / Google Pay)
- **Program Type**:
  - **Prepaid**: Access funds from your Zoqq Wallet
  - **Debit**: Also accesses funds from Wallet, accepted like credit cards
  - **Credit**: Loan-like products
  - **Deferred Debit**: Specific to travel sector (e.g., OTAs in UK/EEA)
- **Program Sub-Type**:
  - **Good Funds Credit** (Credit sub-type): Pre-auth funds must be available
  - **B2B Travel**: Available across Prepaid, Debit, Credit, Deferred Debit

---

## Commercial vs. Consumer Comparison

| Feature                     | Commercial                                                                                        | Consumer                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Suited for                  | Business expenses, software, OTA workflows                                                        | Payouts to consumers (influencers, gig workers, payroll) |
| Personalized                | Supported                                                                                         | Required                                                |
| Cardholder Types            | Delegate & Individual                                                                             | Individual only                                         |
| Card Form                   | Non-personalized: Virtual only<br />Personalized: Virtual/Digital/Physical                        | Virtual/Digital/Physical only                           |
| Name on Card                | Business name (non-personalized)<br />Individual legal name (personalized)                        | Individual legal name                                   |
| Fund Ownership              | Business controls funds                                                                           | Customer owns funds in Connected Account Wallet         |
| Access to Sensitive Details | Non-personalized: Direct access via API<br />Personalized: PCI compliance or secure iframe required | PCI compliance or secure iframe required                |
| PIN                         | No (non-personalized)<br />Supported (personalized, with PCI compliance or iframe)                | Supported                                               |
| Card Management             | Edit, cancel/freeze supported                                                                     | Edit, cancel/freeze supported                           |
| Card Controls               | All supported                                                                                     | All supported                                           |
| Whitelabelling              | Supported                                                                                         | Supported                                               |

---

## Personalized vs. Non-personalized

| Feature               | Non-personalized     | Personalized                                       |
|-----------------------|----------------------|----------------------------------------------------|
| Name on Card          | Business name        | Legal name of individual                           |
| Card Association      | Multiple cardholders | Single cardholder (Individual)                     |
| Sensitive Data Access | Direct API           | PCI compliant or secure iframe                     |
| Supported Features    | Virtual cards, 3DS   | Virtual, Digital (Apple/Google Pay), Physical, 3DS |

---

## Card Form Comparison

| Feature          | Virtual                                           | Physical                            | Digital                                        |
|------------------|---------------------------------------------------|-------------------------------------|------------------------------------------------|
| Description      | Unique card details, used online/stored digitally | Physical card with embossed details | Stored in Apple/Google Pay for contactless use |
| Non-personalized | Yes                                               | No                                  | No                                             |
| Personalized     | Yes                                               | Yes                                 | Yes                                            |
| Activation       | Auto-activated                                    | Manual or API                       | Active cards only                              |