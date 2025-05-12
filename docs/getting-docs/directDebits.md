---
id: directDebits
title: Direct Debits
sidebar_position: 1
hide_table_of_contents: true
---

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

## Manage Direct Debit Payout Mandates

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

## Manage Direct Debit Payouts

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
