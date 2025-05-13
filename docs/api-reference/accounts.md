---
id: accounts
title: Accounts
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Accounts

## Create Account

This API allows you to create a new account for a user in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>

```
POST {{baseUrl}}/zoqq/api/v1/account

```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Creates a new global account with specified currency and transfer capabilities. 
   This API enables the creation of a new account for a user within the system. It establishes a global account for the authenticated user in the specified currency and supports multiple transfer methods—such as Local and SWIFT—allowing for both domestic and international transactions.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier based on requirement |
    | x-request-id | string | Yes | Idempotency key for request tracking |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Optional) |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Body Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | type | string | Yes | Account type ("global_account", "virtual_account") |
    | country | string | Yes | ISO country code (e.g., "US") |
    | currency | string | Yes | Currency code (e.g., "USD") |
    | label | string | No | Human-readable account label |
    | required_features | array | Yes | Array of required transfer capabilities |
    | required_features[].currency | string | Yes | Currency for the feature |
    | required_features[].transfer_method | string | Yes | "LOCAL" or "SWIFT" |
    
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | HTTP status code |
    | status | string | "success" or "error" |
    | message | string | Result description |
    | data | array | Created account(s) |
    | data[].id | string | Account UUID |
    | data[].status | string | "INACTIVE", "ACTIVE", etc. |
    | data[].account_number | string | Account identifier |
    | data[].account_type | string | Type of account |
    | data[].swift_code | string | SWIFT/BIC code |
    | data[].supported_features | array | Available transfer methods |
    
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
  --url {{baseUrl}}/zoqq/api/v1/account \
  --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
  --header 'x-program-id: {{ProgramID}}' \
  --header 'x-request-id: {{IdempotencyKey}}' \
  --header 'x-user-id: {{UserID}}' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {{AccessToken}}' \
  --data '{
    "type": "global_account",
    "country": "US",
    "currency": "USD",
    "label": "Satyakee17",
    "required_features": [
      {
        "currency": "USD",
        "transfer_method": "LOCAL"
      },
      {
        "currency": "USD",
        "transfer_method": "SWIFT"
      }
    ]
  }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json
    
    url = "{{baseUrl}}/zoqq/api/v1/account"
    
    payload = {
    "type": "global_account",
    "country": "US",
    "currency": "USD",
    "label": "Satyakee17",
    "required_features": [
        {"currency": "USD", "transfer_method": "LOCAL"},
        {"currency": "USD", "transfer_method": "SWIFT"}
    ]
}
headers = {
    "x-api-key": "{{Shared Xapikey By Zoqq}}",
    "x-program-id": "{{ProgramID}}",
    "x-request-id": "{{IdempotencyKey}}",
    "x-user-id": "{{UserID}}",
    "Content-Type": "application/json",
    "Authorization": "Bearer {{AccessToken}}"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
  import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class CreateAccount {
    public static void main(String[] args) throws Exception {
        String jsonBody = """
            {
                "type": "global_account",
                "country": "US",
                "currency": "USD",
                "label": "Satyakee17",
                "required_features": [
                    {
                        "currency": "USD",
                        "transfer_method": "LOCAL"
                    },
                    {
                        "currency": "USD",
                        "transfer_method": "SWIFT"
                    }
                ]
            }
            """;

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/account"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{ProgramID}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{UserID}}")
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer {{AccessToken}}")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();

        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
    ```
    
      </TabItem>
      <TabItem value="php" label="php">
    
    ```php
<?php
$url = '{{baseUrl}}/zoqq/api/v1/account';
$data = [
    'type' => 'global_account',
    'country' => 'US',
    'currency' => 'USD',
    'label' => 'Satyakee17',
    'required_features' => [
        [
            'currency' => 'USD',
            'transfer_method' => 'LOCAL'
        ],
        [
            'currency' => 'USD',
            'transfer_method' => 'SWIFT'
        ]
    ]
];

$headers = [
    'x-api-key: {{Shared Xapikey By Zoqq}}',
    'x-program-id: {{ProgramID}}',
    'x-request-id: {{IdempotencyKey}}',
    'x-user-id: {{UserID}}',
    'Content-Type: application/json',
    'Authorization: Bearer {{AccessToken}}'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>

    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
    using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Post,
            RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/account"),
            Headers = 
            {
                { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                { "x-program-id", "{{ProgramID}}" },
                { "x-request-id", "{{IdempotencyKey}}" },
                { "x-user-id", "{{UserID}}" },
                { "Authorization", "Bearer {{AccessToken}}" }
            },
            Content = new StringContent(
                @"{
                    ""type"": ""global_account"",
                    ""country"": ""US"",
                    ""currency"": ""USD"",
                    ""label"": ""Satyakee17"",
                    ""required_features"": [
                        {
                            ""currency"": ""USD"",
                            ""transfer_method"": ""LOCAL""
                        },
                        {
                            ""currency"": ""USD"",
                            ""transfer_method"": ""SWIFT""
                        }
                    ]
                }",
                Encoding.UTF8,
                "application/json")
        };

        var response = await client.SendAsync(request);
        Console.WriteLine(await response.Content.ReadAsStringAsync());
    }
}
    ```
    
      </TabItem>
    </Tabs>
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="200" label="200: Created" default>
    
    ```json
    {
    "status": "success",
    "message": "global_account created successfully",
    "code": 200,
    "data": [
        {
            "id": "0f7a67a5-1804-4708-a1f2-c0c1c8aa2c4b",
            "status": "INACTIVE",
            "account_number": "-",
            "label": "Satyakee17",
            "account_type": "Checking",
            "country_code": "US",
            "institution": {
                "address": "89-16 Jamaica Ave",
                "city": "Woodhaven, NY",
                "name": "Community Federal Savings Bank",
                "zip_code": "11421"
            },
            "supported_features": [
                {
                    "currency": "USD",
                    "local_clearing_system": "ACH",
                    "transfer_method": "LOCAL",
                    "type": "DEPOSIT",
                    "routing_codes": [
                        {
                            "type": "ach",
                            "value": "026073150"
                        }
                    ]
                },
                {
                    "currency": "USD",
                    "local_clearing_system": "FEDWIRE",
                    "transfer_method": "LOCAL",
                    "type": "DEPOSIT",
                    "routing_codes": [
                        {
                            "type": "fedwire",
                            "value": "026073008"
                        }
                    ]
                },
                {
                    "currency": "USD",
                    "local_clearing_system": null,
                    "transfer_method": "SWIFT",
                    "type": "DEPOSIT",
                    "routing_codes": [
                        {
                            "type": "swift",
                            "value": "CMFGUS33"
                        }
                    ]
                }
            ],
            "swift_code": "CMFGUS33"
        }
    ]
}
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
    "code": 400,
    "status": "error",
    "message": "Something went wrong"
}
    ```
    
      </TabItem>
    
    </Tabs>
  </div>
</div>

## Get Account

This API allows you to retrieve all accounts associated with a user in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>

```
GET {{baseUrl}}/zoqq/api/v1/account
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Returns a list of all accounts (both active and inactive) for the authenticated user, including account details, institution information, and supported transfer features</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key (UUID recommended) |
    | x-user-id | string | Yes | Unique user identifier |
    | Authorization | string | No | Bearer token (Optional) |

    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | No | Filter by specific account ID |
    | currency | string | No | Filter by currency (e.g., "USD") |
    | status | string | No | Filter by status ("ACTIVE", "INACTIVE") |


    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | HTTP status code |
    | status | string | "success" or "error" |
    | message | string | Result description |
    | data | array | List of account objects |
    | data[].id | string | Account UUID |
    | data[].status | string | Account status |
    | data[].account_number | string | Bank account number |
    | data[].account_type | string | Type of account |
    | data[].institution | object | Bank institution details |
    | data[].supported_features | array | Available transfer methods |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
  --url '{{baseUrl}}/zoqq/api/v1/account?status=ACTIVE' \
  --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
  --header 'x-program-id: {{ProgramID}}' \
  --header 'x-request-id: {{IdempotencyKey}}' \
  --header 'x-user-id: {{UserID}}' \
  --header 'Authorization: Bearer {{AccessToken}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    
    url = "{{baseUrl}}/zoqq/api/v1/account?status=ACTIVE"
    
    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id: {{ProgramID}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id: {{UserID}}",
        "Authorization: Bearer {{AccessToken}}"
    }
    
    response = requests.get(url, headers=headers)
    print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetAccount {
    public static void main(String[] args) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/account?status=ACTIVE"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{ProgramID}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{UserID}}")
            .header("Authorization", "Bearer {{AccessToken}}")
            .GET()
            .build();

        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
    ```
    
      </TabItem>
      <TabItem value="php" label="php">
    
    ```php
<?php
$url = '{{baseUrl}}/zoqq/api/v1/account?status=ACTIVE';
$headers = [
    'x-api-key: {{Shared Xapikey By Zoqq}}',
    'x-program-id: {{ProgramID}}',
    'x-request-id: {{IdempotencyKey}}',
    'x-user-id: {{UserID}}',
    'Authorization: Bearer {{AccessToken}}'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
   using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/account?status=ACTIVE"),
            Headers = 
            {
                { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                { "x-program-id", "{{ProgramID}}" },
                { "x-request-id", "{{IdempotencyKey}}" },
                { "x-user-id", "{{UserID}}" },
                { "Authorization", "Bearer {{AccessToken}}" }
            }
        };

        var response = await client.SendAsync(request);
        Console.WriteLine(await response.Content.ReadAsStringAsync());
    }
}
    ```
    
      </TabItem>
    </Tabs>
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="200" label="200: Success" default>
    
    ```json
    {
    "code": 200,
    "status": "success",
    "message": "",
    "data": [
        {
            "id": "0f7a67a5-1804-4708-a1f2-c0c1c8aa2c4b",
            "status": "ACTIVE",
            "account_number": "8483855800",
            "label": "",
            "account_type": "Checking",
            "country_code": "US",
            "institution": {
                "address": "89-16 Jamaica Ave",
                "city": "Woodhaven, NY",
                "name": "Community Federal Savings Bank",
                "zip_code": "11421"
            },
            "supported_features": [
                {
                    "currency": "USD",
                    "local_clearing_system": "ACH",
                    "routing_codes": [
                        {
                            "type": "ach",
                            "value": "026073150"
                        }
                    ],
                    "transfer_method": "LOCAL",
                    "type": "DEPOSIT"
                },
                {
                    "currency": "USD",
                    "local_clearing_system": "FEDWIRE",
                    "routing_codes": [
                        {
                            "type": "fedwire",
                            "value": "026073008"
                        }
                    ],
                    "transfer_method": "LOCAL",
                    "type": "DEPOSIT"
                },
                {
                    "currency": "USD",
                    "routing_codes": [
                        {
                            "type": "swift",
                            "value": "CMFGUS33"
                        }
                    ],
                    "transfer_method": "SWIFT",
                    "type": "DEPOSIT"
                }
            ]
        }
    ]
}
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
    "code": 400,
    "status": "error",
    "message": "Get Account failed!"
}
    ```
    
      </TabItem>
    </Tabs>
  </div>
</div>

## Get Balance

This API allows you to retrieve the available, pending, and reserved balances for all currencies associated with an account.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/account/balance
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint retrieves the current balance information for all currencies associated with the authenticated user's account. 
    The response includes available balance, pending amounts, and reserved amounts for each currency.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key (UUID recommended) |
    | x-user-id | string | Yes | Unique user identifier |
    | Authorization | string | No | Bearer token (Optional) |
    
    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | HTTP status code |
    | status | string | "success" or "error" |
    | message | string | Result description |
    | data | array | List of balance objects by currency |
    | data[].currency | string | ISO currency code (e.g., "USD", "SGD") |
    | data[].available_balance | number | Immediately usable funds |
    | data[].pending_amount | number | Funds in pending transactions |
    | data[].reserved_amount | number | Funds held for reservations |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
  --url '{{baseUrl}}/zoqq/api/v1/account/balance' \
  --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
  --header 'x-program-id: {{ProgramID}}' \
  --header 'x-request-id: {{IdempotencyKey}}' \
  --header 'x-user-id: {{UserID}}' \
  --header 'Authorization: Bearer {{AccessToken}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json
    
    url = "{{baseUrl}}/zoqq/api/v1/account/balance"
    params = {"currency": "SGD"}
    
    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id: {{ProgramID}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id: {{UserID}}",
        "Authorization: Bearer {{AccessToken}}"
    }
    
    response = requests.get(url, headers=headers, params=params)
    print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
    import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetBalance {
    public static void main(String[] args) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/account/balance"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{ProgramID}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{UserID}}")
            .header("Authorization", "Bearer {{AccessToken}}")
            .GET()
            .build();

        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
    ```
    
      </TabItem>
      <TabItem value="php" label="php">
    
    ```php
<?php
$url = '{{baseUrl}}/zoqq/api/v1/account/balance';
$headers = [
    'x-api-key: {{Shared Xapikey By Zoqq}}',
    'x-program-id: {{ProgramID}}',
    'x-request-id: {{IdempotencyKey}}',
    'x-user-id: {{UserID}}',
    'Authorization: Bearer {{AccessToken}}'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
   using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/account/balance"),
            Headers = 
            {
                { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                { "x-program-id", "{{ProgramID}}" },
                { "x-request-id", "{{IdempotencyKey}}" },
                { "x-user-id", "{{UserID}}" },
                { "Authorization", "Bearer {{AccessToken}}" }
            }
        };

        var response = await client.SendAsync(request);
        Console.WriteLine(await response.Content.ReadAsStringAsync());
    }
}
    ```
    
      </TabItem>
    </Tabs>
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="200" label="200: Success" default>
    
    ```json
    {
    "code": 200,
    "status": "success",
    "message": "",
    "data": [
        {
            "currency": "SGD",
            "available_balance": 42.72,
            "pending_amount": 0,
            "reserved_amount": 12
        },
        {
            "currency": "USD",
            "available_balance": 22.72,
            "pending_amount": 5,
            "reserved_amount": 10
        }
    ]
}
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
    "code": 400,
    "status": "error",
    "message": "Get balance failed!"
}
    ```
    
      </TabItem>
      
    </Tabs>
  </div>
</div>

## Get Account Transactions

This API returns paginated transaction history with filters for date range and transaction status. Includes detailed information about each transaction including amount, currency, and status..

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/account/transactions
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of transactions for the user's account. 
    Transactions can be filtered by date range, type, status, and other criteria.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key (UUID recommended) |
    | x-user-id | string | Yes | Unique user identifier |
    | x-account-id | string   | Yes      | Global account identifier |
    | Authorization | string | No | Bearer token (Optional) |
    
    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | page | integer | No | Page number for pagination (default: 1) |
    | size | integer | No | Number of items per page (default: 20) |
    | from_date | string | No | Start date filter (ISO 8601 format) |
    | to_date | string | No | End date filter (ISO 8601 format) |
    | currency | string | No | Filter by currency code (e.g., "USD") |
    | status | string | No | Filter by status ("SETTLED", "PENDING", etc.) |

    
    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | HTTP status code |
    | status | string | "success" or "error" |
    | message | string | Result description |
    | data | array | List of transaction objects |
    | data[].id | string | Unique transaction identifier |
    | data[].amount | number | Transaction amount |
    | data[].currency | string | Currency code |
    | data[].type | string | "CREDIT" or "DEBIT" |
    | data[].status | string | Transaction status |
    | data[].create_time | string | ISO 8601 timestamp |
    | data[].description | string | Transaction description |
  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
  --url '{{baseUrl}}/zoqq/api/v1/account/transactions?page=1&size=10&from_date=2025-01-01&to_date=2025-04-30' \
  --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
  --header 'x-program-id: {{ProgramID}}' \
  --header 'x-request-id: {{IdempotencyKey}}' \
  --header 'x-user-id: {{UserID}}' \
  --header 'x-account-id:{{GlobalAccountId}}'\
  --header 'Authorization: Bearer {{AccessToken}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    
    url = "{{baseUrl}}/zoqq/api/v1/account/transactions"
    params = {
        "page": 1,
        "size": 20,
        "from_date": "2023-01-01",
        "to_date": "2023-12-31"
    }
    
    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "x-account-id":"{{GlobalAccountId}}",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }
    
    response = requests.get(url, headers=headers, params=params)
    print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetTransactions {
    public static void main(String[] args) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/account/transactions?page=1&size=10"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{ProgramID}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{UserID}}")
            .header("x-account-id",{{GlobalAccountId}}")
            .header("Authorization", "Bearer {{AccessToken}}")
            .GET()
            .build();

        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
    ```
    
      </TabItem>


<TabItem value="php" label="php">
    
    ```php
    <?php
$url = '{{baseUrl}}/zoqq/api/v1/account/transactions?page=1&size=10';
$headers = [
    'x-api-key: {{Shared Xapikey By Zoqq}}',
    'x-program-id: {{ProgramID}}',
    'x-request-id: {{IdempotencyKey}}',
    'x-user-id: {{UserID}}',
    'x-account-id:{{GlobalAccountId}}',
    'Authorization: Bearer {{AccessToken}}'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>

    ```
    
      </TabItem>

        <TabItem value="csharp" label="C#">
    
    ```csharp
    using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/account/transactions?page=1&size=10"),
            Headers = 
            {
                { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                { "x-program-id", "{{ProgramID}}" },
                { "x-request-id", "{{IdempotencyKey}}" },
                { "x-user-id", "{{UserID}}" },
                {"x-account-id":"{{GlobalAccountId}}"},
                { "Authorization", "Bearer {{AccessToken}}" }
            }
        };

        var response = await client.SendAsync(request);
        Console.WriteLine(await response.Content.ReadAsStringAsync());
    }
}   
    ```
    
      </TabItem>
    </Tabs>

 
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="200" label="200: Success" default>
    
    ```json
 {
    "status": "success",
    "message": "global_accounts transactions details",
    "code": 200,
    "data": [
        {
            "amount": 1000.0,
            "create_time": "2025-04-09T10:12:37+0000",
            "description": "Test from Postman",
            "currency": "USD",
            "id": "a9e5d92e-b83e-42e4-84e9-73318782ce21",
            "type": "CREDIT",
            "status": "SETTLED"
        }
    ]
}
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
    {
    "code": 400,
    "status": "error",
    "message": "Get Account Transaction failed!"
}
    ```
    
      </TabItem>
     
    </Tabs>
  </div>
</div>


## Get Balance History

This API returns paginated balance history with filters for date range. Includes detailed information about each balance change including amount, currency, and transaction type.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
  ```
    GET {{baseUrl}}/zoqq/api/v1/account/balance/history
```

  </TabItem>
</Tabs>
<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of balance changes for the user's account. 
    Results can be filtered by date range and include detailed information about each transaction affecting the balance.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key (UUID recommended) |
    | x-user-id | string | Yes | Unique user identifier |
    | Authorization | string | No | Bearer token (Optional) |
    
    <h3>Query Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | page | integer | No | Page number for pagination (default: 1) |
    | size | integer | No | Number of items per page (default: 20) |
    | from_date | string | No | Start date filter (ISO 8601 format) |
    | to_date | string | No | End date filter (ISO 8601 format) |
    | currency | string | No | Filter by currency code (e.g., "USD") |
    | transaction_type | string | No | Filter by transaction type ("DEPOSIT", "PAYOUT", etc.) |

    <h3>Response Parameters</h3>
    
    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | HTTP status code |
    | status | string | "success" or "error" |
    | message | string | Result description |
    | data | array | List of balance history objects |
    | data[].id | string | Unique transaction identifier |
    | data[].amount | number | Transaction amount (positive for credit, negative for debit) |
    | data[].currency | string | Currency code |
    | data[].balance | number | Account balance after transaction |
    | data[].description | string | Transaction description |
    | data[].fee | number | Fee amount (if applicable) |
    | data[].create_time | string | ISO 8601 timestamp |
    | data[].source_type | string | Source of transaction ("DEPOSIT", "PAYOUT", etc.) |
    | data[].transaction_type | string | Detailed transaction type ("CONVERSION_BUY", "HOLD", etc.) |
  </div>
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
  --url '{{baseUrl}}/zoqq/api/v1/account/balance/history?page=1&size=10&from_date=2025-01-01&to_date=2025-04-30' \
  --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
  --header 'x-program-id: {{ProgramID}}' \
  --header 'x-request-id: {{IdempotencyKey}}' \
  --header 'x-user-id: {{UserID}}' \
  --header 'Authorization: Bearer {{AccessToken}}'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    
    url = "{{baseUrl}}/zoqq/api/v1/account/balance/history"
    params = {
        "page": 1,
        "size": 20,
        "from_date": "2025-01-01",
        "to_date": "2025-04-30"
    }
    
    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }
    
    response = requests.get(url, headers=headers, params=params)
    print(response.json())
    ```
    
      </TabItem>
      <TabItem value="java" label="Java">
    
    ```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetBalanceHistory {
    public static void main(String[] args) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/account/balance/history?page=1&size=10"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{ProgramID}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{UserID}}")
            .header("Authorization", "Bearer {{AccessToken}}")
            .GET()
            .build();

        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}
    ```
    
      </TabItem>
      <TabItem value="php" label="php">
    
    ```php
    <?php
$url = '{{baseUrl}}/zoqq/api/v1/account/balance/history?page=1&size=10';
$headers = [
    'x-api-key: {{Shared Xapikey By Zoqq}}',
    'x-program-id: {{ProgramID}}',
    'x-request-id: {{IdempotencyKey}}',
    'x-user-id: {{UserID}}',
    'Authorization: Bearer {{AccessToken}}'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
    ```
    
      </TabItem>
      <TabItem value="csharp" label="C#">
    
    ```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/account/balance/history?page=1&size=10"),
            Headers = 
            {
                { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                { "x-program-id", "{{ProgramID}}" },
                { "x-request-id", "{{IdempotencyKey}}" },
                { "x-user-id", "{{UserID}}" },
                { "Authorization", "Bearer {{AccessToken}}" }
            }
        };

        var response = await client.SendAsync(request);
        Console.WriteLine(await response.Content.ReadAsStringAsync());
    }
}
    ```
    
      </TabItem>
    </Tabs>
    
    <h3>Response Example</h3>
    
    <Tabs>
      <TabItem value="200" label="200: Success" default>
    
    ```json
{
    "status": "success",
    "message": "balance history details",
    "code": 200,
    "data": [
        {
            "id": "962a6bea-1949-4e75-93c9-d32fd9773c50",
            "amount": -1.0,
            "currency": "SGD",
            "balance": 8919.86,
            "description": "Pay SGD 1.00 to (Individual Local SG)",
            "fee": 0.0,
            "create_time": "2025-05-07T12:13:24+0800",
            "source_type": "PAYOUT",
            "transaction_type": "PAYOUT"
        },
        {
            "id": "e5042ce1-e2d0-4ddd-a843-0abe4a169bfe",
            "amount": 12.86,
            "currency": "SGD",
            "balance": 8920.86,
            "description": "Buy SGD 12.86",
            "fee": 0.0,
            "create_time": "2025-05-07T11:28:39+0800",
            "source_type": "CONVERSION",
            "transaction_type": "CONVERSION_BUY"
        },
        {
            "id": "1f0e2c08-1e31-45ff-9242-20f9995252ca",
            "amount": 60000.0,
            "currency": "DKK",
            "balance": 60000.0,
            "description": "Test from Postman - GA (First DKK)",
            "fee": 0.0,
            "create_time": "2025-04-30T19:38:41+0800",
            "source_type": "DEPOSIT",
            "transaction_type": "DEPOSIT"
        }
    ]
}
    ```
    
      </TabItem>
      <TabItem value="400" label="400: Error">
    
    ```json
{
    "code": 400,
    "status": "error",
    "message": "Get Balance History failed!"
}
    ```
    
      </TabItem>
    </Tabs>
  </div>
</div>