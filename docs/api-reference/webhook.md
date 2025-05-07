---
id: webhook
title: Webhook
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Zoqq Webhook API Documentation
Integrating the webhook service enables end users to receive notifications and updates regarding their account activity, transactions, security alerts, and other pertinent information. This integration ensures that users are promptly informed about important events related to their accounts.

<!-- 
## Table of Contents
1. [Authentication & Headers](#-authentication--headers)
2. [Webhook Management](#-webhook-management)
   - [Get All Webhooks](#-get-all-webhooks)
   - [Subscribe Webhook](#-subscribe-webhook)
   - [Update Webhook](#-update-webhook)
   - [Delete Webhook](#-delete-webhook)
3. [Event Types](#-event-types)
   - [Account Status](#1-account-status)
   - [Global Accounts](#2-global-accounts)
   - [Conversions](#3-conversions)
   - [Deposits](#4-deposits)
   - [Transfers](#5-transfers) -->

## 🔐 Authentication & Headers

All webhook requests require the following headers:


| Header           | Type   | Description                                 |
|------------------|--------|---------------------------------------------|
| `x-api-key`       | string | Shared API key provided by Zoqq             |
| `x-program-id`    | string | Program identifier based on requirement     |
| `x-request-id`    | string | Idempotency key for safe retries            |
| `x-user-id`       | string | Unique user identification key              |
| `Authorization`   | string | `Bearer <token>` – Optional as of now       |

---
## 🔄 Webhook Management

### 📥 Get All Webhooks
```
GET {{baseUrl}}/zoqq/api/v1/webhook/getallwebhook
```

### 🔹 Description
Returns a list of all webhooks associated with a program.

### ✅ Response Example

```json
[
  {
    "event_name": "OPENLOOP_DECLINED_CARD_BLOCKED",
    "program_code": "SMMAAS0",
    "event_description": null
  },
  {
    "event_name": "OPENLOOP_DECLINED_CARD_PENDING_ACTIVATION",
    "program_code": "SMMAAS0",
    "event_description": null
  }
]
```
## 📨 Subscribe Webhook 
``` 
POST{{baseUrl}}/zoqq/api/v1/webhook/subscribe
```

### 🔹 Description  
Subscribe to a webhook for a specific event.

### 📝 Request Body

| Field             | Type    | Required | Description                            |
|------------------|---------|----------|----------------------------------------|
| `event_name`      | string  | ✅ Yes   | The event to subscribe to              |
| `subscription_type`| string | ✅ Yes   | Subscription type (`w` for webhook)    |
| `agent_code`      | string  | ✅ Yes   | Main agent identifier                  |
| `subagent_code`   | string  | ✅ Yes   | Sub-agent identifier                   |
| `program_code`    | string  | ✅ Yes   | Program code provided by Zoqq          |
| `company_code`    | string  | ✅ Yes   | Your company’s unique identifier       |
| `created_by`      | string  | ✅ Yes   | Name of creator                        |
| `webhook_url`     | string  | ✅ Yes   | Target URL to send event payloads      |

### ✅ Request Example

```json
{
  "event_name": "PREAUTH_TIMEOUT_DECLINE",
  "subscription_type": "w",
  "agent_code": "MCA000",
  "subagent_code": "01",
  "program_code": "SMMAAS0",
  "company_code": "STYLP19062023",
  "created_by": "Pabitra",
  "webhook_url": "https://webhook.site/33cb37f3-8a35-48ef-90ca-31d789fcfd17"
}
```
 <h3>Response Example</h3>
    
    ```json
    {
      {
  "message": "Webhook successfully subscribed",
  "status": "SUCCESS"
}

    }
    ```

## ♻️ Update Webhook 
``` 
PUT{{baseUrl}}/zoqq/api/v1/webhook/update
```

### 🔹 Description  
Update an existing webhook configuration.

### 📝 Request Body

| Field         | Type   | Required | Description                                 |
|---------------|--------|----------|---------------------------------------------|
| `event_name`  | string | ✅ Yes   | The event whose subscription is updated     |
| `webhook_url` | string | ✅ Yes   | New target URL                              |
| `modified_by` | string | ✅ Yes   | User updating the webhook                   |


### ✅ Request Example

```json
{
  {
  "event_name": "PREAUTH_TIMEOUT_DECLINE",
  "webhook_url": "https://webhook.site/new-updated-url",
  "modified_by": "Preeti"
}

}
```
<h3>Response Example</h3>
    
    ```json
    {
      {
  "message": "Webhook successfully updated",
  "status": "SUCCESS"
}


    }
    ```



    ## ❌ Delete Webhook  
    ```
DELETE {{baseUrl}}/zoqq/api/v1/webhook/delete
```

### 🔹 Description  
Delete an existing webhook subscription.

### 📝 Request Body

| Field         | Type   | Required | Description                     |
|---------------|--------|----------|---------------------------------|
| `event_name`  | string | ✅ Yes   | The event webhook to delete     |
| `deleted_by`  | string | ✅ Yes   | User deleting the webhook       |

### ✅ Request Example

```json
{
  {
  "event_name": "PREAUTH_TIMEOUT_DECLINE",
  "deleted_by": "Preeti"
}



}
```
<h3>Response Example</h3>
    
    ```json
    {
      {
  "message": "Webhook successfully deleted",
  "status": "SUCCESS"
}



    }
    ```

###📨 Event Types
## 1. Account Status

## Account Submitted

Triggered when an account application is first submitted for verification.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when a new account application is submitted and awaiting verification.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`account.submitted`) |
    | account_id | string | Account identifier |
    | data | object | Empty object (no additional data) |
    | created_at | string | ISO 8601 timestamp of submission |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "evt_UVU43_95Onav3lShzYmSVw",
      "name": "account.submitted",
      "account_id": "acct_wUwt_u52MDCIvG8KqbC1YA",
      "data": {},
      "created_at": "2025-04-23T06:16:35+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Submission received",
      "data": {
        "next_steps": "Verification in progress",
        "estimated_completion": "Within 2 business days"
      }
    }
    ```
  </div>
</div>

## Account Active

Triggered when an account becomes active after successful verification.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when an account has completed verification and is now active for transactions.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`account.active`) |
    | account_id | string | Account identifier |
    | data.account_details | object | Contains verified business details |
    | created_at | string | ISO 8601 timestamp of activation |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "evt_iLMoFQxuM4iEc3XPwIqxmw",
      "name": "account.active",
      "account_id": "acct_wUwt_u52MDCIvG8KqbC1YA",
      "data": {
        "account_details": {
          "business_details": {
            "address": {
              "address_line1": "3837 Violette Knolls",
              "country_code": "US",
              "postcode": "58888",
              "state": "FL",
              "suburb": "Fadelton"
            },
            "address_english": {
              "country_code": "US",
              "postcode": "58888"
            },
            "as_trustee": false,
            "business_address": {
              "address_line1": "44583 Gislason Trail"
            }
          }
        }
      },
      "created_at": "2025-04-23T06:16:35+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Webhook processed successfully",
      "data": {
        "account_status": "ACTIVE",
        "timestamp": "2025-04-23T06:16:36Z"
      }
    }
    ```
  </div>
</div>

## Account Suspended

Triggered when account verification fails or is suspended.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when an account fails verification or is suspended for compliance reasons.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`account.suspended`) |
    | account_id | string | Account identifier |
    | data.status | string | Account status (`SUSPENDED`) |
    | created_at | string | ISO 8601 timestamp of event |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "evt_l_NMv9_MPDGZqP-5Z9vHlw",
      "name": "account.suspended",
      "account_id": "acct_wUwt_u52MDCIvG8KqbC1YA",
      "data": {
        "account_details": {
          "business_details": {
            "address": {
              "address_line1": "44583 Gislason Trail",
              "country_code": "US",
              "postcode": "58888",
              "state": "FL",
              "suburb": "New Tryciaburgh"
            },
            "business_name": "Bartell and Sons US",
            "tax_id": {
              "number": "123456789",
              "type": "EIN"
            }
          }
        },
        "status": "SUSPENDED"
      },
      "created_at": "2025-04-23T09:46:48+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Webhook received successfully"
    }
    ```
  </div>
</div>

## Account Action Required

Triggered when additional information is needed to complete account verification.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when the verification process cannot be completed without additional action or documentation from the user.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`rfi.action_required`) |
    | account_id | string | Account identifier |
    | data.id | string | Request for Information ID |
    | data.type | string | Requirement type (e.g., `KYC`) |
    | created_at | string | ISO 8601 timestamp of event |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Possible Action Types</h3>
    - `KYC`: Know Your Customer documentation required
    - `AML`: Anti-Money Laundering verification
    - `ADDRESS`: Proof of address needed
    - `IDENTITY`: Identity verification required

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "8be6af0f-f946-4b2d-ab4c-a04e66cfe82a",
      "name": "rfi.action_required",
      "account_id": "acct_5zJ0AJ2HMHKKvUGZf6os8w",
      "data": {
        "id": "89362bcb-0fbc-41ab-ae57-2cb7c3d8dbec",
        "type": "KYC"
      },
      "created_at": "2025-04-23T10:23:36+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Action request received",
      "data": {
        "action_id": "89362bcb-0fbc-41ab-ae57-2cb7c3d8dbec",
        "status": "PENDING",
        "deadline": "2025-05-07T10:23:36+0000"
      }
    }
    ```
  </div>
</div>

---

<!-- ## 2. Global Account

### 🔹 `ga.new`

**Description:** Deposit received via Global Account.

```json
{
  "id": "b19b2529-3f6c-4a79-b575-c595a0043985_ga.new",
  "name": "ga.new",
  ...
  "transaction_type": "DEPOSIT"
}
``` -->

## 2. Global Accounts

## Global Account New

Triggered when a deposit is received via Global Account, pending settlement to wallet balance.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when a new deposit is received in a global account but hasn't yet been settled to the wallet balance.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`ga.new`) |
    | account_id | string | Account identifier |
    | data.amount | number | Deposit amount |
    | data.ccy | string | Currency code (e.g., SGD) |
    | data.transaction_type | string | Transaction type (`DEPOSIT`) |
    | data.process_status | string | Current status (`NEW`) |
    | created_at | string | ISO 8601 timestamp of event |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Status Flow</h3>
    - `NEW` → `PENDING` → `SETTLED`
    - May transition to `FAILED` if settlement fails

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "b19b2529-3f6c-4a79-b575-c595a0043985_ga.new",
      "name": "ga.new",
      "account_id": "acct_hUiVInamMd68NDDm5VVmyA",
      "data": {
        "amount": 100.0,
        "ccy": "SGD",
        "transaction_type": "DEPOSIT",
        "process_status": "NEW",
        "settlement_info": {
          "beneficiary_account_number": "88520209770",
          "beneficiary_name": "Airwallex (Singapore) Pte Ltd",
          "payer_name": "JS"
        }
      },
      "created_at": "2025-04-28T12:06:45+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Deposit notification received",
      "data": {
        "deposit_id": "b19b2529-3f6c-4a79-b575-c595a0043985",
        "next_webhook": "ga.settled",
        "estimated_settlement": "2025-04-29T12:00:00+0000"
      }
    }
    ```
  </div>
</div>

## Balance Collection

Triggered when wallet balance increases due to a settled deposit from Global Account.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when funds from a Global Account deposit have been successfully settled and added to the wallet balance.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`balance.ga.top_up`) |
    | account_id | string | Account identifier |
    | data.ccy | string | Currency code (e.g., SGD) |
    | data.amount | number | Deposit amount |
    | data.balance | number | New wallet balance |
    | data.type | string | Transaction type (`DEPOSIT`) |
    | created_at | string | ISO 8601 timestamp of settlement |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Transaction References</h3>
    - Links to original deposit transaction
    - Includes payer and bank details
    - Contains global account reference

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "d5429604-0f3e-3e60-9058-46f44e4552f5",
      "name": "balance.ga.top_up",
      "account_id": "acct_hUiVInamMd68NDDm5VVmyA",
      "data": {
        "ccy": "SGD",
        "amount": 100,
        "balance": 100,
        "type": "DEPOSIT",
        "transaction_reference": {
          "deposit_id": "b19b2529-3f6c-4a79-b575-c595a0043985",
          "global_account_id": "2a5f4d31-e290-4192-9746-61c862ba2d27",
          "payer_name": "JS",
          "payer_bank_name": "SBI"
        },
        "reference": "123",
        "created_at": "2025-04-28T12:06:45+0000"
      },
      "created_at": "2025-04-28T12:06:45+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Balance update processed",
      "data": {
        "new_balance": 100,
        "currency": "SGD",
        "transaction_id": "d5429604-0f3e-3e60-9058-46f44e4552f5",
        "settlement_time": "2025-04-28T12:06:45+0000"
      }
    }
    ```
  </div>
</div>

---

## 3. Conversions

## Conversion Scheduled

Triggered when a currency conversion has been successfully booked and scheduled for future settlement.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when a currency conversion request has been accepted and scheduled for execution on the specified conversion date.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`conversion.scheduled`) |
    | account_id | string | Account identifier |
    | data.conversion_id | string | Unique conversion identifier |
    | data.status | string | Current status (`SCHEDULED`) |
    | data.currency_pair | string | Currency pair (e.g., USDSGD) |
    | data.client_rate | number | Rate offered to client |
    | data.buy_amount | number | Amount to be bought |
    | data.sell_amount | number | Amount to be sold |
    | data.conversion_date | string | Scheduled execution date (YYYY-MM-DD) |
    | created_at | string | ISO 8601 timestamp of booking |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Rate Information</h3>
    - Client rate: Rate offered to customer
    - AWX rate: Internal rate used
    - Mid rate: Market reference rate
    - Rate locked until settlement cutoff

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "0d549741-f460-4457-8f15-2965b7af108dSCHEDULED",
      "name": "conversion.scheduled",
      "account_id": "acct_i74Os0HwMhmqPw9ND12TRQ",
      "data": {
        "conversion_id": "0d549741-f460-4457-8f15-2965b7af108d",
        "short_reference_id": "C250429-5UBTP0F",
        "status": "SCHEDULED",
        "currency_pair": "USDSGD",
        "client_rate": 1.315168,
        "buy_currency": "USD",
        "buy_amount": 1,
        "sell_currency": "SGD",
        "sell_amount": 1.32,
        "conversion_date": "2025-04-29",
        "settlement_cutoff_time": "2025-04-29T09:55:59+0000",
        "created_at": "2025-04-29T09:55:59+0000"
      },
      "created_at": "2025-04-29T09:55:59+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Conversion scheduled successfully",
      "data": {
        "conversion_id": "0d549741-f460-4457-8f15-2965b7af108d",
        "scheduled_date": "2025-04-29",
        "rate_expiry": "2025-04-29T09:55:59+0000",
        "next_webhook": "conversion.executed"
      }
    }
    ```
  </div>
</div>

## Conversion Settled

Triggered when funds from a currency conversion have been successfully settled in the wallet.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when a scheduled currency conversion has been successfully executed and funds are available in the wallet.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`conversion.settled`) |
    | account_id | string | Account identifier |
    | data.conversion_id | string | Unique conversion identifier |
    | data.status | string | Current status (`SETTLED`) |
    | data.currency_pair | string | Currency pair (e.g., USDSGD) |
    | data.client_rate | number | Executed client rate |
    | data.buy_amount | number | Amount bought |
    | data.sell_amount | number | Amount sold |
    | data.conversion_date | string | Execution date (YYYY-MM-DD) |
    | data.updated_at | string | ISO 8601 timestamp of settlement |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Settlement Details</h3>
    - Final confirmation of completed conversion
    - Funds now available in wallet balance
    - Includes all rate and amount details
    - References original conversion request

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "0d549741-f460-4457-8f15-2965b7af108dSETTLED",
      "name": "conversion.settled",
      "account_id": "acct_i74Os0HwMhmqPw9ND12TRQ",
      "data": {
        "conversion_id": "0d549741-f460-4457-8f15-2965b7af108d",
        "short_reference_id": "C250429-5UBTP0F",
        "status": "SETTLED",
        "currency_pair": "USDSGD",
        "client_rate": 1.315168,
        "buy_currency": "USD",
        "buy_amount": 1,
        "sell_currency": "SGD",
        "sell_amount": 1.32,
        "conversion_date": "2025-04-29",
        "updated_at": "2025-04-29T09:55:59+0000"
      },
      "created_at": "2025-04-29T09:55:59+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Conversion settled successfully",
      "data": {
        "conversion_id": "0d549741-f460-4457-8f15-2965b7af108d",
        "settled_at": "2025-04-29T09:55:59+0000",
        "buy_currency": "USD",
        "buy_amount": 1,
        "sell_currency": "SGD",
        "sell_amount": 1.32,
        "executed_rate": 1.315168
      }
    }
    ```
  </div>
</div>

---

## 4. Deposits

## Deposit Settled

Triggered when a deposit has been successfully processed and settled to the wallet balance.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when funds from a deposit have cleared all processing and are fully available in the wallet balance.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`deposit.settled`) |
    | account_id | string | Account identifier |
    | data.amount | number | Deposit amount |
    | data.currency | string | Currency code (e.g., USD) |
    | data.status | string | Current status (`SETTLED`) |
    | data.type | string | Deposit method (`BANK_TRANSFER`) |
    | data.settled_at | number | Timestamp of settlement |
    | data.reference | string | Deposit reference |
    | created_at | string | ISO 8601 timestamp of event |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Settlement Details</h3>
    - Confirms funds are fully available
    - Includes fee information (if any)
    - Contains payer details
    - References global account
    - Provides provider transaction ID

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "1a06397d-6919-40d7-98de-e10c66f250c1_deposit.settled",
      "name": "deposit.settled",
      "account_id": "acct_hUiVInamMd68NDDm5VVmyA",
      "data": {
        "amount": 50.0,
        "currency": "USD",
        "fee": {
          "amount": 0,
          "currency": "USD"
        },
        "global_account_id": "bc2669d5-9ae3-41a5-9589-f8c424c47da5",
        "id": "1a06397d-6919-40d7-98de-e10c66f250c1",
        "payer": {
          "name": "JS"
        },
        "provider_transaction_id": "5487287789",
        "reference": "123",
        "status": "SETTLED",
        "type": "BANK_TRANSFER",
        "settled_at": 1746006056378
      },
      "created_at": "2025-04-30T09:40:56+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Deposit settlement processed",
      "data": {
        "deposit_id": "1a06397d-6919-40d7-98de-e10c66f250c1",
        "amount": 50.0,
        "currency": "USD",
        "new_balance": 150.0,
        "settled_at": "2025-04-30T09:40:56+0000"
      }
    }
    ```
  </div>
</div>

## Deposit Rejected

Triggered when a deposit has been rejected during processing by Airwallex or the clearing system.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when a deposit fails verification or is rejected by compliance checks, preventing settlement to the wallet balance.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`deposit.rejected`) |
    | account_id | string | Account identifier |
    | data.amount | number | Deposit amount |
    | data.currency | string | Currency code (e.g., USD) |
    | data.status | string | Current status (`REJECTED`) |
    | data.type | string | Deposit method (`BANK_TRANSFER`) |
    | data.global_account_id | string | Related global account ID |
    | data.reference | string | Deposit reference |
    | created_at | string | ISO 8601 timestamp of rejection |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Rejection Details</h3>
    - May occur due to compliance checks
    - Could indicate invalid transaction details
    - Includes original deposit information
    - References provider transaction
    - Contains payer information

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "303ae28f-3ab0-4682-8253-3f605beb3db1_deposit.rejected",
      "name": "deposit.rejected",
      "account_id": "acct_hUiVInamMd68NDDm5VVmyA",
      "data": {
        "amount": 50.0,
        "currency": "USD",
        "fee": {},
        "global_account_id": "bc2669d5-9ae3-41a5-9589-f8c424c47da5",
        "id": "303ae28f-3ab0-4682-8253-3f605beb3db1",
        "payer": {
          "name": "JS"
        },
        "provider_transaction_id": "5487287789",
        "reference": "123",
        "status": "REJECTED",
        "type": "BANK_TRANSFER"
      },
      "created_at": "2025-04-30T12:05:35+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Rejection notification processed",
      "data": {
        "deposit_id": "303ae28f-3ab0-4682-8253-3f605beb3db1",
        "status": "REJECTED",
        "timestamp": "2025-04-30T12:05:35+0000",
        "next_steps": "Contact support for details"
      }
    }
    ```
  </div>
</div>

---

## 5. Transfers

## Payout Transfer Funding Scheduled

**Description:** Transfer funding scheduled.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>The funding is scheduled to be processed on the transfer date.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`payout.transfer.funding.scheduled`) |
    | account_id | string | Account identifier |
    | data.amount_beneficiary_receives | number | Amount beneficiary will receive |
    | data.amount_payer_pays | number | Total amount payer will pay |
    | data.beneficiary | object | Beneficiary details including bank information |
    | data.created_at | string | ISO 8601 creation timestamp |
    | data.fee_amount | number | Fee amount |
    | data.fee_currency | string | Currency code for fees |
    | data.fee_paid_by | string | Who pays the fee (`PAYER` or `BENEFICIARY`) |
    | data.funding.status | string | Funding status (`SCHEDULED`) |
    | data.id | string | Transfer identifier |
    | data.payer | object | Payer details including company information |
    | data.reason | string | Transfer reason |
    | data.reference | string | Transfer reference |
    | data.request_id | string | Request identifier |
    | data.short_reference_id | string | Short reference ID |
    | data.source_currency | string | Source currency code |
    | data.status | string | Transfer status (`SCHEDULED`) |
    | data.swift_charge_option | string | SWIFT charge option (`SHARED`, `OUR`, `BEN`) |
    | data.transfer_amount | number | Transfer amount |
    | data.transfer_currency | string | Transfer currency code |
    | data.transfer_date | string | Scheduled transfer date (YYYY-MM-DD) |
    | data.transfer_method | string | Transfer method (`SWIFT`) |
    | data.updated_at | string | ISO 8601 update timestamp |
    | created_at | string | ISO 8601 event timestamp |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Funding Details</h3>
    - Indicates scheduled processing
    - Contains complete transfer details
    - Includes fee breakdown
    - Shows both payer and beneficiary information
    - Provides transfer timing information

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "c7096585-ea08-460a-a404-794a7b7c3051",
      "name": "payout.transfer.funding.scheduled",
      "account_id": "acct_i74Os0HwMhmqPw9ND12TRQ",
      "data": {
        "amount_beneficiary_receives": 1000.0,
        "amount_payer_pays": 153.32,
        "beneficiary": {
          "address": {
            "city": "Altamonte Springs",
            "country_code": "CN",
            "postcode": "25000",
            "state": "Brisaside",
            "street_address": "4456 Boyle Dale"
          },
          "bank_details": {
            "account_currency": "CNY",
            "account_name": "Sylvia Hayes",
            "account_number": "75312643",
            "bank_country_code": "CN",
            "bank_name": "Denesik Inc",
            "swift_code": "ABOCCNBJ"
          },
          "company_name": "Considine - Jones",
          "entity_type": "COMPANY",
          "type": "BANK_ACCOUNT"
        },
        "created_at": "2025-04-30T12:31:37+0000",
        "fee_amount": 15.32,
        "fee_currency": "USD",
        "fee_paid_by": "PAYER",
        "funding": {
          "status": "SCHEDULED"
        },
        "id": "0ae18279-3260-4fb5-9658-61fb74cec888",
        "payer": {
          "additional_info": {
            "business_incorporation_date": "2024-02-19",
            "business_registration_number": "SG-444-32-9207",
            "business_registration_type": "COMPANY"
          },
          "address": {
            "city": "Melbourne",
            "country_code": "SG",
            "postcode": "3000",
            "state": "VIC",
            "street_address": "Melbourne St, Melbourne St"
          },
          "company_name": "demo_zoqq",
          "entity_type": "COMPANY"
        },
        "reason": "professional_business_services",
        "reference": "Test 5672b696-418e-4f56-a6cb-f3c77403409f",
        "remarks": "",
        "request_id": "4f5eaad9-35a6-4f4d-8a88-5d9e7d390113",
        "short_reference_id": "P250430-2PR7PF3",
        "source_currency": "USD",
        "status": "SCHEDULED",
        "swift_charge_option": "SHARED",
        "transfer_amount": 1000.0,
        "transfer_currency": "CNY",
        "transfer_date": "2025-04-30",
        "transfer_method": "SWIFT",
        "updated_at": "2025-04-30T12:31:37+0000"
      },
      "created_at": "2025-04-30T12:31:38+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Funding scheduled notification processed",
      "data": {
        "transfer_id": "0ae18279-3260-4fb5-9658-61fb74cec888",
        "status": "SCHEDULED",
        "transfer_date": "2025-04-30",
        "timestamp": "2025-04-30T12:31:38+0000",
        "next_steps": "Await further status updates"
      }
    }
    ```
  </div>
</div>

## Payout Transfer Funded

Triggered when funds for a payout transfer have been successfully allocated and are ready for processing.

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Sent when the funding stage of a payout transfer is complete, indicating funds are secured for the upcoming transfer.</p>
    
    <h3>Event Details</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | id | string | Unique event identifier |
    | name | string | Event name (`payout.transfer.funding.funded`) |
    | account_id | string | Account identifier |
    | data.id | string | Transfer identifier |
    | data.status | string | Current status (`SCHEDULED`) |
    | data.funding.status | string | Funding status (`FUNDED`) |
    | data.transfer_amount | number | Amount to be transferred |
    | data.transfer_currency | string | Transfer currency (e.g., CNY) |
    | data.source_currency | string | Source currency (e.g., USD) |
    | data.fee_amount | number | Fee amount |
    | data.fee_currency | string | Fee currency |
    | created_at | string | ISO 8601 timestamp of funding |
    | version | string | API version |

    <h3>Common Headers</h3>

    | Header | Description |
    |--------|-------------|
    | X-Request-ID | Unique request identifier |
    | X-API-Key | Your API key for authentication |
    | Content-Type | Should be `application/json` |

    <h3>Funding Details</h3>
    - Confirms funds are secured for transfer
    - Shows complete fee breakdown
    - Includes beneficiary bank details
    - Contains payer information
    - Provides transfer method details

  </div>
  
  <div className="api-docs-right">
    <h3>Request Body Example</h3>
    
    ```json
    {
      "id": "a16aba92-7ff3-49fd-91f0-5109c8391f9f",
      "name": "payout.transfer.funding.funded",
      "account_id": "acct_i74Os0HwMhmqPw9ND12TRQ",
      "data": {
        "amount_beneficiary_receives": 1000.0,
        "amount_payer_pays": 153.32,
        "beneficiary": {
          "bank_details": {
            "account_currency": "CNY",
            "account_name": "Sylvia Hayes",
            "account_number": "75312643",
            "bank_country_code": "CN",
            "bank_name": "Denesik Inc",
            "swift_code": "ABOCCNBJ"
          },
          "company_name": "Considine - Jones",
          "entity_type": "COMPANY"
        },
        "fee_amount": 15.32,
        "fee_currency": "USD",
        "funding": {
          "status": "FUNDED"
        },
        "id": "0ae18279-3260-4fb5-9658-61fb74cec888",
        "payer": {
          "company_name": "demo_zoqq",
          "entity_type": "COMPANY"
        },
        "reference": "Test 5672b696-418e-4f56-a6cb-f3c77403409f",
        "short_reference_id": "P250430-2PR7PF3",
        "source_currency": "USD",
        "status": "SCHEDULED",
        "transfer_amount": 1000.0,
        "transfer_currency": "CNY",
        "transfer_method": "SWIFT",
        "updated_at": "2025-04-30T12:31:38+0000"
      },
      "created_at": "2025-04-30T12:31:38+0000",
      "version": "2025-02-14"
    }
    ```
    
    <h3>Response Example</h3>
    
    ```json
    {
      "code": 200,
      "status": "success",
      "message": "Payout funding confirmed",
      "data": {
        "transfer_id": "0ae18279-3260-4fb5-9658-61fb74cec888",
        "reference_id": "P250430-2PR7PF3",
        "funded_at": "2025-04-30T12:31:38+0000",
        "next_steps": "Awaiting transfer execution",
        "estimated_completion": "Within 1-3 business days"
      }
    }
    ```
  </div>
</div>
