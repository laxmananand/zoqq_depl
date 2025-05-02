---
title: Supported Regions and Currencies
sidebar_label: Supported Regions & Currencies
sidebar_position: 1
hide_table_of_contents: true
---

# Supported Regions and Currencies

This page provides information on the latest capabilities of Global Accounts. To explore coverage for Airwallex global payouts, Linked Accounts, and transactional FX capabilities, see [Market & Infrastructure Coverage]().

For any further questions regarding capabilities specific to your region and currency, please contact your Airwallex Account Manager.

## Global Accounts Coverage

You can create Global Accounts in the following regions and currencies, and receive bank transfers via local payment methods and/or SWIFT. You can also use Global Accounts to authorize direct debit payouts to recipients of your choice.

| Region                 | Currency                                                                                                | Receive Bank Transfers via Local Payment Methods               | Receive Bank Transfers via SWIFT | Payout via Direct Debit |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------- | ----------------------- |
| Australia              | AUD                                                                                                     | Bank Transfer                                                  | No                               | Yes                     |
| Canada                 | CAD                                                                                                     | EFT, Interac e-Transfer                                        | No                               | Yes                     |
| Denmark\*              | DKK, EUR, AUD, CAD, CHF, CNY, CZK, GBP, HKD, HUF, ILS, JPY, MXN, NOK, NZD, PLN, RON, SEK, SGD, USD, ZAR | DKK: Intradagclearing, RTGS (KRONOS2); EUR: SEPA Instant, SEPA | Yes                              | No                      |
| Estonia                | EUR                                                                                                     | SEPA Instant, SEPA                                             | No                               | No                      |
| Germany                | EUR                                                                                                     | SEPA Instant, SEPA                                             | No                               | No                      |
| Hong Kong SAR          | CNY, EUR, HKD, USD, AUD, GBP, JPY, SGD, CHF, CAD, NZD                                                   | CNY/HKD: ACH, RTGS, FPS; EUR/USD: RTGS                         | Yes                              | No                      |
| Indonesia              | IDR                                                                                                     | RTGS, SKN, BI-FAST                                             | No                               | No                      |
| Israel                 | ILS                                                                                                     | Faster Payments, MASAV, ZAHAV                                  | No                               | No                      |
| Mexico                 | MXN                                                                                                     | SPEI                                                           | No                               | No                      |
| Netherlands\*          | EUR                                                                                                     | SEPA Instant, SEPA                                             | No                               | Yes                     |
| New Zealand            | NZD                                                                                                     | Direct Credit                                                  | No                               | No                      |
| Poland\*               | PLN                                                                                                     | Elixir, Express Elixir, RTGS (SORBNET)                         | No                               | No                      |
| Singapore              | SGD, USD, AUD, CAD, CHF, CNY, EUR, GBP, HKD, JPY, NOK, NZD, SEK                                         | SGD: GIRO, MEPS, FAST                                          | Yes                              | No                      |
| United Arab Emirates\* | AED                                                                                                     | IPI, RTGS                                                      | No                               | No                      |
| United Kingdom         | GBP                                                                                                     | Faster Payments, BACS, CHAPS                                   | Yes                              | Yes                     |
| United States          | USD                                                                                                     | ACH, Fedwire, Fednow*, RTP*                                    | Yes                              | Yes                     |

_Updated on Mar 18, 2025_

## Notes

- **Denmark**: Not available to customers of AWX Lithuania, UAB
- **Poland**: Only available to customers of Airwallex (UK) Ltd and Airwallex (Netherlands) B.V.
- **United Arab Emirates**: Not available to customers based in UAE
- **Netherlands**: Only supports SEPA Core for Payout via Direct Debit
- **United States**: FedNow and RTP are available only for eligible customers, subject to approval

## Global Accounts

Global Accounts enable you to receive bank transfers into and authorize direct debit payouts from the Wallet. Learn how to create, manage and use Global Accounts in the region and currency of choice, as well as retrieve transaction details for the purposes of reconciliation, proof of funds, data analysis using Zoqq API.

## Before you begin

- Obtain your access token by authenticating to Airwallex using your unique Client ID and API key. You will need the access token to make API calls.
- Set up webhooks to receive notifications on Global Account events.
- If your business requires a large number of Global Accounts, please contact your Airwallex Account Manager.
- As a platform, you can call all Global Accounts API endpoints on behalf of your connected accounts by specifying the connected account's open ID (in the format acct_xxxxxx) in the x-on-behalf-of header of your API request. To learn about how you can register as a platform and set up this solution, see Global Treasury and Banking as a Service solutions.

## Create a Global Account

Use the dynamic schema , you can retrieve the full list of supported currencies and their respective transfer methods in the sample API request for the selected country where the Global Account will be held. Based on this information, call the Open a Global Account endpoint with the following parameters:

- alternate_account_identifiers\*:
  - email: Specify an email address for receiving funds via Interac e-Transfer Autodeposit. If omitted, Airwallex will register and return an Airwallex email. Refer to Update your Global Account for an example request and supported email format.
- country_code: Specify the region where the Global Account will be held.
- nick_name: Specify a name to uniquely identify the Global Account. This is for your own record keeping only, and will not show up on bank statements.
- request_id: Specify a unique identifier for the request.
- required_features: Specify the supported currencies and transfer methods that you require for the region provided by passing an array of:
  - currency: Specify the currency that’s supported for the region provided.
  - transfer_method: Specify LOCAL or SWIFT depending on the region and currency.
    - Each currency may support either LOCAL, SWIFT, or both LOCAL and SWIFT transfer methods.
    - The Global Account opened may support more than the specified transfer_method. Specifying LOCAL for a particular currency may open a Global Account that supports only LOCAL, or both LOCAL and SWIFT transfer methods.
- See Supported regions and currencies to learn more about our supported transfer methods.
