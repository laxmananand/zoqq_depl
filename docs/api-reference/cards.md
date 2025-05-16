---
id: cards
title: Cards
hide_table_of_contents: true
---

<!-- Make sure there are no import statements here unless properly formatted -->
<!-- For example, if you need imports, they should be at the very top: -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can create virtual cards associated with your organization. These cards can be single-use or multi-use and can be restricted by merchant category code, currency, and transactioYn amount.



## Create Cardholder


<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST {{baseUrl}}/zoqq/api/v1/cardholder

````

  </TabItem>
</Tabs>



<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
  <p>
  Cardholders are authorized representatives of your business. Two types of cardholders are permitted: <strong>Individual</strong> and <strong>Delegate</strong>.<br /><br />
  <strong>INDIVIDUAL:</strong> A cardholder who is a named representative of your business. They can be issued either personalized or non-personalized cards.<br />
  <strong>DELEGATE:</strong> A cardholder assigned only to non-personalized cards. They act as authorized users on behalf of your business. Cards issued to delegate cardholders will be associated with the name of your business.<br /><br />
  Creating a cardholder requires passing a name screening process, which involves submitting basic information about the cardholder.<br />
  This endpoint allows you to create a new cardholder by providing details such as personal information, address, and identification documents. The cardholder can be either an individual or a business entity.
</p>


    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

  
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| type | string | Yes | Type of cardholder (must be "INDIVIDUAL" or "DELEGATE") |
| email | string | Yes | Cardholder's email address (must be valid format) |
| mobile_number | string | No | Cardholder's mobile number |
| individual | object | Yes | Required individual details |
| individual.name | object | Yes | First and last name |
| individual.name.first_name | string | Yes | First name |
| individual.name.last_name | string | Yes | Last name |
| individual.date_of_birth | string | Yes | Date of birth (format not specified) |
| individual.address | object | Yes | Physical address |
| individual.address.city | string | Yes | City |
| individual.address.country | string | Yes | Country |
| individual.address.line1 | string | Yes | Address line 1 |
| individual.address.state | string | Yes | State |
| individual.address.postcode | string | Yes | Postal code |
| individual.identification | object | No | ID document details |
| individual.identification.country | string | No | ID issuing country |
| individual.identification.expiry_date | string | No | ID expiry date |
| individual.identification.number | string | No | May be a license number or passport number |
| individual.identification.type | string | No | ID type |
| individual.express_consent_obtained | string | No | Defaults to "YES" |
| postal_address | object | No | Mailing address (if different) |
| postal_address.city | string | Yes if present | City |
| postal_address.country | string | Yes if present | Country |
| postal_address.line1 | string | Yes if present | Address line 1 |
| postal_address.state | string | Yes if present | State |
| postal_address.postcode | string | Yes if present | Postal code |
| created_by | string | Yes | Creator identifier |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/cardHolders \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "email": "test+7f8a9b23@example.com",
        "individual": {
          "date_of_birth": "1982-11-02",
          "express_consent_obtained": "yes",
          "identification": {
            "country": "US",
            "expiry_date": "2030-08-28",
            "number": "001238243",
            "type": "ID_CARD"
          },
          "name": {
            "first_name": "John",
            "last_name": "Doe"
          },
          "address": {
            "city": "Los Angeles",
            "country": "US",
            "line1": "1234 Maple Street",
            "state": "CA",
            "postcode": "90001"
          }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
          "city": "Los Angeles",
          "country": "US",
          "line1": "1234 Maple Street",
          "state": "CA",
          "postcode": "90001"
        },
        "type": "INDIVIDUAL"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cardHolders"

    payload = {
        "email": "test+7f8a9b23@example.com",
        "individual": {
            "date_of_birth": "1982-11-02",
            "express_consent_obtained": "yes",
            "identification": {
                "country": "US",
                "expiry_date": "2030-08-28",
                "number": "001238243",
                "type": "ID_CARD"
            },
            "name": {
                "first_name": "John",
                "last_name": "Doe"
            },
            "address": {
                "city": "Los Angeles",
                "country": "US",
                "line1": "1234 Maple Street",
                "state": "CA",
                "postcode": "90001"
            }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
            "city": "Los Angeles",
            "country": "US",
            "line1": "1234 Maple Street",
            "state": "CA",
            "postcode": "90001"
        },
        "type": "INDIVIDUAL"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cardHolders"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"email\":\"test+7f8a9b23@example.com\",\"individual\":{\"date_of_birth\":\"1982-11-02\",\"express_consent_obtained\":\"yes\",\"identification\":{\"country\":\"US\",\"expiry_date\":\"2030-08-28\",\"number\":\"001238243\",\"type\":\"ID_CARD\"},\"name\":{\"first_name\":\"John\",\"last_name\":\"Doe\"},\"address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"1234 Maple Street\",\"state\":\"CA\",\"postcode\":\"90001\"}},\"mobile_number\":\"91-95053039\",\"postal_address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"1234 Maple Street\",\"state\":\"CA\",\"postcode\":\"90001\"},\"type\":\"INDIVIDUAL\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ``` 
     </TabItem>

     <TabItem value="php" label="php">

    ```php
    <?php
    $url = '{{baseUrl}}/zoqq/api/v1/cardHolders';

    $data = [
        'email' => 'test+7f8a9b23@example.com',
        'individual' => [
            'date_of_birth' => '1982-11-02',
            'express_consent_obtained' => 'yes',
            'identification' => [
                'country' => 'US',
                'expiry_date' => '2030-08-28',
                'number' => '001238243',
                'type' => 'ID_CARD'
            ],
            'name' => [
                'first_name' => 'John',
                'last_name' => 'Doe'
            ],
            'address' => [
                'city' => 'Los Angeles',
                'country' => 'US',
                'line1' => '1234 Maple Street',
                'state' => 'CA',
                'postcode' => '90001'
            ]
        ],
        'mobile_number' => '91-95053039',
        'postal_address' => [
            'city' => 'Los Angeles',
            'country' => 'US',
            'line1' => '1234 Maple Street',
            'state' => 'CA',
            'postcode' => '90001'
        ],
        'type' => 'INDIVIDUAL'
    ];

    $headers = [
        'x-api-key: {{Shared Xapikey By Zoqq}}',
        'x-program-id: {{BasedOnRequirement}}',
        'x-request-id: {{IdempotencyKey}}',
        'x-user-id: {{Useridentificationkey}}',
        'Content-Type: application/json',
        'Authorization: Bearer {{YOUR_TOKEN}}'
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

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
        static async Task Main(string[] args)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/cardHolders"),
                Headers = 
                {
                    { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                    { "x-program-id", "{{BasedOnRequirement}}" },
                    { "x-request-id", "{{IdempotencyKey}}" },
                    { "x-user-id", "{{Useridentificationkey}}" },
                    { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                },
                Content = new StringContent("{\"email\":\"test+7f8a9b23@example.com\",\"individual\":{\"date_of_birth\":\"1982-11-02\",\"express_consent_obtained\":\"yes\",\"identification\":{\"country\":\"US\",\"expiry_date\":\"2030-08-28\",\"number\":\"001238243\",\"type\":\"ID_CARD\"},\"name\":{\"first_name\":\"John\",\"last_name\":\"Doe\"},\"address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"1234 Maple Street\",\"state\":\"CA\",\"postcode\":\"90001\"}},\"mobile_number\":\"91-95053039\",\"postal_address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"1234 Maple Street\",\"state\":\"CA\",\"postcode\":\"90001\"},\"type\":\"INDIVIDUAL\"}", Encoding.UTF8, "application/json")
            };

            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                Console.WriteLine(body);
            }
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
      "data": {
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
    
    </Tabs>
  </div>
</div>


## Create Card

This API creates a new card for a cardholder in the system.

<Tabs>

  <TabItem value="endpoint" label="Endpoint" default>

```
POST {{baseUrl}}/zoqq/api/v1/card

```
 </TabItem>

</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>The card object represents the resource associated with a card issued by Zoqq. It contains details such as the linked account, embossed name (for physical cards), shipping method and information (for physical cards), and card-based spend controls (e.g., transaction limits, blocked merchant category codes, etc.). The card object also specifies the intended user (e.g., clients, customers, or employees), the form factor (physical or virtual), and the usage type (single-use or multi-use).</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

| Parameter                                                  | Type     | Required | Description                                                                 |
|------------------------------------------------------------|----------|----------|-----------------------------------------------------------------------------|
| card_issuance_action                                       | string   | Yes      | Card issuance type (`NEW`, `REPLACEMENT`)                                  |
| card_type                                                  | string   | Yes      | Card type (`GPR_PHY`, `GPR_VIR`)                                            |
| card_holder_id                                             | string   | Yes      | ID of the cardholder                                                        |
| issuance_mode                                              | string   | Yes      | `PHYSICAL` or `VIRTUAL`                                                     |
| created_by                                                 | string   | Yes      | ID of the user who created the request                                     |
| request_id                                                 | string   | Yes      | Unique ID for idempotency                                                   |
| program                                                    | object   | Yes      | Program details                                                             |
| program.purpose                                            | string   | Yes      | Purpose of the card (`COMMERCIAL`, `CONSUMER`)                              |
| program.type                                               | string   | Yes      | Type of the card (`DEBIT`, `CREDIT`)                                       |
| program.sub_type                                           | string   | Yes      | Card sub-type (`B2B_TRAVEL`, etc.)                                         |
| authorization_controls                                     | object   | Yes      | Transaction control configurations                                          |
| authorization_controls.allowed_transaction_count           | string   | Yes      | `SINGLE` or `MULTIPLE`                                                      |
| authorization_controls.transaction_limits                  | object   | Yes      | Transaction limits configuration                                            |
| authorization_controls.transaction_limits.currency         | string   | Yes      | Currency for the transaction limits (`USD`, etc.)                          |
| authorization_controls.transaction_limits.limits           | array    | Yes      | List of limit objects                                                       |
| authorization_controls.transaction_limits.limits[].amount  | integer  | Yes      | Transaction limit amount (> 0)                                              |
| authorization_controls.transaction_limits.limits[].interval| string   | Yes      | Interval (`PER_TRANSACTION`, `DAILY`, `WEEKLY`, `MONTHLY`, `ALL_TIME`)     |
| is_personalized                                            | boolean  | Yes      | Whether the card is personalized                                            |


  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/card \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "card_issuance_action": "NEW",
        "card_type": "GPR_PHY",
        "card_holder_id": "",
        "issuance_mode": "NORMAL_DELIVERY_LOCAL",
        "created_by": "Postman Test",
        "request_id": "56789987654567",
        "program": {
          "purpose": "COMMERCIAL",
          "type": "DEBIT",
          "sub_type": "B2B_TRAVEL"
        },
        "authorization_controls": {
          "allowed_transaction_count": "MULTIPLE",
          "transaction_limits": {
            "currency": "USD",
            "limits": [
              {
                "amount": 10000,
                "interval": "PER_TRANSACTION"
              }
            ]
          }
        },
        "is_personalized": false
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/card"

    payload = {
        "card_issuance_action": "NEW",
        "card_type": "GPR_PHY",
        "card_holder_id": "",
        "issuance_mode": "NORMAL_DELIVERY_LOCAL",
        "created_by": "Postman Test",
        "request_id": "56789987654567",
        "program": {
            "purpose": "COMMERCIAL",
            "type": "DEBIT",
            "sub_type": "B2B_TRAVEL"
        },
        "authorization_controls": {
            "allowed_transaction_count": "MULTIPLE",
            "transaction_limits": {
                "currency": "USD",
                "limits": [
                    {
                        "amount": 10000,
                        "interval": "PER_TRANSACTION"
                    }
                ]
            }
        },
        "is_personalized": False
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/card"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"card_issuance_action\":\"NEW\",\"card_type\":\"GPR_PHY\",\"card_holder_id\":\"\",\"issuance_mode\":\"NORMAL_DELIVERY_LOCAL\",\"created_by\":\"Postman Test\",\"request_id\":\"56789987654567\",\"program\":{\"purpose\":\"COMMERCIAL\",\"type\":\"DEBIT\",\"sub_type\":\"B2B_TRAVEL\"},\"authorization_controls\":{\"allowed_transaction_count\":\"MULTIPLE\",\"transaction_limits\":{\"currency\":\"USD\",\"limits\":[{\"amount\":10000,\"interval\":\"PER_TRANSACTION\"}]}},\"is_personalized\":false}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>

      <TabItem value="php" label="php">

    ```php
    <?php
    $url = '{{baseUrl}}/zoqq/api/v1/card';

    $data = [
        'card_issuance_action' => 'NEW',
        'card_type' => 'GPR_PHY',
        'card_holder_id' => '',
        'issuance_mode' => 'NORMAL_DELIVERY_LOCAL',
        'created_by' => 'Postman Test',
        'request_id' => '56789987654567',
        'program' => [
            'purpose' => 'COMMERCIAL',
            'type' => 'DEBIT',
            'sub_type' => 'B2B_TRAVEL'
        ],
        'authorization_controls' => [
            'allowed_transaction_count' => 'MULTIPLE',
            'transaction_limits' => [
                'currency' => 'USD',
                'limits' => [
                    [
                        'amount' => 10000,
                        'interval' => 'PER_TRANSACTION'
                    ]
                ]
            ]
        ],
        'is_personalized' => false
    ];

    $headers = [
        'x-api-key: {{Shared Xapikey By Zoqq}}',
        'x-program-id: {{BasedOnRequirement}}',
        'x-request-id: {{IdempotencyKey}}',
        'x-user-id: {{Useridentificationkey}}',
        'Content-Type: application/json',
        'Authorization: Bearer {{YOUR_TOKEN}}'
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
    ?>
    ```

      </TabItem>






      <TabItem value="csharp" label="C#">

    ```csharp
    var client = new RestClient("{{baseUrl}}/zoqq/api/v1/card");
    var request = new RestRequest(Method.POST);
    request.AddHeader("x-api-key", "{{Shared Xapikey By Zoqq}}");
    request.AddHeader("x-program-id", "{{BasedOnRequirement}}");
    request.AddHeader("x-request-id", "{{IdempotencyKey}}");
    request.AddHeader("x-user-id", "{{Useridentificationkey}}");
    request.AddHeader("Content-Type", "application/json");
    request.AddHeader("Authorization", "Bearer {{YOUR_TOKEN}}");
    request.AddJsonBody(new {
        card_issuance_action = "NEW",
        card_type = "GPR_PHY",
        card_holder_id = "",
        issuance_mode = "NORMAL_DELIVERY_LOCAL",
        created_by = "Postman Test",
        request_id = "56789987654567",
        program = new {
            purpose = "COMMERCIAL",
            type = "DEBIT",
            sub_type = "B2B_TRAVEL"
        },
        authorization_controls = new {
            allowed_transaction_count = "MULTIPLE",
            transaction_limits = new {
                currency = "USD",
                limits = new[] {
                    new {
                        amount = 10000,
                        interval = "PER_TRANSACTION"
                    }
                }
            }
        },
        is_personalized = false
    });
    IRestResponse response = client.Execute(request);
    Console.WriteLine(response.Content);
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
      "data": {
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03"
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
     
    </Tabs>
  </div>
</div>


## Get All Cards

This API retrieves a list of all cards associated with the authenticated user.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/card
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a list of all cards (both physical and virtual) associated with the authenticated user. The response includes key card attributes such as card status, masked number, type, associated cardholder ID, and timestamps for creation and updates. Used to retrieve and display a user’s active or inactive cards for review, management, or filtering by type or status in customer portals, dashboards.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token |

    <h3>Query Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | status | string | No | Filter by card status (ACTIVE, INACTIVE) |
    | card_type | string | No | Filter by card type (PHY, VIRTUAL) |
    | limit | integer | No | Number of results per page (default: 20) |
    | offset | integer | No | Pagination offset (default: 0) |

    <h3>Response Parameters</h3>

    | Parameter | Type | Description |
    |-----------|------|-------------|
    | code | integer | Response status code |
    | status | string | Response status |
    | message | string | Additional message |
    | data | array | Array of card objects |
    | data[].cardHashId | string | Unique card identifier |
    | data[].cardStatus | string | Card status (ACTIVE/INACTIVE) |
    | data[].maskedCardNumber | string | Masked card number |
    | data[].cardholderId | string | Associated cardholder ID |
    | data[].createdAt | string | Creation timestamp (ISO 8601 format) |
    | data[].updatedAt | string | Last update timestamp (ISO 8601 format) |
    | data[].nameOnCard | string | Name printed on the card |
    | data[].cardType | string | Card type (PHY/VIRTUAL) |
    | data[].currency | string | Card currency code |
  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url '{{baseUrl}}/zoqq/api/v1/card?status=ACTIVE&card_type=VIRTUAL' \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{YOUR_TOKEN}}'
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/card"
        params = {
            "status": "ACTIVE",
            "card_type": "VIRTUAL"
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
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/card?status=ACTIVE&card_type=VIRTUAL"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{BasedOnRequirement}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{Useridentificationkey}}")
            .header("Authorization", "Bearer {{YOUR_TOKEN}}")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
        ```
      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/card?status=ACTIVE&card_type=VIRTUAL';
        
        $headers = [
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{YOUR_TOKEN}}'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
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
            static async Task Main(string[] args)
            {
                var client = new HttpClient();
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/card?status=ACTIVE&card_type=VIRTUAL"),
                    Headers = 
                    {
                        { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                        { "x-program-id", "{{BasedOnRequirement}}" },
                        { "x-request-id", "{{IdempotencyKey}}" },
                        { "x-user-id", "{{Useridentificationkey}}" },
                        { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                    }
                };

                using (var response = await client.SendAsync(request))
                {
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(body);
                }
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
              "cardHashId": "b3153738-901a-4cef-8883-d2d1379089db",
              "cardStatus": "ACTIVE",
              "maskedCardNumber": "************4639",
              "cardholderId": "757b4368-329f-4780-8881-a1a6da4219f3",
              "createdAt": "2025-04-02T07:36:56.973+0000",
              "updatedAt": "2025-04-23T05:45:12.422+0000",
              "nameOnCard": "Postman Test",
              "cardType": "VIRTUAL",
              "currency": "USD"
            },
            {
              "cardHashId": "7067f945-5a48-4164-b8e8-92f8e420c907",
              "cardStatus": "INACTIVE",
              "maskedCardNumber": "************6886",
              "cardholderId": "692a9a23-2175-4311-b83f-da3e8f088279",
              "createdAt": "2025-03-31T08:02:20.000+0000",
              "updatedAt": "2025-03-31T08:02:20.000+0000",
              "nameOnCard": "demozoqq",
              "cardType": "PHY",
              "currency": "SGD"
            }
          ]
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "Something went wrong"
        }
        ```
      </TabItem>
     
    </Tabs>
  </div>
</div>


## Activate Card

This API activates an inactive card in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

POST {{baseUrl}}/zoqq/api/v1/card/activate

````
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint activates a specific card (physical or virtual) associated with the user by updating its status to ACTIVE. Activation typically requires the card’s unique identifier and any necessary verification parameters, depending on the program’s setup. Used when a new card is issued and needs to be activated by the user before use. This is typically triggered via a user action in a web portal to begin using the card for transactions.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Unique identifier of the card to activate |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/card/activate \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "card_1234567890abcdef"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/card/activate"

    payload = {
        "id": "card_1234567890abcdef"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/card/activate"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"id\":\"card_1234567890abcdef\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/card/activate';
        
        $data = [
            'id' => 'card_1234567890abcdef'
        ];

        $headers = [
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Content-Type: application/json',
            'Authorization: Bearer {{YOUR_TOKEN}}'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
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
            static async Task Main(string[] args)
            {
                var client = new HttpClient();
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Post,
                    RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/card/activate"),
                    Headers = 
                    {
                        { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                        { "x-program-id", "{{BasedOnRequirement}}" },
                        { "x-request-id", "{{IdempotencyKey}}" },
                        { "x-user-id", "{{Useridentificationkey}}" },
                        { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                    },
                    Content = new StringContent("{\"id\":\"card_1234567890abcdef\"}", Encoding.UTF8, "application/json")
                };

                using (var response = await client.SendAsync(request))
                {
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(body);
                }
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
      "message": "card activated successfully"
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      
    </Tabs>
  </div>
</div>


## Update Card

This API updates card details including authorization controls and status.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

PATCH {{baseUrl}}/zoqq/api/v1/card

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint updates attributes of an existing card, such as its status (e.g., block, unblock), name on the card, or other modifiable fields, depending on the program’s permissions. Only specified fields are updated. Used to perform updates on a card post-issuance—for example, blocking a card due to suspicious activity, unblocking upon user request, or correcting cardholder details</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

  

| Parameter                          | Type              | Required         | Description                                                                 |
|------------------------------------|-------------------|------------------|-----------------------------------------------------------------------------|
| id                               | string            | Yes              | Card ID to update                                                           |
| card_status                      | string            | No               | Card status — must be one of `ACTIVE`, `INACTIVE`, `CLOSED`                |
| currency                         | string            | No               | Currency for the card (e.g., `USD`, `EUR`)                                  |
| transaction_limits               | array of objects  | No               | List of transaction limits                                                  |
| transaction_limits[].type        | string            | Yes (if present) | Type of limit — one of `PER_TRANSACTION`, `DAILY`, `WEEKLY`, `MONTHLY`, `ALL_TIME` |
| transaction_limits[].value       | integer           | Yes (if present) | Numerical value of the limit                                                

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request PATCH \
      --url {{baseUrl}}/zoqq/api/v1/card \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "card_1234567890abcdef",
    "currency": "USD",
    "transaction_limits": [
      {
        "type": "ALL_TIME",
        "value": 20000
      }
    ],
    "card_status": "INACTIVE"
  }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/card"

    payload = {
        "id": "card_1234567890abcdef",
    "currency": "USD",
    "transaction_limits": [
      {
        "type": "ALL_TIME",
        "value": 20000
      }
    ],
    "card_status": "INACTIVE"
  }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.patch(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class UpdateCard {
    public static void main(String[] args) throws Exception {
        URL url = new URL("{{baseUrl}}/zoqq/api/v1/card");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("PATCH");
        conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
        conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
        conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
        conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
        conn.setRequestProperty("Authorization", "Bearer {{YOUR_TOKEN}}");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        String jsonPayload = """
        {
          "id": "card_1234567890abcdef",
          "currency": "USD",
          "transaction_limits": [
            {
              "type": "ALL_TIME",
              "value": 20000
            }
          ],
          "card_status": "INACTIVE"
        }
        """;

        try (OutputStream os = conn.getOutputStream()) {
            os.write(jsonPayload.getBytes());
        }

        int responseCode = conn.getResponseCode();
        System.out.println("Response Code: " + responseCode);
    }
}

    ```

      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
$url = "{{baseUrl}}/zoqq/api/v1/card";

$data = [
    "id" => "card_1234567890abcdef",
    "currency" => "USD",
    "transaction_limits" => [
        [
            "type" => "ALL_TIME",
            "value" => 20000
        ]
    ],
    "card_status" => "INACTIVE"
];

$headers = [
    "x-api-key: {{Shared Xapikey By Zoqq}}",
    "x-program-id: {{BasedOnRequirement}}",
    "x-request-id: {{IdempotencyKey}}",
    "x-user-id: {{Useridentificationkey}}",
    "Authorization: Bearer {{YOUR_TOKEN}}",
    "Content-Type: application/json"
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PATCH");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);

echo $response;

        ```
      </TabItem>
      <TabItem value="csharp" label="C#">
        ```csharp
        using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

class UpdateCard
{
    static async Task Main()
    {
        var client = new HttpClient();

        var request = new HttpRequestMessage(new HttpMethod("PATCH"), "{{baseUrl}}/zoqq/api/v1/card");
        request.Headers.Add("x-api-key", "{{Shared Xapikey By Zoqq}}");
        request.Headers.Add("x-program-id", "{{BasedOnRequirement}}");
        request.Headers.Add("x-request-id", "{{IdempotencyKey}}");
        request.Headers.Add("x-user-id", "{{Useridentificationkey}}");
        request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "{{YOUR_TOKEN}}");

        var json = @"
        {
            ""id"": ""card_1234567890abcdef"",
            ""currency"": ""USD"",
            ""transaction_limits"": [
                {
                    ""type"": ""ALL_TIME"",
                    ""value"": 20000
                }
            ],
            ""card_status"": ""INACTIVE""
        }";

        request.Content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await client.SendAsync(request);
        Console.WriteLine($"Response: {response.StatusCode}");
        var responseBody = await response.Content.ReadAsStringAsync();
        Console.WriteLine(responseBody);
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
      "message": "card updated successfully"
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      
      
    </Tabs>
  </div>
</div>


## Update a cardholder

This API updates card holder details including address and contact information.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````
PATCH {{baseUrl}}/zoqq/api/v1/cardHolder
````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint updates card holder information including physical address, postal address, and contact details.Update a cardholder with selected information. All fields are optional, and only those provided will be updated. If a composite object, e.g. name is provided, then all of its child fields must be provided and valid. Updating the cardholder may re-trigger the name screening process.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card holder ID to update |
    | individual | object | No | Individual details |
    | individual.address | object | No | Physical address |
    | mobile_number | string | No | Updated mobile number |
    | postal_address | object | No | Mailing address |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request PATCH \
      --url {{baseUrl}}/zoqq/api/v1/cardHolders \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03",
        "individual": {
          "address": {
            "city": "Austin",
            "country": "US",
            "line1": "1234 Elm Street",
            "state": "TX",
            "postcode": "94932"
          }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
          "city": "Los Angeles",
          "country": "US",
          "line1": "5678 Oak Avenue",
          "state": "CA",
          "postcode": "94932"
        }
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cardHolders"

    payload = {
        "id": "1e301167-ff1a-4a4e-bf2a-d2f84e144b03",
        "individual": {
            "address": {
                "city": "Austin",
                "country": "US",
                "line1": "1234 Elm Street",
                "state": "TX",
                "postcode": "94932"
            }
        },
        "mobile_number": "91-95053039",
        "postal_address": {
            "city": "Los Angeles",
            "country": "US",
            "line1": "5678 Oak Avenue",
            "state": "CA",
            "postcode": "94932"
        }
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.patch(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cardHolders"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("PATCH", HttpRequest.BodyPublishers.ofString("{\"id\":\"1e301167-ff1a-4a4e-bf2a-d2f84e144b03\",\"individual\":{\"address\":{\"city\":\"Austin\",\"country\":\"US\",\"line1\":\"1234 Elm Street\",\"state\":\"TX\",\"postcode\":\"94932\"}},\"mobile_number\":\"91-95053039\",\"postal_address\":{\"city\":\"Los Angeles\",\"country\":\"US\",\"line1\":\"5678 Oak Avenue\",\"state\":\"CA\",\"postcode\":\"94932\"}}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/cardHolders';
        
        $data = [
            'id' => '1e301167-ff1a-4a4e-bf2a-d2f84e144b03',
            'individual' => [
                'address' => [
                    'city' => 'Austin',
                    'country' => 'US',
                    'line1' => '1234 Elm Street',
                    'state' => 'TX',
                    'postcode' => '94932'
                ]
            ],
            'mobile_number' => '91-95053039',
            'postal_address' => [
                'city' => 'Los Angeles',
                'country' => 'US',
                'line1' => '5678 Oak Avenue',
                'state' => 'CA',
                'postcode' => '94932'
            ]
        ];

        $headers = [
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Content-Type: application/json',
            'Authorization: Bearer {{YOUR_TOKEN}}'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
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
            static async Task Main(string[] args)
            {
                var client = new HttpClient();
                var request = new HttpRequestMessage
                {
                    Method = new HttpMethod("PATCH"),
                    RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/cardHolders"),
                    Headers = 
                    {
                        { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                        { "x-program-id", "{{BasedOnRequirement}}" },
                        { "x-request-id", "{{IdempotencyKey}}" },
                        { "x-user-id", "{{Useridentificationkey}}" },
                        { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                    },
                    Content = new StringContent(
                        "{\"id\":\"1e301167-ff1a-4a4e-bf2a-d2f84e144b03\"," +
                        "\"individual\":{" +
                            "\"address\":{" +
                                "\"city\":\"Austin\"," +
                                "\"country\":\"US\"," +
                                "\"line1\":\"1234 Elm Street\"," +
                                "\"state\":\"TX\"," +
                                "\"postcode\":\"94932\"" +
                            "}" +
                        "}," +
                        "\"mobile_number\":\"91-95053039\"," +
                        "\"postal_address\":{" +
                            "\"city\":\"Los Angeles\"," +
                            "\"country\":\"US\"," +
                            "\"line1\":\"5678 Oak Avenue\"," +
                            "\"state\":\"CA\"," +
                            "\"postcode\":\"94932\"" +
                        "}" +
                        "}",
                        Encoding.UTF8,
                        "application/json")
                };

                using (var response = await client.SendAsync(request))
                {
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(body);
                }
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
      "message": ""
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      
      
    </Tabs>
  </div>
</div>


## Get Card Limit

This API retrieves the current transaction limits and other relevant details for a specific card.


<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

GET {{baseUrl}}/zoqq/api/v1/card/limit

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns the current transaction limits and remaining amounts for a specific card, including both purchase and cash withdrawal limits.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Query Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card ID to retrieve limits for |
    | currency | string | No | Filter by specific currency |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/card/limit?id=card_1234567890abcdef&currency=USD' \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests

    url = "{{baseUrl}}/zoqq/api/v1/card/limit"
    params = {
        "id": "card_1234567890abcdef",
        "currency": "USD"
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
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/card/limit?id=card_1234567890abcdef&currency=USD"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("GET", HttpRequest.BodyPublishers.noBody())
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>

      <TabItem value="php" label="php">
    ```php
    <?php
    $url = '{{baseUrl}}/zoqq/api/v1/card/limit?id=card_1234567890abcdef&currency=USD';
    
    $headers = [
        'x-api-key: {{Shared Xapikey By Zoqq}}',
        'x-program-id: {{BasedOnRequirement}}',
        'x-request-id: {{IdempotencyKey}}',
        'x-user-id: {{Useridentificationkey}}',
        'Authorization: Bearer {{YOUR_TOKEN}}'
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
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
        static async Task Main(string[] args)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/card/limit?id=card_1234567890abcdef&currency=USD"),
                Headers = 
                {
                    { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                    { "x-program-id", "{{BasedOnRequirement}}" },
                    { "x-request-id", "{{IdempotencyKey}}" },
                    { "x-user-id", "{{Useridentificationkey}}" },
                    { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                }
            };

            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                Console.WriteLine(body);
            }
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
      "data": {
        "cash_withdrawal_limits": [
          {
            "amount": 1000,
            "interval": "PER_TRANSACTION",
            "remaining": 1000
          }
        ],
        "currency": "USD",
        "limits": [
          {
            "amount": 1000,
            "interval": "PER_TRANSACTION",
            "remaining": 1000
          }
        ]
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
     
    </Tabs>
  </div>
</div>

## Get Card Transactions

This API retrieves transaction history for a specific card.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
````

GET {{baseUrl}}/zoqq/api/v1/card/transaction

````


  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of transactions for a specific card, including detailed merchant information, transaction amounts, and status.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card ID to retrieve transactions for |
    | limit | integer | No | Number of transactions to return (default: 20) |
    | offset | integer | No | Pagination offset (default: 0) |
    | start_date | string | No | Filter transactions from this date (YYYY-MM-DD) |
    | end_date | string | No | Filter transactions to this date (YYYY-MM-DD) |
    | status | string | No | Filter by transaction status (APPROVED, DECLINED, etc.) |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request GET \
      --url {{baseUrl}}/zoqq/api/v1/cardHolders \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
        "limit": 20,
        "offset": 0,
        "start_date": "2023-01-01",
        "end_date": "2023-12-31",
        "status": "APPROVED"
      }'
    ```

      </TabItem>
      <TabItem value="python" label="Python">

    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/cardHolders"

    payload = {
        "id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
        "limit": 20,
        "offset": 0,
        "start_date": "2023-01-01",
        "end_date": "2023-12-31",
        "status": "APPROVED"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.post(url, headers=headers, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/cardHolders"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"id\":\"7f687fe6-dcf4-4462-92fa-80335301d9d2\",\"limit\":20,\"offset\":0,\"start_date\":\"2023-01-01\",\"end_date\":\"2023-12-31\",\"status\":\"APPROVED\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
    ```

      </TabItem>


      <TabItem value="php" label="php">
    ```php
    <?php
    $url = '{{baseUrl}}/zoqq/api/v1/card/transaction';
    
    $headers = [
        'x-api-key: {{Shared Xapikey By Zoqq}}',
        'x-program-id: {{BasedOnRequirement}}',
        'x-request-id: {{IdempotencyKey}}',
        'x-user-id: {{Useridentificationkey}}',
        'Content-Type: application/json',
        'Authorization: Bearer {{YOUR_TOKEN}}'
    ];

    $data = [
        'id' => '7f687fe6-dcf4-4462-92fa-80335301d9d2',
        'limit' => 20,
        'offset' => 0,
        'start_date' => '2023-01-01',
        'end_date' => '2023-12-31',
        'status' => 'APPROVED'
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    
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
        static async Task Main(string[] args)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/card/transaction"),
                Content = new StringContent(
                    "{\"id\":\"7f687fe6-dcf4-4462-92fa-80335301d9d2\"," +
                    "\"limit\":20," +
                    "\"offset\":0," +
                    "\"start_date\":\"2023-01-01\"," +
                    "\"end_date\":\"2023-12-31\"," +
                    "\"status\":\"APPROVED\"}",
                    Encoding.UTF8,
                    "application/json"),
                Headers = 
                {
                    { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                    { "x-program-id", "{{BasedOnRequirement}}" },
                    { "x-request-id", "{{IdempotencyKey}}" },
                    { "x-user-id", "{{Useridentificationkey}}" },
                    { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                }
            };

            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                Console.WriteLine(body);
            }
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
      "data": {
        "has_more": true,
        "items": [
          {
            "acquiring_institution_identifier": "123456",
            "auth_code": "000001",
            "billing_amount": 100,
            "billing_currency": "USD",
            "card_id": "7f687fe6-dcf4-4462-92fa-80335301d9d2",
            "card_nickname": "string",
            "client_data": "Some client data",
            "digital_wallet_token_id": "2af871b8-466e-465e-a8de-eeaac9f82392",
            "failure_reason": "INSUFFICIENT_FUNDS",
            "lifecycle_id": "95ede192-3a86-461e-96d9-f51b55aae79e",
            "masked_card_number": "************4242",
            "matched_authorizations": [
              "6c2dc266-09ad-4235-b61a-767c7cd6d6ea"
            ],
            "merchant": {
              "category_code": "4829",
              "city": "San Francisco",
              "country": "USA",
              "identifier": "012345678910123",
              "name": "Merchant A",
              "postcode": "94111",
              "state": "CA"
            },
            "network_transaction_id": "3951729271768745",
            "posted_date": "2018-03-22T16:08:02+00:00",
            "retrieval_ref": "909916088001",
            "risk_details": {
              "risk_actions_performed": [
                "TRANSACTION_BLOCKED"
              ],
              "risk_factors": [
                "Suspicious transaction velocity"
              ],
              "three_dsecure_outcome": "AUTHENTICATED"
            },
            "status": "APPROVED",
            "transaction_amount": 100,
            "transaction_currency": "USD",
            "transaction_date": "2018-03-21T16:08:02+00:00",
            "transaction_id": "6c2dc266-09ad-4235-b61a-767c7cd6d6ea",
            "transaction_type": "REFUND"
          }
        ]
      }
    }
    ```

      </TabItem>
      <TabItem value="400" label="400: Error">

    ```json
    {
      "code": 400,
      "status": "Error",
      "message": "Something went wrong"
    }
    ```

      </TabItem>
      
      
    </Tabs>
  </div>
</div>


## Get Card Details

This API retrieves sensitive card details including card number, CVV, and expiration information.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/card/detail

```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns sensitive card details that are typically masked in other endpoints. Requires appropriate permissions.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Query Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Yes | Card ID to retrieve details for |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url '{{baseUrl}}/zoqq/api/v1/card/detail?id=card_1234567890abcdef' \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{YOUR_TOKEN}
          }'
        ```

      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/card/detail"
        params = {
            "id": "card_1234567890abcdef"
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
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("{{baseUrl}}/zoqq/api/v1/card/detail?id=card_1234567890abcdef"))
            .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
            .header("x-program-id", "{{BasedOnRequirement}}")
            .header("x-request-id", "{{IdempotencyKey}}")
            .header("x-user-id", "{{Useridentificationkey}}")
            .header("Authorization", "Bearer {{YOUR_TOKEN}}")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
            .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
        ```
      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/card/detail?id=card_1234567890abcdef';
        
        $headers = [
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{YOUR_TOKEN}}'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
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
            static async Task Main(string[] args)
            {
                var client = new HttpClient();
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/card/detail?id=card_1234567890abcdef"),
                    Headers = 
                    {
                        { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                        { "x-program-id", "{{BasedOnRequirement}}" },
                        { "x-request-id", "{{IdempotencyKey}}" },
                        { "x-user-id", "{{Useridentificationkey}}" },
                        { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                    }
                };

                using (var response = await client.SendAsync(request))
                {
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(body);
                }
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
              "card_number": "4503060009834639",
              "cvv": "653",
              "expiry_month": 4,
              "expiry_year": 2028,
              "name_on_card": "demozoqq"
            }
          ]
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "Something went wrong"
        }
        ```
      </TabItem>

    </Tabs>
  </div>
</div>
