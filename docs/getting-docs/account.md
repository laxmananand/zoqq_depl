---
title: Overview
sidebar_label: Overview
sidebar_position: 1
hide_table_of_contents: true
---


## Accounts

<h1>🌍 Global Accounts</h1>
<p>Open and manage global accounts at scale in 20+ currencies.</p>
<hr />

<h2>💰 Receive Funds and Authorize Payouts</h2>
<p> Receive funds in local currency and authorize direct debit payouts in multiple geographies. </p>

<div
  className="feature-boxes"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    margin: "30px 0"
  }}
>
  <a
    href="/docs/getting-docs/receiveBankTransfer"
    className="feature-box"
    style={{
      display: "block",
      padding: "25px",
      borderRadius: "8px",
      background: "#f8f9fa",
      border: "1px solid #e1e4e8",
      transition: "all 0.3s ease",
      color: "inherit",
      textDecoration: "none"
    }}
  >
    <h3 style={{ marginTop: 0, color: "#2d3748" }}>
      Receive bank transfers to Global Accounts
    </h3>
    <p style={{ marginBottom: 0 }}>
      Receive bank transfers via local clearing systems or SWIFT from you, your customers, other parties, or platforms
    </p>
  </a>

<a
href="./directDebits"
className="feature-box"
style={{
      display: "block",
      padding: "25px",
      borderRadius: "8px",
      background: "#f8f9fa",
      border: "1px solid #e1e4e8",
      transition: "all 0.3s ease",
      color: "inherit",
      textDecoration: "none"
    }}

>

    <h3 style={{ marginTop: 0, color: "#2d3748" }}>
      Direct debits from Global Accounts
    </h3>
    <p style={{ marginBottom: 0 }}>
      Authorize an external party to deduct funds from the Wallet via direct debit
    </p>

  </a>
</div>

<hr />

<h2>🛠️ Explore Use Cases</h2>

<div
  className="use-case-boxes"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    margin: "30px 0"
  }}
>
  <a
    href="./globalTreasury"
    className="use-case-box"
    style={{
      display: "block",
      padding: "20px",
      borderRadius: "8px",
      background: "#f0f7ff",
      border: "1px solid #c2d9ff",
      transition: "all 0.3s ease",
      color: "inherit",
      textDecoration: "none"
    }}
  >
    <h4 style={{ marginTop: 0, color: "#1a56db" }}>Global Treasury</h4>
    <p style={{ marginBottom: 0 }}>
      Enable your platform to collect and disburse funds globally
    </p>
  </a>

<a
href="./banking-as-a-service"
className="use-case-box"
style={{
      display: "block",
      padding: "20px",
      borderRadius: "8px",
      background: "#f0f7ff",
      border: "1px solid #c2d9ff",
      transition: "all 0.3s ease",
      color: "inherit",
      textDecoration: "none"
    }}

>

    <h4 style={{ marginTop: 0, color: "#1a56db" }}>Banking as a Service</h4>
    <p style={{ marginBottom: 0 }}>
      Offer a full-featured fintech solution including accounts and card issuing
    </p>

  </a>
</div>

<hr />

### Supported Regions and Currencies

This page provides information on the latest capabilities of Global Accounts. To explore coverage for zoqq global payouts, Linked Accounts, and transactional FX capabilities, see [Market & Infrastructure Coverage].

For any further questions regarding capabilities specific to your region and currency, please contact your zoqq Account Manager.

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
- **Poland**: Only available to customers of zoqq (UK) Ltd and zoqq (Netherlands) B.V.
- **United Arab Emirates**: Not available to customers based in UAE
- **Netherlands**: Only supports SEPA Core for Payout via Direct Debit
- **United States**: FedNow and RTP are available only for eligible customers, subject to approval

## Global Accounts

Global Accounts enable you to receive bank transfers into and authorize direct debit payouts from the Wallet. Learn how to create, manage and use Global Accounts in the region and currency of choice, as well as retrieve transaction details for the purposes of reconciliation, proof of funds, data analysis using Zoqq API.

## Before you begin

- Obtain your access token by authenticating to zoqq using your unique Client ID and API key. You will need the access token to make API calls.
- Set up webhooks to receive notifications on Global Account events.
- If your business requires a large number of Global Accounts, please contact your zoqq Account Manager.
- As a platform, you can call all Global Accounts API endpoints on behalf of your connected accounts by specifying the connected account's open ID (in the format acct_xxxxxx) in the x-on-behalf-of header of your API request. To learn about how you can register as a platform and set up this solution, see Global Treasury and Banking as a Service solutions.

## Create a Global Account

Use the dynamic schema , you can retrieve the full list of supported currencies and their respective transfer methods in the sample API request for the selected country where the Global Account will be held. Based on this information, call the Open a Global Account endpoint with the following parameters:

- alternate_account_identifiers\*:
  - email: Specify an email address for receiving funds via Interac e-Transfer Autodeposit. If omitted, zoqq will register and return an zoqq email. Refer to Update your Global Account for an example request and supported email format.
- country_code: Specify the region where the Global Account will be held.
- nick_name: Specify a name to uniquely identify the Global Account. This is for your own record keeping only, and will not show up on bank statements.
- request_id: Specify a unique identifier for the request.
- required_features: Specify the supported currencies and transfer methods that you require for the region provided by passing an array of:
  - currency: Specify the currency that’s supported for the region provided.
  - transfer_method: Specify LOCAL or SWIFT depending on the region and currency.
    - Each currency may support either LOCAL, SWIFT, or both LOCAL and SWIFT transfer methods.
    - The Global Account opened may support more than the specified transfer_method. Specifying LOCAL for a particular currency may open a Global Account that supports only LOCAL, or both LOCAL and SWIFT transfer methods.
- See Supported regions and currencies to learn more about our supported transfer methods.

Note:

Applicable to Canada CAD Global Accounts only.

The response will contain the bank account information of the Global Account including:

Global Account ID

Global Account details: account_name, account_number, account_type (CHECKING, SAVING, CURRENT), alternate_account_identifiers

Global Account status (ACTIVE, INACTIVE)

The required_features that was specified in the Open a Global Account API request

The supported_features of this Global Account, including:

The respective transfer_method

local_clearing_system

routing_codes

type of each currency supported by the Global Account in an array

Each currency may support multiple transfer_method and/or local_clearing_systems, and in such cases, multiple objects of the same currency may appear in the supported_features array.

The routing_codes object specifies information such as bank_code and branch_code of the corresponding transfer_method or local_clearing_system. For example, FEDWIRE and ACH routing_codes will be returned in an array with different values under local_clearing_systems for a US Global Account.

The type returned in supported_features indicates the transaction type supported by the Global Account:

DEPOSIT: Supports receiving deposits for the respective currency and corresponding transfer method or local clearing system

DIRECT_DEBIT: Supports direct debit payouts for the respective currency and corresponding transfer method or local clearing system

When both DEPOSIT and DIRECT_DEBIT are supported, this will be returned as two line items under the supported_features array.

Additional information includes:

Global Account financial institution details (bank name, branch name, bank address, and SWIFT code)

<h2>Example request </h2>

```shell
curl --request POST \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/update' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_bearer_token>' \
--data '{
  "nick_name": "CAD in CA for Subsidiary Company ABC",
  "alternate_account_identifiers": {
    "email": "yourname@yourdomain.com"
  }
}'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the x-on-behalf-of header.

<h2>Example request </h2>
```shell
{
  "account_name": "string",
  "account_number": "88888888",
  "account_type": "Checking",
  "country_code": "GP",
  "iban": "GB81LHVB04032900176471",
  "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
  "institution": {
    "address": "Old Street Yard",
    "branch_name": "Test branch",
    "city": "London",
    "name": "Saxo Payments A/S",
    "zip_code": "018982"
  },
  "nick_name": "GBP in UK for Subsidiary Company ABC",
  "request_id": "8d411ad4-aed6-1261-92fa-51225212e2e1",
  "required_features": [{
     "currency": "USD",
     "transfer_method": "LOCAL",
     "type": "DEPOSIT"
  }, {
     "currency": "USD",
     "transfer_method": "SWIFT",
     "type": "DEPOSIT"
  }],
  "status": "ACTIVE",
  "supported_features": [{
     "currency": "USD",
     "transfer_method": "LOCAL",
     "local_clearing_system": "ACH",
     "routing_codes": [
        {
          "type": "ach",
          "value": "040329212"
        }
     ],
     "type": "DEPOSIT"
  }, {
     "currency": "USD",
     "transfer_method": "LOCAL",
     "local_clearing_system": "FEDWIRE",
     "routing_codes": [
        {
          "type": "wire",
          "value": "040329218"
        }
     ],
     "type": "DEPOSIT"
  }, {
     "currency": "USD",
     "transfer_method": "LOCAL",
     "local_clearing_system": "ACH",
     "routing_codes": [
        {
          "type": "ach",
          "value": "040329212"
        }
     ],
     "type": "DIRECT_DEBIT"
  }, {
     "currency": "GBP",
     "transfer_method": "LOCAL",
     "local_clearing_system": "RTGS",
     "routing_codes": [
        {
          "type": "bank_code",
          "value": "123"
        }, {
          "type": "branch_code",
          "value": "456"
        }
     ],
     "type": "DEPOSIT"
  }],
  "swift_code": "SXPYDEHH"
}
```

<h2>Retrieve details of your Global Account</h2>
Call Get Global Account by ID  by specifying Global Account ID in the endpoint URL.

<h2>Example request </h2>
```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/<your_global_account_id>' \
--header 'Authorization: Bearer <your_bearer_token>'
```
If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the x-on-behalf-of header.

```shell
{
  "account_name": "string",
  "account_number": "88888888",
  "account_type": "Checking",
  "country_code": "GP",
  "iban": "GB81LHVB04032900176471",
  "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
  "institution": {
    "address": "Old Street Yard",
    "branch_name": "Test branch",
    "city": "London",
    "name": "Saxo Payments A/S",
    "zip_code": "018982"
  },
  "nick_name": "GBP in UK for Subsidiary Company ABC",
  "request_id": "8d411ad4-aed6-1261-92fa-51225212e2e1",
  "required_features": [
    {
      "currency": "GBP",
      "transfer_method": "LOCAL"
    }
  ],
  "status": "ACTIVE",
  "supported_features": [
    {
      "currency": "GBP",
      "local_clearing_system": "ACH",
      "routing_codes": [
        {
          "type": "sort_code",
          "value": "040329"
        }
      ],
      "transfer_method": "LOCAL",
      "type": "DEPOSIT"
    }
  ],
  "swift_code": "SXPYDEHH"
}
```

You can retrieve all Global Accounts associated with your zoqq account using **Get a list of Global Accounts**.

### Filter Options

You may filter the results based on:

- **Time period**: `from_created_at` and `to_created_at`
- **Currency requested during opening**: `required_features.currency`
- **Currency supported by the account**: `supported_features.currency`
- **Pagination**: Using `page_size` and `page cursor`
- **Status**: `ACTIVE`, `INACTIVE`, `CLOSED`

## Correspondent and Intermediary Banks for SWIFT Deposits

When receiving deposits via SWIFT, payer banks may require correspondent or intermediary bank information.

### For Global Accounts with ACH routing number ending in \*6768

**Intermediary bank information must be provided:**

| Currency | Intermediary Bank Name       | SWIFT Code | Address               | City            | ZIP Code |
| -------- | ---------------------------- | ---------- | --------------------- | --------------- | -------- |
| USD      | First National Banker's Bank | FRNAUS44   | 7813 Office Park Blvd | Baton Rouge, LA | 70809    |

### For Global Accounts with SWIFT code SCBLHKHH

**Recommended correspondent banks:**

| Currency | Correspondent Bank Name                         | SWIFT Code  |
| -------- | ----------------------------------------------- | ----------- |
| USD      | Standard Chartered Bank                         | SCBLUS33    |
| EUR      | Standard Chartered Bank                         | SCBLDEFX    |
| AUD      | Australia and New Zealand Banking Group Limited | ANZBAU3M    |
| CAD      | Royal Bank of Canada                            | ROYCCAT2    |
| CHF      | Credit Suisse                                   | CRESCHZZ80A |
| GBP      | Credit Suisse (Schweiz) AG                      | SCBLGB2L    |
| JPY      | Standard Chartered Bank                         | SCBLJPJT    |
| NZD      | ASB Bank Limited                                | ASBBNZ2A    |
| SGD      | Standard Chartered Bank (Singapore) Limited     | SCBLSG22    |

### For Global Accounts with SWIFT code DHBKHKHH

**Recommended correspondent banks:**

| Currency | Correspondent Bank Name             | SWIFT Code  |
| -------- | ----------------------------------- | ----------- |
| USD      | JP Morgan Chase Bank                | CHASUS33    |
| EUR      | Barclays Bank Ireland PLC           | BARCDEFF    |
| AUD      | Commonwealth Bank of Australia      | CTBAAU2S    |
| CAD      | Toronto-Dominion Bank               | TDOMCATTTOR |
| CHF      | UBS AG                              | UBSWCHZH80A |
| GBP      | National Westminster Bank PLC       | NWBKGB2L    |
| JPY      | Sumitomo Mitsui Banking Corporation | SMBCJPJT    |
| NZD      | ASB Bank Limited                    | ASBBNZ2A    |
| SGD      | DBS Bank Ltd                        | DBSSSGSG    |

### For Global Accounts with SWIFT code SXPYDKKK

**Recommended correspondent banks:**

| Currency | Correspondent Bank Name | SWIFT Code |
| -------- | ----------------------- | ---------- |
| USD      | Citibank N.A.           | CITIGB2L   |
| EUR      | Banking Circle SA       | BCIRLULL   |
| AED      | Citibank N.A.           | CITIGB2L   |
| AUD      | Citibank N.A.           | CITIGB2L   |
| CAD      | Citibank N.A.           | CITIGB2L   |
| CHF      | Citibank N.A.           | CITIGB2L   |
| CNY      | Citibank N.A.           | CITIGB2L   |
| CZK      | Ceska Sporitelna        | GIBACZPX   |
| GBP      | Banking Circle SA       | SAPYGB2L   |
| HKD      | Citibank N.A.           | CITIGB2L   |
| HUF      | Citibank N.A.           | CITIGB2L   |
| ILS      | Citibank N.A.           | CITIGB2L   |
| JPY      | Citibank N.A.           | CITIGB2L   |
| MXN      | Citibank N.A.           | CITIGB2L   |
| NOK      | Citibank N.A.           | CITIGB2L   |
| NZD      | Citibank N.A.           | CITIGB2L   |
| PLN      | PKO Bank Polski SA      | BPKOPLPW   |
| RON      | Citibank N.A.           | CITIGB2L   |
| SGD      | DBS Bank Ltd            | DBSSSGSG   |
| ZAR      | Citibank N.A.           | CITIGB2L   |

### For Global Accounts with SWIFT code SAPYGB2L

**Recommended correspondent bank:**

| Currency | Correspondent Bank Name       | SWIFT Code  | Address          | Sort Code | City   |
| -------- | ----------------------------- | ----------- | ---------------- | --------- | ------ |
| GBP      | National Westminster Bank Plc | NWBKGB2LXXX | 250 Bishops Gate | 600004    | London |

## Next Steps

- [Receive bank transfers to your Global Account](#)

# Manage Global Accounts

You can perform the following operations on Global Accounts once you create them.

## Update a Global Account

After creating a Global Account, you can update the following fields:

- `nick_name`
- `deposit_conversion_currency`
- `alternate_account_identifiers`

Other account details cannot be changed.

### How to Update

Call the **Update existing Global Account** endpoint by specifying the Global Account ID.

#### API Request Example

<h2>Example request </h2>
```shell
curl --request POST \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/update' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_bearer_token>' \
--data '{
  "nick_name": "New Account Nickname",
  "alternate_account_identifiers": {
    "email": "updated.email@yourdomain.com"
  }
}'
```
## Platform Access

If you are registered as a platform, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

## Email Format for Interac e-Transfer Autodeposit

### Supported Email Formats Under `alternate_account_identifiers`

zoqq supports the use of personal/corporate email addresses to register for Interac e-Transfer Autodeposit with Canada CAD Global Accounts. Any zoqq domain email address is not permitted.

> **Note:** If no email is included in the API request, an zoqq email in the format `etransfer.{Global Account number}@zoqq.com` will be used.

## Retrieve Global Account Transactions

You can obtain transaction details of funds received through your Global Account via bank transfers, and funds paid out via direct debit using **Generate Global Account transactions API**. The transactions retrieved are specific to the given Global Account, which could be useful for reconciliation purposes.

In your request, in addition to the mandatory Global Account `id`, you can specify:

- Start date (`from_created_at`)
- End date (`to_created_at`)
- Pagination settings (`page_num`, `page_size`) for the transaction report

<h2>Example request </h2>

```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/transactions?from_created_at=2017-04-01&page_num=0&page_size=100&to_created_at=2017-04-01T03%3A52%3A34%2B0000' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the x-on-behalf-of header.

<h2>Example request </h2>

```shell
{
  "has_more": false,
  "items": [
    {
      "amount": 10000,
      "create_time": "2017-03-22T16:08:02+1100",
      "currency": "AUD",
      "description": "string",
      "fee_amount": 10,
      "fee_currency": "AUD",
      "id": "90b98dc6-63a0-403f-816b-ac5305b42a11",
      "payer_country": "US",
      "payer_name": "AMZNnt70paD1",
      "status": "PENDING",
      "type": "CREDIT"
    }
  ]
}
```

## Generate Account Statements

As a Global Account holder, you may need to generate account statements as proof of account ownership to submit to a vendor, supplier, or auditor. This statement serves as a confirmation that you, as the Global Account holder, are a registered user of zoqq payment services and have registered to receive payments via a specific Global Account.

Call **Generate global account statement API** by specifying the unique Global Account ID in the URL. Provide the following parameters in the request:

- `account_statement_type`: You can generate two types of account statements:
  - `GENERAL`: Account statement for your Global Account in a specific currency and location.
  - `AMAZON`: Account statement specific to your seller account on Amazon marketplace. For this account statement, you must also provide `registration_info` and the `registration_info.agreement` field must be set to `true`.

A successful request will return the account statement as a PDF file.

<h2>Example request </h2>

```shell
curl --request POST \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/generate_statement_letter' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_bearer_token>' \
--data '{
  "account_statement_type": "AMAZON",
  "registration_info": {
    "agreement": true,
    "registered_address": {
      "address": "15 William Street",
      "city": "Melbourne",
      "country": "Australia",
      "postcode": "3000",
      "state": "VIC"
    },
    "registered_email": "john.walker@gmail.com",
    "registered_name": "John Walker"
  }
}
```

## Closing a Global Account

If you are registered as a platform, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Close your Global Account

You can close a Global Account instantly using **Close Global Account API** by specifying the unique Global Account ID in the URL.

Once the Global Account is closed, it can no longer receive **bank transfers** or **authorize direct debit payouts**. Your incoming bank transfers may be rejected by the Global Account banking partner and returned to the sender's account automatically, or the sender may receive a separate payout as a deposit return from zoqq. Additionally, the amount returned may be less than the original amount, as the process may incur a transaction fee. If you have authorized direct debit payouts using this Global Account, your incoming direct debit payouts will be immediately rejected and no funds will be debited from your Wallet.

If the Global Account is closed successfully, the status `CLOSED` will be returned. If the Global Account specified in your request cannot be closed, the request will return a 400 error with the code `invalid_argument` and one of the following error messages.

| **ERROR MESSAGE**                       | **DESCRIPTION**                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Global Account ID does not exist        | The Global Account ID specified does not exist. Please try again with a valid ID.                                  |
| Default Global Account cannot be closed | You cannot close the first Global Account opened under your zoqq account.                                          |
| Close unsupported                       | The Global Account in the current status cannot be closed. You can only close a Global Account in `ACTIVE` status. |

If you change your mind, it may be possible to reopen a closed Global Account depending on the time it was closed. Please contact your zoqq Account Manager or **Customer Support** team to learn more.

<h2>Example request </h2>

```shell
curl --request POST \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/46c22228-5831-4c53-a4fa-a3ab4954877c/close' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the x-on-behalf-of header.

<h2>Example request </h2>

```shell
{
  "account_name": "string",
  "account_number": "88888888",
  "account_type": "Checking",
  "close_reason": "CUSTOMER_REQUESTED",
  "country_code": "GP",
  "iban": "GB81LHVB04032900176471",
  "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
  "institution": {
    "address": "Old Street Yard",
    "branch_name": "Test branch",
    "city": "London",
    "name": "Saxo Payments A/S",
    "zip_code": "018982"
  },
  "nick_name": "GBP in UK for Subsidiary Company ABC",
  "request_id": "8d411ad4-aed6-1261-92fa-51225212e2e1",
  "required_features": [
    {
      "currency": "GBP",
      "transfer_method": "LOCAL"
    }
  ],
  "status": "CLOSED",
  "supported_features": [
    {
      "currency": "GBP",
      "local_clearing_system": "ACH",
      "routing_codes": [
        {
          "type": "sort_code",
          "value": "040329"
        }
      ],
      "transfer_method": "LOCAL",
      "type": "DEPOSIT"
    }
  ],
  "swift_code": "SXPYDEHH"
}
```

### Global Accounts in Regulated Countries Regions

Certain countries/regions impose strict foreign exchange controls, which translate into additional regulatory requirements in order to receive funds in these countries/regions via local clearing systems.

We offer an integrated experience to help you comply with such regulation requirements while maintaining the same core experience of creating bank accounts in these countries/regions, with a few additional API endpoints to consider.

### Indonesia

According to local regulations, receiving funds into your Indonesia Global Account must be supported by relevant order information, and funds must not be held in IDR.

Currently, zoqq supports receiving deposits to repatriate sales proceeds in Indonesia for the following use cases:

- **E-commerce goods trade**: Supports cross-border e-commerce sellers for goods sold imported from outside Indonesia.
- **B2B commerce**: Supports B2B sellers for goods sold imported from outside Indonesia.
- **Education and training**: Supports overseas companies providing education and training services in Indonesia.
- **International logistics**: Supports cross-border logistics services provided to customers in Indonesia.
- **Software**: Supports cross-border digital goods and services and advertising sold to customers in Indonesia (excl. gaming and any zoqq prohibited industries).
- **Professional services**: Supports overseas companies providing professional services in Indonesia.
- **Travel**: Supports Online Travel Agencies (OTA) providing flight, hotel, and tour booking services in Indonesia.

If you have a use case not included in the above list, where you provide cross-border goods or services in Indonesia, please contact your Account Manager to raise a request.

See **Indonesia** for a step-by-step guide to fulfill the regulatory requirements and receive IDR deposits locally.

## Closing a Global Account

If you are registered as a platform, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Close your Global Account

You can close a Global Account instantly using **Close Global Account API** by specifying the unique Global Account ID in the URL.

Once the Global Account is closed, it can no longer receive **bank transfers** or **authorize direct debit payouts**. Your incoming bank transfers may be rejected by the Global Account banking partner and returned to the sender's account automatically, or the sender may receive a separate payout as a deposit return from zoqq. Additionally, the amount returned may be less than the original amount, as the process may incur a transaction fee. If you have authorized direct debit payouts using this Global Account, your incoming direct debit payouts will be immediately rejected and no funds will be debited from your Wallet.

If the Global Account is closed successfully, the status `CLOSED` will be returned. If the Global Account specified in your request cannot be closed, the request will return a 400 error with the code `invalid_argument` and one of the following error messages.

| **ERROR MESSAGE**                       | **DESCRIPTION**                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Global Account ID does not exist        | The Global Account ID specified does not exist. Please try again with a valid ID.                                  |
| Default Global Account cannot be closed | You cannot close the first Global Account opened under your zoqq account.                                          |
| Close unsupported                       | The Global Account in the current status cannot be closed. You can only close a Global Account in `ACTIVE` status. |

If you change your mind, it may be possible to reopen a closed Global Account depending on the time it was closed. Please contact your zoqq Account Manager or **Customer Support** team to learn more.

## Indonesia

This step-by-step guide describes how you can indicate an auto-conversion currency for your IDR Global Account, provide order information, and retrieve deposit limit for incoming IDR deposits.

## Step 1: Indicate auto-conversion currency

According to local regulations, deposits received in Indonesia cannot be held in IDR and therefore they will be automatically converted into a currency of your choice at zoqq's competitive conversion rates.

When calling **Create a Global Account**, if your currency is set to IDR, you will be required to indicate a `deposit_conversion_currency` within the request. The conversion currency can be any currency that we support to be held in your Wallet. You can use **Supported currencies** to get the list of currencies that can be bought (and therefore held). When an IDR deposit comes into your Global Account, it will be immediately converted to your indicated currency.

You can also amend your configuration later by calling **Update your Global Account**. The update will be effective for all deposits that settle after your request has been processed.

You may check the corresponding conversions under **List all conversions**. We offer the same competitive rates as conversions created via our MarketFX product.

## Step 2: Provide order information to increase deposit limit

According to local regulations, deposits received in Indonesia require underlying order details to be submitted. Based on the cumulative amount of orders provided, a deposit limit for IDR will be assigned.

zoqq allows you to provide the required order information to increase deposit limit using the following methods:

### Marketplace connection:

Provide access to your seller data via token authorization on the zoqq web app. zoqq will automatically retrieve sales order information from the various e-commerce marketplaces.

Under Connections, you can find all our supported marketplace/independent site platforms. Click on the marketplace platform in Indonesia (such as Lazada, Shopee, or Shopify), to complete the authorization process.

### Uploading order information:

You can upload order information via **Upload order items**. Any invalid order information will return an error response. Please note that it is the declarant's responsibility to submit genuine order information. Please contact your Account Manager to enable order uploads for your zoqq account.

Once verified, the total amount of orders generated in the past 350 days represents the deposit limit for IDR deposits for your zoqq account.

### Upload order items

Call **Upload order items** to increase deposit limit for deposits from Indonesia. You can submit order information from 1 item up to a maximum of 500 items.

When you submit multiple order items, it is possible that only some of them pass validation. If you wish to have any order items that pass validation rules to be accepted and used toward increasing your deposit limit, set the `allow_partial_success` query parameter in the endpoint URL to `true`. If you wish for the entire request to be rejected so you may adjust the order item details and reattempt submission, set the parameter to `false` or `null`.

Set the `type` query parameter to `ID_OUTBOUND`.

Provide the following parameters in your request:

- **category**: The order category must be one of `goods_trade_online`, `goods_trade_offline`, `services_trade_education_and_training`, `services_trade_international_logistics`, `services_trade_software`, or `services_trade_professional`
- **currency**: The 3-letter ISO 4217 currency code for the order currency.
- **item_name**: A readable name of the item sold.
- **item_quantity**: The quantity of the item (should be an integer).
- **item_unit_price**: The unit price of the item.
- **item_url**: URL of the item. You can provide a link to the product page for e-commerce goods trade, or a link to the website advertising your services. The domain of this Item URL should match the one you provided at onboarding. Reach out to your Account Manager if you wish to submit additional domains for approval.
- **line_total**: The total amount for the line items. This must match with item_quantity and item_unit_price.
- **order_datetime**: Order date time in ISO 8601 date-time format, no more than 350 days old.
- **order_id**: The unique ID for the order. This should be the order ID assigned by the e-commerce marketplace or your ERP/other softwares. For multiple items sharing the same order_id, submit all of them in a single request.
- **shipment_provider**: Name of the logistics provider, if your category is goods_trade_online or goods_trade_offline
- **shipment_tracking_number**: Tracking number issued by the logistics provider (5 to 35 characters), if your category is goods_trade_online or goods_trade_offline.

Upon successful upload of order information without errors, you will receive a 200 (OK) response with an empty response body.

#### Example request

```shell
curl --request POST \
--url 'https://api-demo.zoqq.com/api/v1/reference/order_items/upload?types=ID_OUTBOUND' \
--header 'Content-Type: application/json' \
--data '[
  {
    "category": "goods_trade_online",
    "currency": "IDR",
    "description": "book",
    "item_name": "book",
    "item_quantity": 1,
    "item_unit_price": 19.38,
    "item_url": "string",
    "line_total": 19.38,
    "order_datetime": "2021-09-16T03:52:34+0000",
    "order_id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
    "shipment_provider": "string",
    "shipment_tracking_number": "EG420386995JP"
  }
]'
```

If you are registered as a Scale platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

## Step 3: Retrieve your deposit limit

When you successfully upload order information, an IDR deposit limit equals the cumulative amount of the orders will be assigned to your account. For each incoming deposit, zoqq matches the deposit amount with orders of the corresponding amounts. This amount is then deducted from your deposit limit after the deposit has settled.

### Retrieve deposit limit

To retrieve your available deposit limit for IDR, call **Get transfer or deposit limit** and specify the `type` query parameter to `ID_OUTBOUND` in the endpoint URL.

#### Example request

```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/reference/order_items/quota?type=ID_OUTBOUND' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a Scale platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

#### Example response

```json
{
  "available_order_amount": 1000,
  "currency": "IDR",
  "history_order_amount": 1000
}
```

### Get expiring deposit limit

Only orders dated in the past 350 days may count towards your deposit limit, which will reduce as orders expire. To retrieve information about the expiring deposit limit, call **Get expiring transfer or deposit limit** and specify the `type` query parameter to `ID_OUTBOUND` in the endpoint URL. The response will return the available order amount that is due for expiry together with the expiry date. This allows you to schedule your deposits to utilize orders before they expire.

#### Example request

```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/reference/order_items/expiring_quota?type=ID_OUTBOUND' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a Scale platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

#### Example response

```json
{
  "currency": "IDR",
  "expire_by": "2021-09-16",
  "expiring_order_amount": 1000
}
```

# Receive Bank Transfers to Global Accounts

Global Accounts enable you to receive bank transfers via local payment methods and/or SWIFT from you, your customers, other parties and various platforms such as Amazon and Google.

## Receive Deposits

As a first step, you must have your Global Account details ready. See **Get Started** for how to create a Global Account and retrieve account details.

To collect funds from your own bank account or from third parties, simply initiate bank transfers into your Global Account using the retrieved bank account details.

**Review status codes** to track status transitions when deposits are credited into your Wallet.

## Simulate Deposits

zoqq provides a simulation API, **Create a Global Account Deposit API**, to create a production-like deposit into your Global Accounts in the demo environment. The status of deposit can be `SETTLED`, `PENDING`, or `REJECTED`. See **Simulate deposits to your Global Account**.

## Retrieve Deposits

You can retrieve transaction details for deposits made to your Wallet via bank transfers. For more information, see **Retrieve your deposits**.

# Simulate Deposits to Your Global Account

You can conduct unit and end-to-end testing of your integration using **Create a Global Account deposit**. This sandbox simulation endpoint creates a production-like deposit to your Global Account in the demo environment only.

Key test scenarios include:

- Triggering webhook event notifications for Global Accounts
- Viewing deposits in the Global Accounts activity list on the zoqq web app
- Retrieving deposits via **Get Global Accounts transactions**, **Get list of financial transactions**, and **Get balance history**
- Calling **Create a Global Account deposit** on behalf of connected accounts by specifying the open ID in the `x-on-behalf-of` header

## Step 1: Obtain your access token

Use **obtain access token** to obtain an access token to call our API endpoints.

### Example request

```shell
curl --location --request POST 'https://api-demo.zoqq.com/api/v1/authentication/login' \
--header 'Content-Type: application/json' \
--header 'x-client-id: [client_id]' \
--header 'x-api-key: [api_key]' \
--header 'Authorization: Bearer null' \
--data-raw ''
```

### Example response

```json
{
  "expires_at": "2022-02-22T06:48:39+0000",
  "token": "[jwt_token]"
}
```

## Step 2: Retrieve the Global Account ID

Create a Global Account (if you haven't already opened one) through our **open a Global Account** endpoint.

Get the Global Account ID (`global_account_id`) from the response or by calling **get a list of Global Accounts** endpoint.

### Example request

```shell
curl --location --request GET 'https://api-demo.zoqq.com/api/v1/global_accounts' \
--header 'Content-Type: application/json' \
--header 'x-client-id: [client_id]' \
--header 'x-api-key: [api_key]' \
--header 'Authorization: Bearer [jwt_token]' \
--data-raw ''
```

### Example response

```json
{
  "has_more": false,
  "items": [
    {
      "id": "486b8317-9135-4399-81c9-9c5397365d0f",
      "request_id": "713a042a-c820-42a5-8584-14b5a50f3e6e",
      "account_number": "87535504221",
      "account_name": "Alan API Test",
      "institution_name": "Standard Chartered Bank (Hong Kong) Ltd",
      "account_routing_type": "bank_code",
      "account_routing_value": "003",
      "swift_code": "SCBLHKHH",
      "status": "ACTIVE",
      "nick_name": "HKD Global Account 1",
      "currency": "HKD",
      "country_code": "HK",
      "payment_methods": ["SWIFT", "LOCAL"],
      "clearing_systems": ["ACH", "RTGS", "FPS"],
      "branch_code": "875"
    }
  ],
  "total_count": 1
}
```

## Step 3: Simulate a deposit

Call the **create a Global Account deposit** endpoint by specifying the `global_account_id` from step 2 and the deposit amount to simulate a production-like deposit.

### Example request

```shell
curl --request POST --url 'https://api-demo.zoqq.com/api/v1/simulation/deposit/create'
--header 'Content-Type: application/json'
--header 'Authorization: Bearer <your_bearer_token>'
--data '{
  "amount": 1000,
  "global_account_id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
  "payer_bankname": "Test bank",
  "payer_country": "HK",
  "payer_name": "1000",
  "reference": "test",
  "status": "PENDING"
}'
```

### Example response

```json
{
  "amount": 10000,
  "create_time": "2017-03-22T16:08:02+1100",
  "currency": "AUD",
  "deposit_type": "CREDIT",
  "fee_amount": 10,
  "fee_currency": {
    "currency_code": "string",
    "precision": 0,
    "value": "string"
  },
  "id": "90b98dc6-63a0-403f-816b-ac5305b42a11",
  "payer_country": "HK",
  "payer_name": "AMZNnt70paD1",
  "reference": "test",
  "status": "PENDING"
}
```

# Retrieve Your Deposits

The **Deposits API** enables you to retrieve transaction details for deposits received into the Wallet via bank transfers to Global Accounts and direct debits from Linked Accounts.

If you are retrieving a bank transfer deposit, you can subscribe to Deposit webhook events to receive any deposit status transitions.
**Bank transfer deposit statuses** for more information.

Depending on the Global Account financial institution & payment method, the availability of deposit details (eg. payer name, payer bank account number etc.) will vary.

## Retrieve All Deposits

You can retrieve deposits across all your Global Accounts using **Get a list of deposits**. Specify the time period (`from_created_date`, `to_created_date`) and the pagination parameters (`page_num`, `page_size`) to refine the results. If the time period is left unspecified or only the end date is specified, then deposits 30 days in arrears of today or the end date will be returned.

### Example request

```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/deposits?from_created_at=2017-03-19&page_num=0&page_size=100&to_created_at=2017-03-22T03%3A52%3A34%2B0000' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
{
  "has_more": false,
  "items": [
    {
      "id": "67f687fe-dcf4-4462-92fa-20335301d9d8",
      "type": "BANK_TRANSFER",
      "status": "PENDING",
      "created_at": "2017-03-20T14:00:01+1100",
      "currency": "AUD",
      "amount": 12794.27,
      "global_account_id": "fcfc369c-ce9d-4ab7-b9af-80df61848f8f",
      "payer": {
        "name": "Tester Smith",
        "country_code": "AU",
        "bank_account": {
          "type": "AU_BSB",
          "au_bsb": {
            "bsb": "063001",
            "account_number": "89098199202"
          },
          "name": "Tester Smith",
          "institution": {
            "swift_code": "ANZBNZ22",
            "name": "ANZ Bank Limited",
            "country_code": "AU"
          }
        }
      },
      "reference": "5487287788",
      "provider_transaction_id": "5487287788"
    }
  ]
}
```

## Retrieve Details of a Deposit

If you want to retrieve details of a specific deposit, call **Get a deposit by ID** by specifying the unique identifier for the deposit in the endpoint URL. You can retrieve the `transaction_id` from **Get a list of deposits**.

### Example request

```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/deposits/<deposit_id>' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
{
  "id": "67f687fe-dcf4-4462-92fa-20335301d9d8",
  "type": "BANK_TRANSFER",
  "status": "PENDING",
  "created_at": "2017-03-20T14:00:01+1100",
  "currency": "AUD",
  "amount": 12794.27,
  "global_account_id": "fcfc369c-ce9d-4ab7-b9af-80df61848f8f",
  "payer": {
    "name": "Tester Smith",
    "country_code": "AU",
    "bank_account": {
      "type": "AU_BSB",
      "au_bsb": {
        "bsb": "063001",
        "account_number": "89098199202"
      },
      "name": "Tester Smith",
      "institution": {
        "swift_code": "ANZBNZ22",
        "name": "ANZ Bank Limited",
        "country_code": "AU"
      }
    }
  },
  "reference": "5487287788",
  "provider_transaction_id": "5487287788"
}
```

## Conditional Details Under "bank_account" Object

For a bank transfer deposit, the payer's details may vary depending on factors such as the country and transfer method (Local Clearing System or SWIFT) of the deposit received. Consequently, different objects under the `bank_account` section will include payer bank account details parsed from the available data.

The table below summarizes each possible conditional nested object under `bank_account` in the **Get a deposit by ID** & **Get a list of deposits** responses.

| Conditional nested object under bank_account \*                          | Description                                                                                            |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Country-specific objects (i.e au_bsb, cn_cnaps_code, gb_sort_code, etc.) | Country-specific routing code and account number for a deposit received via local clearing system      |
| iban                                                                     | IBAN information on this deposit received via local clearing system (e.g. SEPA) and SWIFT              |
| swift_code                                                               | SWIFT code and account number information on this deposit received via local clearing system and SWIFT |
| partial                                                                  | Only partial bank account information is available on this deposit                                     |

\* The nested objects are mutually exclusive

# Authorize Direct Debit Payouts

You may authorize an external party to deduct funds from your Wallet via direct debit for either one-time purchases or recurring expenses (e.g. utilities). After receiving your Global Account details, the external party will set up a direct debit mandate as a record of your authorization. This section describes how to authorize direct debit payouts via your Global Accounts and manage direct debit payout mandates.

To explore other ways of paying out funds from your zoqq Wallet, see **Payouts APIs**.

## Before You Begin

- **Obtain your access token API** by authenticating to zoqq using your unique Client ID and API key. You will need the access token to make API calls.
- **Create a Global Account** that supports direct debit capability.
- Set up **webhooks** to receive notifications on **Direct debit payouts events**.

## Retrieve Global Account Details

Direct debit payouts via Global Account is only supported for certain regions and currencies. To check if your Global Account supports this capability, call **Get Global Account by ID API** by specifying your Global Account ID in the endpoint URL. If the response returns `capability.support_direct_debit` as `true` you will be able to share your Global Account details with a third party to authorize direct debit payouts.

**Review status codes** to track status transitions for direct debit payouts from your Wallet.

### Example Request

```shell
curl --request GET \
--url 'https://api-demo.zoqq.com/api/v1/global_accounts/<your_global_account_id>' \
--header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example Response

```json
{
  "account_name": "string",
  "account_number": "88888888",
  "account_type": "Checking",
  "capability": {
    "clearing_systems": ["ACH"],
    "payment_methods": ["LOCAL"],
    "support_direct_debit": true
  },
  "country_code": "GP",
  "currency": "GBP",
  "iban": "GB81LHVB04032900176471",
  "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
  "institution": {
    "address": "Old Street Yard",
    "branch_name": "Test branch",
    "city": "London",
    "name": "Saxo Payments A/S",
    "zip_code": "018982"
  },
  "nick_name": "GBP in UK for Subsidiary Company ABC",
  "request_id": "8d411ad4-aed6-1261-92fa-51225212e2e1",
  "routing_codes": [
    {
      "type": "sort_code",
      "value": "040329"
    }
  ]
}
```

## Next Steps

- **Manage your direct debit payout mandates**
- **Manage your direct debit payouts**

# Managing Direct Debit Payout Mandates

When providing your Global Account details, the external party will ask you to sign a mandate which authorizes them to deduct funds from your Wallet. This page describes how you can retrieve and manage direct debit mandates signed in the United Kingdom to payout in GBP. For all other currencies, contact the external party directly to obtain your direct debit payout mandates.

## Retrieve all direct debit payout mandates

You can retrieve mandates set up against a specific Global Account using **Get a list of direct debit payout mandates**. Specify the unique identifier of the Global Account (`global_account_id`) in the endpoint URL. You can also specify the mandate status (`status`), time period (`from_created_date`, `to_created_date`) and the pagination parameters (`page_num`, `page_size`) to refine the results.

### Example request

```shell
curl --request GET \
  --url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/mandates?from_created_at=1970-01-01&page_num=0&page_size=50&status=string&to_created_at=string' \
  --header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
{
  "has_more": false,
  "items": [
    {
      "created_at": "2022-09-19T08:40:48Z",
      "creditor_name": "creditor",
      "currency": "GBP",
      "debtor_name": "debtor",
      "global_account_id": "035253e2-1b14-43d0-b98f-a62fd91bb985",
      "id": "11987bad-bb6d-4e30-ba49-d19826c3e803",
      "payment_scheme": "Bacs",
      "setup_time": "2022-09-19T00:00:00Z",
      "status": "ACTIVE"
    }
  ]
}
```

## Retrieve details of a direct debit payout mandate

If you want to retrieve details of a specific direct debit payout mandate, call **Get direct debit payout mandate by ID** by specifying the unique identifier of the Global Account (`global_account_id`) and the unique identifier of the mandate (`mandate_id`) in the endpoint URL. You can retrieve those unique identifiers from **Get a list of direct debits** or **Get a list of direct debit payout mandates**.

### Example request

```shell
curl --request GET \
  --url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/mandates/<mandate_id>' \
  --header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
{
  "created_at": "2022-09-19T08:40:48Z",
  "creditor_name": "creditor",
  "currency": "GBP",
  "debtor_name": "debtor",
  "global_account_id": "035253e2-1b14-43d0-b98f-a62fd91bb985",
  "id": "11987bad-bb6d-4e30-ba49-d19826c3e803",
  "payment_scheme": "Bacs",
  "setup_time": "2022-09-19T00:00:00Z",
  "status": "ACTIVE"
}
```

## Cancel a direct debit payout mandate

If you want to cancel an unauthorized mandate, call **Cancel a direct debit payout mandate by ID** by specifying the unique identifier of the Global Account (`global_account_id`) and the unique identifier of the mandate (`mandate_id`) in the endpoint URL. This cancellation may impact the service you are receiving. We recommend telling the external party to prevent disruptions.

Once the mandate is canceled, any future direct debit payouts submitted under this mandate will be rejected. If there are payouts currently being processed, you can contact our Support team to submit a dispute after the transactions have settled in your Wallet.

Note that your direct debit payout mandate may also be canceled by the external party or when you close the Global Account associated with the mandate.

### Example request

```shell
curl --request POST \
  --url 'https://api-demo.zoqq.com/api/v1/global_accounts/<global_account_id>/mandates/<mandate_id>/cancel' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
true
```

# Managing Direct Debit Payouts

Global Accounts with direct debit payout capabilities allow you to authorize payouts from your Wallet. To receive notifications on any status transitions of direct debit payouts deducted from your Wallet balance, you can subscribe to **Direct debit payouts webhook events**. Learn more on **Direct debit payout statuses**.

## Retrieve all direct debit payouts

You can retrieve direct debit payouts across all your Global Accounts using **Get a list of direct debits**. Specify the time period (`from_created_date`, `to_created_date`) and the pagination parameters (`page_num`, `page_size`) to refine the results. If the time period is left unspecified or only the end date is specified, then direct debit payouts 30 days in arrears of today of the end date will be returned.

### Example request

```shell
curl --request GET \
  --url 'https://api-demo.zoqq.com/api/v1/direct_debits?from_created_date=2021-05-01&page_num=0&page_size=100&to_created_date=2021-05-31' \
  --header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
{
  "has_more": false,
  "items": [
    {
      "amount": 12794.27,
      "created_at": "string",
      "currency": "USD",
      "debtor_name": "ABC",
      "global_account_id": "e412ea03-b6fa-4198-90ef-aaee64c4139c",
      "mandate_id": "11987bad-bb6d-4e30-ba49-d19826c3e803",
      "statement_ref": "5487287788",
      "status": "SETTLED",
      "transaction_id": "da46a141-85d3-4ed7-8155-5ab8f7cc34f2"
    }
  ]
}
```

## Retrieve details of a direct debit payout

If you want to retrieve details of a specific direct debit payout, call **Get direct debit by ID** by specifying the unique Identifier for direct debit transaction (`transaction_id`) in the endpoint URL. You can retrieve the `transaction_id` from **Get a list of direct debits**.

### Example request

```shell
curl --request GET \
  --url 'https://api-demo.zoqq.com/api/v1/direct_debits/<transaction_id>' \
  --header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
{
  "amount": 12794.27,
  "created_at": "string",
  "currency": "USD",
  "debtor_name": "ABC",
  "global_account_id": "e412ea03-b6fa-4198-90ef-aaee64c4139c",
  "mandate_id": "11987bad-bb6d-4e30-ba49-d19826c3e803",
  "statement_ref": "5487287788",
  "status": "SETTLED",
  "transaction_id": "da46a141-85d3-4ed7-8155-5ab8f7cc34f2"
}
```

## Cancel a direct debit payout

If you want to cancel a direct debit payout in PENDING status, call **Cancel direct debit by ID** by specifying the unique direct debit identifier (`transaction_id`) in the endpoint URL. Only GBP direct debit payouts in the United Kingdom can be canceled. GBP direct debit payouts will first post in PENDING status for anywhere from a few hours up to approximately 45 hours, and if it's canceled during this time, your Wallet balance will not be affected. After the direct debit payout status becomes SETTLED, you must contact our Support team to dispute any unauthorized transactions. Requests that specify direct debit payouts in any other region will return a 400 error with the code `invalid_operation`. See **Supported regions and currencies** to learn more about our direct debit payout capabilities. For other direct debit payout statuses, see **Review status codes**.

### Example request

```shell
curl --request POST \
  --url 'https://api-demo.zoqq.com/api/v1/direct_debits/<transaction_id>/cancel' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer <your_bearer_token>'
```

If you are registered as a platform account, you can call this endpoint on behalf of your connected accounts by specifying the open ID in the `x-on-behalf-of` header.

### Example response

```json
true
```

# Dispute your direct debit payouts

In the unlikely scenario that you do not recognize a direct debit payout on your account, you have the option to dispute this transaction. Direct debit schemes established rules to protect payers against unauthorized transactions. The debiting party must return the funds to you if the dispute is deemed valid under the relevant scheme rules. Please note that it is important to submit your dispute as soon as you notice an unauthorized direct debit payout as, under some scheme rules, the window for submitting a dispute is limited.

First, subscribe to **Direct debit payouts webhook events** to monitor these transactions. Before submitting a dispute, please confirm if you recognize the debiting party, and try to first resolve the issue directly if you have an existing business relationship. Otherwise, contact our **Support team** immediately to submit a dispute.

The timeframe for disputing a direct debit payout varies depending on the applicable scheme rules and bank processing times. Depending on the time of your dispute submission, banks and schemes may need to review the dispute on a case-by-case basis.

_Note on the table below: T is the created_at time of the direct debit payout._

| **DIRECT DEBIT PAYOUT / GLOBAL ACCOUNT LOCATION** | **GLOBAL ACCOUNT ROUTING CODE**  | **DISPUTE TIME (REVIEW NOT REQUIRED)**                                                                                             | **DISPUTE TIME (REVIEW REQUIRED)**                                                    |
| ------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| United States                                     | ACH routing code ending 0024     | Before T+16 hours if you are onboard as a business. 60 calendar days if you are onboard as an individual.                          | 1 year if you are onboard as a business. 2 years if you are onboard as an individual. |
| United States                                     | ACH routing code ending 0381     | Before 6:00 AM PST/PDT on T+1 business day if you are onboard as a business. 60 calendar days if you are onboard as an individual. | 1 year if you are onboard as a business. 2 years if you are onboard as an individual. |
| United States                                     | ACH routing code ending 6768     | Before T+36 hours if you are onboard as a business. 60 calendar days if you are onboard as an individual.                          | 1 year if you are onboard as a business. 2 years if you are onboard as an individual. |
| United States                                     | ACH routing code ending 3150     | Before 9:00 AM EST/EDT on T+1 business day if you are onboard as a business. 60 calendar days if you are onboard as an individual. | 1 year if you are onboard as a business. 2 years if you are onboard as an individual. |
| United Kingdom                                    | Sort code ending 0085 or 1907    | NA\*                                                                                                                               | Indefinite                                                                            |
| Australia                                         | BSB code ending 3943             | Before 6:45 AM AEST/AEDT on T+1 business day                                                                                       | 7 years                                                                               |
| Canada                                            | Financial institution number 352 | Before 10pm MST/MDT on T+4 business day                                                                                            | Indefinite                                                                            |
| Europe (Netherlands)                              | SWIFT code of AINHNL22           | Before 10pm CET on T+13 months                                                                                                     | No dispute allowed after 13 months                                                    |

\*_See [Cancel a direct debit payout mandate](#) and [Cancel a direct debit payout](#) for instructions on how to cancel future direct debit payouts related to your Global Accounts in the United Kingdom._

When submitting the dispute, please provide:

- Transaction details:
  - Transaction ID
  - Amount
  - Date and time of the transaction
  - Name of the debiting party
- Any supporting evidence to demonstrate that the direct debit was not authorized.

The process will take a few business days and we may request for further supporting documentation. Once resolved, you will receive a **Direct debit payouts webhook event** with the status as `RETURNED`, indicating that funds have been credited back to your Wallet balance.

# Direct debit payout statuses

This page describes the status transitions for direct debit payouts from Global Accounts.

## Direct debit payouts from Global Accounts

Status transition when direct debit payouts are authorized and paid out via your Global Accounts.

| **Status** | **Description**                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| NEW        | Direct debit payout instruction received.                                                                     |
| IN_REVIEW  | Direct debit payout is on hold for review.                                                                    |
| PENDING    | Direct debit payout is pending for settlement.                                                                |
| SETTLED    | Payout has been debited from your Wallet balance.                                                             |
| REJECTED   | Payout was rejected.                                                                                          |
| RETURNED   | The request to refund the payout was successful and the funds have been credited back to your Wallet balance. |

# Integration checklist

After integrating with Global Accounts, you can simulate deposits and also test webhooks in the demo environment before going live in the production environment.

## Test in the demo environment

Set up your demo zoqq account using the following guidelines and get started with testing.

### API keys

- Log into the **demo zoqq web app** and generate test API keys and obtain the unique client ID to make API calls. Note that if you have multiple accounts, you will need demo API keys for each account.

### Web app configuration

- Configure webhooks on the **demo zoqq web app**. Follow the **getting started with webhooks guide** and review the **webhook events** you can listen to.

### Integration

- Use demo API endpoints for your integration: `https://api-demo.zoqq.com/api/v1/`
- Deposit tests (see **Simulate deposits to your Global Account**).
- Webhook tests: Ensure your subscribed **webhook events** are received and managed in your integration.

### Reporting

- Download **reports** from zoqq to learn about what data is available for your reporting. Learn more about our **financial reports API** and **balance activity reports API**
- Download Global Account statements from zoqq, see **Account statements API**
- If you decide to download reports programatically, use demo endpoints `https://api-demo.zoqq.com/api/v1/`

## Go live in the production environment

Set up your production zoqq account using the following guidelines and get started with transacting live.

### API keys

- Log into the **production zoqq web app** to generate production API keys and obtain the unique client ID to make API calls. Note that if you have multiple accounts, you will need production API keys for each account.

### Web app configuration

- Configure webhooks on the **production zoqq web app**. Follow the **getting started with webhooks guide** and review the **webhook events** you can listen to.

### Integration

- Update demo API endpoints to point to the production URLs: `https://api.zoqq.com/api/v1/`
- Deposit tests: We highly recommend you replicate the demo deposit tests in the production environment to ensure your integration is working correctly. You can use nominal transaction amounts (> $10) for live testing.
- Webhook tests: Ensure your subscribed **webhook events** are received and managed in your integration.
- Payout tests: We highly recommend you perform production testing for the endpoints you wish to use to ensure your integration is working correctly.

### Reporting

- If you are downloading reports programmatically, update to production endpoints `https://api.zoqq.com/api/v1/`
