---
id: payout
title: Payout
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- ## Get Create Beneficiary Schema

This API retrieves the required schema for creating a beneficiary based on transfer corridor parameters.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns the dynamic schema required to create a beneficiary, based on the specified transfer corridor parameters. The schema fields will vary depending on the country, currency, and transfer method.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token () |

    <h3>Query Parameters</h3>

    | Parameter | Type | Required | Description | Values |
    |-----------|------|----------|-------------|--------|
    | account_currency | string | Yes | Beneficiary account currency | ISO currency code |
    | bank_country_code | string | Yes | Beneficiary bank country | ISO country code |
    | entity_type | string | Yes | Type of beneficiary | `PERSONAL`, `BUSINESS` |
    | local_clearing_system | string | Yes | Local clearing system | `ACH`, `FASTER_PAYMENTS`, `SEPA`, etc. |
    | transfer_method | string | Yes | Transfer method | `LOCAL`, `SWIFT`, `WALLET` |

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>

    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?account_currency=USD&bank_country_code=US&entity_type=PERSONAL&local_clearing_system=ACH&transfer_method=LOCAL' \
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

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"
    params = {
        "account_currency": "USD",
        "bank_country_code": "US",
        "entity_type": "PERSONAL",
        "local_clearing_system": "ACH",
        "transfer_method": "LOCAL"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?account_currency=USD&bank_country_code=US&entity_type=PERSONAL&local_clearing_system=ACH&transfer_method=LOCAL"))
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
        "schema": {
          "type": "object",
          "required": ["account_number", "routing_number", "full_name"],
          "properties": {
            "account_number": {
              "type": "string",
              "description": "Beneficiary account number",
              "minLength": 4,
              "maxLength": 17
            },
            "routing_number": {
              "type": "string",
              "description": "ABA routing number",
              "pattern": "^[0-9]{9}$"
            },
            "full_name": {
              "type": "string",
              "description": "Beneficiary full legal name",
              "minLength": 1,
              "maxLength": 100
            },
            "account_type": {
              "type": "string",
              "enum": ["CHECKING", "SAVINGS"]
            }
          }
        },
        "corridor_details": {
          "source_currency": "USD",
          "destination_currency": "USD",
          "country": "US",
          "clearing_system": "ACH",
          "estimated_settlement_time": "1-2 business days"
        }
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
</div> -->

<!-- ## Create Payout

Programmatically make cost-effective, fast and secure payouts across the globe.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST - {{baseUrl}}/zoqq/api/v1/transfer/
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>Initiate a payout transfer to a beneficiary account. The request requires specific headers and a JSON payload with transfer details.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key (prevents duplicate transfers) |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token () |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | beneficiary_id | string | Yes | ID of pre-registered beneficiary |
    | amount | number | Yes | Transfer amount |
    | currency | string | Yes | 3-letter ISO currency code |
    | reference | string | Yes | Client reference ID |
    | notes | string | No | Additional transfer notes |

    <h4>Example Request Body:</h4>
    ```json
    {
      "beneficiary_id": "ben_123456789",
      "amount": 100.50,
      "currency": "USD",
      "reference": "ORDER_12345",
      "notes": "Invoice payment for May"
    }
    ```

  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl -X POST \
          "{{baseUrl}}/zoqq/api/v1/transfer/" \
          -H "x-api-key: {{Shared Xapikey By ZOqq}}" \
          -H "x-program-id: {{BasedOnRequirement}}" \
          -H "x-request-id: {{IdempotencyKey}}" \
          -H "x-user-id: {{Useridentificationkey}}" \
          -H "Content-Type: application/json" \
          -d '{
            "beneficiary_id": "ben_123456789",
            "amount": 100.50,
            "currency": "USD",
            "reference": "ORDER_12345"
          }'
        ```
      </TabItem>

      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/transfer/"
        headers = {
            "x-api-key": "{{Shared Xapikey By ZOqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Content-Type": "application/json"
        }
        payload = {
            "beneficiary_id": "ben_123456789",
            "amount": 100.50,
            "currency": "USD",
            "reference": "ORDER_12345"
        }

        response = requests.post(url, headers=headers, json=payload)
        print(response.json())
        ```
      </TabItem>

      <TabItem value="nodejs" label="Node.js">
        ```javascript
        const axios = require('axios');

        const config = {
          url: '{{baseUrl}}/zoqq/api/v1/transfer/',
          method: 'post',
          headers: {
            'x-api-key': '{{Shared Xapikey By ZOqq}}',
            'x-program-id': '{{BasedOnRequirement}}',
            'x-request-id': '{{IdempotencyKey}}',
            'x-user-id': '{{Useridentificationkey}}',
            'Content-Type': 'application/json'
          },
          data: {
            beneficiary_id: 'ben_123456789',
            amount: 100.50,
            currency: 'USD',
            reference: 'ORDER_12345'
          }
        };

        axios(config)
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
        ```
      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/transfer/';
        $headers = [
            'x-api-key: {{Shared Xapikey By ZOqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Content-Type: application/json'
        ];
        $data = [
            'beneficiary_id' => 'ben_123456789',
            'amount' => 100.50,
            'currency' => 'USD',
            'reference' => 'ORDER_12345'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
        ?>
        ```
      </TabItem>
    </Tabs>
  </div>
</div> -->

Zoqq Payouts enables businesses to make faster, more cost-effective payouts across the globe by connecting to local clearing systems in over countries. With a single Zoqq account and/or one integration, you (and your customers) will be able to move funds globally via Zoqq’s payout network, which currently supports local and SWIFT payouts in countries/regions and over currencies.

## Create Beneficiary

This endpoint is used to create a new beneficiary account, which is required for making transfers to that recipient. To ensure the request is properly formatted, the request body must follow the specific structure (schema) provided by the Get Beneficiary Schema endpoint. This ensures that all necessary details are included and correctly formatted for successful account creation.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint is used to create a new beneficiary account, which is essential for initiating transfers to that beneficiary. A beneficiary account typically includes important details such as the recipient’s name,  account , and other relevant data required to process a transfer.
    To successfully create a beneficiary account, the request body must adhere to a specific format or structure. This structure, also known as the schema, can be retrieved using the Get Beneficiary Schema endpoint. It outlines all the required fields, data types, and any conditional logic or rules that must be followed. Using the correct schema ensures the data is valid and reduces the chances of errors during account creation or future transfers.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
     
     <h3>Request Body Parameters</h3>


    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | beneficiary_account_currency | string | Yes | Currency code of the beneficiary |
    |beneficiary_account_number | string | Yes | Account number of the beneficiary |
   

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/transfer/beneficiary \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "beneficiary_account_currency": "USD",
        "beneficiary_account_number": "1234567890"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
import json

url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"

payload = {
    "beneficiary_account_currency": "USD",
    "beneficiary_account_number": "1234567890"
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
    .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"))
    .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
    .header("x-program-id", "{{BasedOnRequirement}}")
    .header("x-request-id", "{{IdempotencyKey}}")
    .header("x-user-id", "{{Useridentificationkey}}")
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer {{YOUR_TOKEN}}")
    .method("POST", HttpRequest.BodyPublishers.ofString("{\"beneficiary_account_currency\":\"USD\",\"beneficiary_account_number\":\"1234567890\"}"))
    .build();

HttpResponse<String> response = HttpClient.newHttpClient()
    .send(request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());

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
        "id": "beneficiary_id",
      "beneficiary_account_currency": "USD",
      "beneficiary_account_number": "1234567890"
        
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

## Validate Create Beneficiary

This API is designed to validate the beneficiary’s details before proceeding with the actual creation of the beneficiary account. It allows you to perform a pre-check to ensure that all the provided information—such as the recipient's name, account number, and other required fields—is accurate, complete, and formatted correctly according to the rules defined by the payment system or region.

By using this validation API, you can identify and correct any issues or missing data in advance, helping to prevent errors or failures during the actual beneficiary creation process. It is a useful step in workflows where ensuring data accuracy is critical before committing to creating records in the system. Importantly, this API only checks the data—it does not create or store the beneficiary account.
<Tabs>
<TabItem value="endpoint" label="Endpoint" default>

```
POST {{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint is used to validate beneficiary account details based on the specific requirements of the transfer corridor . It ensures that all the necessary information—such as the beneficiary’s name, account number,  and any country-specific fields—complies with the rules defined in the beneficiary schema for that corridor.
    When you call this endpoint, it performs the same validation checks that would occur during actual beneficiary creation. </p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |


    

    <h3>Request Body</h3>

    <p>The request body should match the structure returned by the <code>GET /transfer/beneficiary</code> schema endpoint for your specific corridor.</p>

    <h4>Example for US ACH Personal Account:</h4>
    ```json
    {
      "account_number": "123456789",
      "routing_number": "026073150",
      "full_name": "John Doe",
      "account_type": "CHECKING",
      "bank_country_code": "US",
      "account_currency": "USD",
      "entity_type": "PERSONAL",
      "transfer_method": "LOCAL"
    }
    ```

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request POST \
      --url {{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "account_number": "123456789",
        "routing_number": "026073150",
        "full_name": "John Doe",
        "account_type": "CHECKING",
        "bank_country_code": "US",
        "account_currency": "USD",
        "entity_type": "PERSONAL",
        "transfer_method": "LOCAL"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary"

    payload = {
        "account_number": "123456789",
        "routing_number": "026073150",
        "full_name": "John Doe",
        "account_type": "CHECKING",
        "bank_country_code": "US",
        "account_currency": "USD",
        "entity_type": "PERSONAL",
        "transfer_method": "LOCAL"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/validatebeneficiary"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("POST", HttpRequest.BodyPublishers.ofString("{\"account_number\":\"123456789\",\"routing_number\":\"026073150\",\"full_name\":\"John Doe\",\"account_type\":\"CHECKING\",\"bank_country_code\":\"US\",\"account_currency\":\"USD\",\"entity_type\":\"PERSONAL\",\"transfer_method\":\"LOCAL\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
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
      "message": "Validation successful",
      "data": []
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

## Update Beneficiary

This API lets you update specific fields of an existing beneficiary account, such as name, bank details without recreating the entire account. You need to provide the beneficiary ID and only the fields you want to change. The API validates the updates based on the rules for the relevant transfer corridor, ensuring data accuracy while keeping the rest of the beneficiary information unchanged.
<Tabs>
<TabItem value="endpoint" label="Endpoint" default>

```
PATCH {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>TThis endpoint allows partial updates to an existing beneficiary's information. You only need to include the fields you want to change, such as name, bank details, or address. The updates are validated using the same schema as beneficiary creation, ensuring they meet the requirements for the relevant transfer corridor. Unspecified fields remain unchanged.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token () |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | beneficiary_id | string | Yes | ID of the beneficiary to update |

    <h3>Request Body</h3>

    <p>Include only the fields that need updating, following the same schema as beneficiary creation:</p>

    ```json
    {
      "full_name": "Updated Name",
      "account_number": "987654321",
      "account_type": "SAVINGS"
    }
    ```

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request PATCH \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123' \
      --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
      --header 'x-program-id: {{BasedOnRequirement}}' \
      --header 'x-request-id: {{IdempotencyKey}}' \
      --header 'x-user-id: {{Useridentificationkey}}' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
      --data '{
        "full_name": "Updated Name",
        "account_number": "987654321",
        "account_type": "SAVINGS"
      }'
    ```
    
      </TabItem>
      <TabItem value="python" label="Python">
    
    ```python
    import requests
    import json

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"
    params = {"beneficiary_id": "beneficiary_123"}

    payload = {
        "full_name": "Updated Name",
        "account_number": "987654321",
        "account_type": "SAVINGS"
    }

    headers = {
        "x-api-key": "{{Shared Xapikey By Zoqq}}",
        "x-program-id": "{{BasedOnRequirement}}",
        "x-request-id": "{{IdempotencyKey}}",
        "x-user-id": "{{Useridentificationkey}}",
        "Content-Type": "application/json",
        "Authorization": "Bearer {{YOUR_TOKEN}}"
    }

    response = requests.patch(url, headers=headers, params=params, data=json.dumps(payload))
    print(response.json())
    ```

      </TabItem>
      <TabItem value="java" label="Java">

    ```java
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123"))
        .header("x-api-key", "{{Shared Xapikey By Zoqq}}")
        .header("x-program-id", "{{BasedOnRequirement}}")
        .header("x-request-id", "{{IdempotencyKey}}")
        .header("x-user-id", "{{Useridentificationkey}}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer {{YOUR_TOKEN}}")
        .method("PATCH", HttpRequest.BodyPublishers.ofString("{\"full_name\":\"Updated Name\",\"account_number\":\"987654321\",\"account_type\":\"SAVINGS\"}"))
        .build();
    HttpResponse<String> response = HttpClient.newHttpClient()
        .send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
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
      "data": []
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

## Get Beneficiary by ID

This API retrieves detailed information about a specific beneficiary.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/beneficiary
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint retrieves full details of a specific beneficiary, including their account info, verification status, and supported payout methods. You must provide the beneficiary ID and required headers for authentication and identification.</p>
    
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
    | beneficiary_id | string | Yes | The ID of the beneficiary to retrieve |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123' \
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

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiary"
    params = {
        "beneficiary_id": "beneficiary_123"
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiary?beneficiary_id=beneficiary_123"))
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
        "id": "beneficiary_123",
        "account_holder_name": "John Doe",
        "account_number": "••••6789",
        "bank_name": "Bank of America",
        "bank_country_code": "US",
        "currency": "USD",
        "entity_type": "PERSONAL",
        "status": "VERIFIED",
        "created_at": "2023-06-16T05:22:14Z",
        "last_used_at": "2023-06-18T10:15:22Z",
        "payout_methods": ["LOCAL", "SWIFT"],
        "metadata": {
          "routing_number": "•••••3150",
          "account_type": "CHECKING"
        }
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

## Get Beneficiary List

This API retrieves a list of all beneficiaries associated with the authenticated user.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
GET {{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint returns a paginated list of beneficiaries created by the user, along with their status and supported payout methods. You can filter results by status or currency and control pagination using limit and offset query parameters.</p>
    
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
    | limit | integer | No | Number of results per page (default: 20, max: 100) |
    | offset | integer | No | Pagination offset (default: 0) |
    | status | string | No | Filter by beneficiary status |
    | currency | string | No | Filter by beneficiary currency |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
    
    ```bash
    curl --request GET \
      --url '{{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist?limit=20&offset=0' \
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

    url = "{{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist"
    params = {
        "limit": 20,
        "offset": 0
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
        .uri(URI.create("{{baseUrl}}/zoqq/api/v1/transfer/beneficiarylist?limit=20&offset=0"))
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
          "id": "beneficiary_id_1",
          "account_holder_name": "John Doe",
          "account_number": "••••6789",
          "bank_name": "Bank of America",
          "currency": "USD",
          "country": "US",
          "status": "VERIFIED",
          "created_at": "2023-06-16T05:22:14Z",
          "payout_methods": ["LOCAL", "SWIFT"],
          "last_used_at": "2023-06-18T10:15:22Z"
        },
        {
          "id": "beneficiary_id_2",
          "account_holder_name": "Acme Corp",
          "account_number": "••••4321",
          "bank_name": "Chase",
          "currency": "EUR",
          "country": "DE",
          "status": "PENDING_VERIFICATION",
          "created_at": "2023-06-17T11:32:45Z",
          "payout_methods": ["SEPA"],
          "last_used_at": null
        }
      ],
      "pagination": {
        "total_count": 15,
        "limit": 20,
        "offset": 0
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

## Create Payout

Programmatically make cost-effective, fast and secure payouts across the globe.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
POST - {{baseUrl}}/zoqq/api/v1/transfer/
```

  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint initiates a payout transfer to a registered beneficiary account. To use it, you must include the required headers for authentication, program identification, and idempotency. The request body must be in JSON format and include key details such as the beneficiary_id, transfer amount, currency, and a client reference. Optional notes can also be included. The endpoint validates the input and processes the transfer based on the provided details.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key (prevents duplicate transfers) |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |
    
    <h3>Request Body Parameters</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | beneficiary_id | string | Yes | ID of pre-registered beneficiary |
    | amount | number | Yes | Transfer amount |
    | currency | string | Yes | 3-letter ISO currency code |
    | reference | string | Yes | Client reference ID |
    | notes | string | No | Additional transfer notes |

    <h4>Example Request Body:</h4>
    ```json
    {
      "beneficiary_id": "ben_123456789",
      "amount": 100.50,
      "currency": "USD",
      "reference": "ORDER_12345",
      "notes": "Invoice payment for May"
    }
    ```

  </div>
  
  <div className="api-docs-right">
    <h3>Request Examples</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl -X POST \
          "{{baseUrl}}/zoqq/api/v1/transfer/" \
          -H "x-api-key: {{Shared Xapikey By ZOqq}}" \
          -H "x-program-id: {{BasedOnRequirement}}" \
          -H "x-request-id: {{IdempotencyKey}}" \
          -H "x-user-id: {{Useridentificationkey}}" \
          -H "Content-Type: application/json" \
          -d '{
            "beneficiary_id": "ben_123456789",
            "amount": 100.50,
            "currency": "USD",
            "reference": "ORDER_12345"
          }'
        ```
      </TabItem>
      
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/transfer/"
        headers = {
            "x-api-key": "{{Shared Xapikey By ZOqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Content-Type": "application/json"
        }
        payload = {
            "beneficiary_id": "ben_123456789",
            "amount": 100.50,
            "currency": "USD",
            "reference": "ORDER_12345"
        }

        response = requests.post(url, headers=headers, json=payload)
        print(response.json())
        ```
      </TabItem>

      <TabItem value="nodejs" label="Node.js">
        ```javascript
        const axios = require('axios');

        const config = {
          url: '{{baseUrl}}/zoqq/api/v1/transfer/',
          method: 'post',
          headers: {
            'x-api-key': '{{Shared Xapikey By ZOqq}}',
            'x-program-id': '{{BasedOnRequirement}}',
            'x-request-id': '{{IdempotencyKey}}',
            'x-user-id': '{{Useridentificationkey}}',
            'Content-Type': 'application/json'
          },
          data: {
            beneficiary_id: 'ben_123456789',
            amount: 100.50,
            currency: 'USD',
            reference: 'ORDER_12345'
          }
        };

        axios(config)
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
        ```
      </TabItem>

      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/transfer/';
        $headers = [
            'x-api-key: {{Shared Xapikey By ZOqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Content-Type: application/json'
        ];
        $data = [
            'beneficiary_id' => 'ben_123456789',
            'amount' => 100.50,
            'currency' => 'USD',
            'reference' => 'ORDER_12345'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($ch);
        curl_close($ch);

        echo $response;
        ?>
        ```
      </TabItem>
    </Tabs>

  </div>
</div>

## Cancel Payout

This API allows cancellation of pending payout transactions.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
    ```
    PATCH {{baseUrl}}/zoqq/api/{version}/transfer/cancelpayout
    ```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint cancels a pending payout transaction using either the payout ID or system reference number. Required headers ensure authentication and request tracking. The request body must include one of the two identifiers to locate and cancel the transaction. Only pending payouts can be canceled.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | API key for authentication |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Unique request identifier |
    | x-user-id | string | No | User identification |
    | Authorization | string | Yes | Bearer token for authentication |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Path Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | version | string | Yes | API version number |

    <h3>Request Body Parameters</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | id | string | Conditional* | Payout transaction ID |
    | systemReferenceNumber | string | Conditional* | System reference number |

    <p><em>*Note: At least one of these fields must be provided</em></p>

  </div>

  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request PATCH \
          --url {{baseUrl}}/zoqq/api/v1/transfer/cancelpayout \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Content-Type: application/json' \
          --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
          --data '{
            "id": "pyt_12345",
            "systemReferenceNumber": "ref_67890"
          }'
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests
        import json

        url = "{{baseUrl}}/zoqq/api/v1/transfer/cancelpayout"

        payload = {
            "id": "pyt_12345",
            "systemReferenceNumber": "ref_67890"
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

        public class CancelPayout {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/transfer/cancelpayout");
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
                  "id": "pyt_12345",
                  "systemReferenceNumber": "ref_67890"
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
        $url = "{{baseUrl}}/zoqq/api/v1/transfer/cancelpayout";

        $data = [
            "id" => "pyt_12345",
            "systemReferenceNumber" => "ref_67890"
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
        ?>
        ```
      </TabItem>
      <TabItem value="csharp" label="C#">
        ```csharp
        using System;
        using System.Net.Http;
        using System.Net.Http.Headers;
        using System.Text;
        using System.Threading.Tasks;

        class CancelPayout
        {
            static async Task Main()
            {
                var client = new HttpClient();

                var request = new HttpRequestMessage(new HttpMethod("PATCH"), "{{baseUrl}}/zoqq/api/v1/transfer/cancelpayout");
                request.Headers.Add("x-api-key", "{{Shared Xapikey By Zoqq}}");
                request.Headers.Add("x-program-id", "{{BasedOnRequirement}}");
                request.Headers.Add("x-request-id", "{{IdempotencyKey}}");
                request.Headers.Add("x-user-id", "{{Useridentificationkey}}");
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "{{YOUR_TOKEN}}");

                var json = @"
                {
                    ""id"": ""pyt_12345"",
                    ""systemReferenceNumber"": ""ref_67890""
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
          "message": "Payout cancelled successfully",
          "data": {}
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "Payout cannot be cancelled as it's already processed"
        }
        ```
      </TabItem>
    </Tabs>

  </div> 
</div>
