---
id: onboarding
title: Onboarding
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Create User
This API creates a new user account with business and personal details.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
``` 
POST {{baseUrl}}/zoqq/api/v1/user
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint creates a new user account with comprehensive business, personal, and document information.Create a new ZOQQ account for your users, merchants, subsidiaries, business partners, or clients. After providing all the necessary information, you can activate the account by submitting it through the 'Submit Account for Activation' endpoint.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | Authorization | string | No | Bearer token (Nullable) |
 
   <h3>Request Body Parameters</h3>

 | Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| emailId | string | Yes | User's email address |
| amount | string | Yes | amount(estimated_monthly_revenue) |
| currency | string | Yes | Currency_estimated_monthly_revenue  |
| businessName | string | Yes | Registered business name |
| businessStructure | string | Yes | Business structure type |
| contactNumber | string | Yes | Business contact number |
| identificationType | string | Yes | ID document type (e.g., Passport) |
| Idnumber | string | Yes | Identification number |
| issuingCountryCode | string | Yes | Country that issued the ID |
| effectiveAt | string | Yes | ID document effective date (YYYY-MM-DD) |
| expireAt | string | Yes | ID document expiry date (YYYY-MM-DD) |
| firstName | string | Yes | User's first name |
| middleName | string | No | User's middle name |
| lastName | string | Yes | User's last name |
| dateOfBirth | string | Yes | Date of birth (YYYY-MM-DD) |
| nationality | string | Yes | Nationality of the user |
| mobile | string | Yes | Mobile number |
| roles | string | Yes | User role (e.g., BENEFICIAL_OWNER) |
| legalEntityType | string | Yes | Legal type of the entity (e.g., BUSINESS) |
| asTrustee | boolean | Yes | Whether the user is acting as a trustee |
| agreedToTermsAndConditions | boolean | Yes | Whether the user has agreed to terms and conditions |
| productReference | string | Yes | Possible enum values<ul><li>ACCEPT_ONLINE_PAYMENTS</li><li>COLLECT_MARKETPLACE_PROCEEDS</li><li>RECEIVE_TRANSFERS</li><li>GET_PAID</li><li>CONVERT_FUNDS</li><li>MAKE_TRANSFERS</li><li>CREATE_CARDS</li><li>MANAGE_EXPENSES</li><li>USE_AWX_API</li><li>TRANSFER_CNY_INBOUND</li></ul> |
| type | string | Yes | Type of entity (e.g., business) |
| number | string | Yes | Business registration number |
| descriptionOfGoodsOrServices | string | Yes | Description of services or goods |
| industryCategoryCode | string | Yes | Industry classification code |
| operatingCountry | string | Yes | Country where business operates |
| registrationAddressLine1 | string | Yes | Business registration address line 1 |
| registrationAddressLine2 | string | No | Business registration address line 2 |
| registrationCountryCode | string | Yes | Business registration country code |
| registrationPostcode | string | Yes | Business registration postcode |
| registrationState | string | Yes | Business registration state |
| registrationSuburb | string | Yes | Business registration suburb |
| residentialAddressLine1 | string | Yes | Residential address line 1 |
| residentialCountryCode | string | Yes | Residential country code |
| residentialPostcode | string | Yes | Residential postcode |
| residentialState | string | Yes | Residential state |
| residentialSuburb | string | Yes | Residential suburb |
| fileId | string | Yes | Business document file ID |
| tag | string | Yes | Tag for business document |
| frontFileId | string | Yes | ID document front side file ID |
| personDocumentsFileId | string | Yes | File ID for person documents |
| personDocumentsTag | string | Yes | Tag for person documents |
| liveSelfieFileId | string | Yes | Live selfie file ID | 
| countryCode | string | Yes | ISO 2-letter country code (e.g., SG, IN, AU) | 


 
</div>



  <div className="api-docs-right">
    <h3>Request Example</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request POST \
          --url {{baseUrl}}/zoqq/api/v1/user \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'Authorization: Bearer {{YOUR_TOKEN}}' \
          --data-raw '{
            "emailId": "testzoqq10@yopmail.com",
            "amount": "10",
            "currency": "USD",
            "productReference": "ACCEPT_ONLINE_PAYMENTS",
            "asTrustee": true,
            "fileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "tag": "BUSINESS_LICENSE",
            "countryCode": "SG",
            "number": "1234567890",
            "type": "business",
            "businessName": "STYLOPAY Pty Ltd2",
            "businessStructure": "COMPANY",
            "contactNumber": "1234567890",
            "descriptionOfGoodsOrServices": "Payment gateway services",
            "industryCategoryCode": "ICCV3_0000XX",
            "registrationAddressLine1": "123 Market Street",
            "registrationAddressLine2": "Suite 456",
            "registrationCountryCode": "SG",
            "registrationPostcode": "2000",
            "registrationState": "NSW",
            "registrationSuburb": "Sydney",
            "operatingCountry": "AU",
            "personDocumentsFileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "personDocumentsTag": "PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER",
            "residentialAddressLine1": "456 King Street",
            "residentialCountryCode": "SG",
            "residentialPostcode": "2010",
            "residentialState": "NSW",
            "residentialSuburb": "Newtown",
            "identificationType": "Passport",
            "issuingCountryCode": "SG",
            "effectiveAt": "2020-01-01",
            "expireAt": "2030-01-01",
            "frontFileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "Idnumber": "X1234567",
            "roles": "BENEFICIAL_OWNER",
            "dateOfBirth": "1985-05-15",
            "firstName": "nivi",
            "lastName": "Doe",
            "middleName": "A",
            "nationality": "SG",
            "liveSelfieFileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "legalEntityType": "BUSINESS",
            "agreedToTermsAndConditions": false,
            "mobile": "912500678"
          }'
        ```
      </TabItem>

      <TabItem value="python" label="Python">
        ```python
        import requests
        import json

        url = "{{baseUrl}}/zoqq/api/v1/user"

        payload = {
            "emailId": "testzoqq10@yopmail.com",
            "amount": "10",
            "currency": "USD",
            "productReference": "ACCEPT_ONLINE_PAYMENTS",
            "asTrustee": True,
            "fileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "tag": "BUSINESS_LICENSE",
            "countryCode": "SG",
            "number": "1234567890",
            "type": "business",
            "businessName": "STYLOPAY Pty Ltd2",
            "businessStructure": "COMPANY",
            "contactNumber": "1234567890",
            "descriptionOfGoodsOrServices": "Payment gateway services",
            "industryCategoryCode": "ICCV3_0000XX",
            "registrationAddressLine1": "123 Market Street",
            "registrationAddressLine2": "Suite 456",
            "registrationCountryCode": "SG",
            "registrationPostcode": "2000",
            "registrationState": "NSW",
            "registrationSuburb": "Sydney",
            "operatingCountry": "AU",
            "personDocumentsFileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "personDocumentsTag": "PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER",
            "residentialAddressLine1": "456 King Street",
            "residentialCountryCode": "SG",
            "residentialPostcode": "2010",
            "residentialState": "NSW",
            "residentialSuburb": "Newtown",
            "identificationType": "Passport",
            "issuingCountryCode": "SG",
            "effectiveAt": "2020-01-01",
            "expireAt": "2030-01-01",
            "frontFileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "Idnumber": "X1234567",
            "roles": "BENEFICIAL_OWNER",
            "dateOfBirth": "1985-05-15",
            "firstName": "nivi",
            "lastName": "Doe",
            "middleName": "A",
            "nationality": "SG",
            "liveSelfieFileId": "NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA",
            "legalEntityType": "BUSINESS",
            "agreedToTermsAndConditions": False,
            "mobile": "912500678"
        }

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "Authorization": "Bearer {{YOUR_TOKEN}}",
            "Content-Type": "application/json"
        }

        response = requests.post(url, headers=headers, data=json.dumps(payload))
        print(response.json())
        ```
      </TabItem>


      
      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user';
        
        $data = [
            'emailId' => 'testzoqq10@yopmail.com',
            'amount' => '10',
            'currency' => 'USD',
            'productReference' => 'ACCEPT_ONLINE_PAYMENTS',
            'asTrustee' => true,
            'fileId' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
            'tag' => 'BUSINESS_LICENSE',
            'countryCode' => 'SG',
            'number' => '1234567890',
            'type' => 'business',
            'businessName' => 'STYLOPAY Pty Ltd2',
            'businessStructure' => 'COMPANY',
            'contactNumber' => '1234567890',
            'descriptionOfGoodsOrServices' => 'Payment gateway services',
            'industryCategoryCode' => 'ICCV3_0000XX',
            'registrationAddressLine1' => '123 Market Street',
            'registrationAddressLine2' => 'Suite 456',
            'registrationCountryCode' => 'SG',
            'registrationPostcode' => '2000',
            'registrationState' => 'NSW',
            'registrationSuburb' => 'Sydney',
            'operatingCountry' => 'AU',
            'personDocumentsFileId' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
            'personDocumentsTag' => 'PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER',
            'residentialAddressLine1' => '456 King Street',
            'residentialCountryCode' => 'SG',
            'residentialPostcode' => '2010',
            'residentialState' => 'NSW',
            'residentialSuburb' => 'Newtown',
            'identificationType' => 'Passport',
            'issuingCountryCode' => 'SG',
            'effectiveAt' => '2020-01-01',
            'expireAt' => '2030-01-01',
            'frontFileId' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
            'Idnumber' => 'X1234567',
            'roles' => 'BENEFICIAL_OWNER',
            'dateOfBirth' => '1985-05-15',
            'firstName' => 'nivi',
            'lastName' => 'Doe',
            'middleName' => 'A',
            'nationality' => 'SG',
            'liveSelfieFileId' => 'NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA',
            'legalEntityType' => 'BUSINESS',
            'agreedToTermsAndConditions' => false,
            'mobile' => '912500678'
        ];

        $headers = [
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'Authorization: Bearer {{YOUR_TOKEN}}',
            'Content-Type: application/json'
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
                    RequestUri = new Uri("{{baseUrl}}/zoqq/api/v1/user"),
                    Headers = 
                    {
                        { "x-api-key", "{{Shared Xapikey By Zoqq}}" },
                        { "x-program-id", "{{BasedOnRequirement}}" },
                        { "x-request-id", "{{IdempotencyKey}}" },
                        { "Authorization", "Bearer {{YOUR_TOKEN}}" }
                    },
                    Content = new StringContent(
                        "{" +
                        "\"emailId\":\"testzoqq10@yopmail.com\"," +
                        "\"amount\":\"10\"," +
                        "\"currency\":\"USD\"," +
                        "\"productReference\":\"ACCEPT_ONLINE_PAYMENTS\"," +
                        "\"asTrustee\":true," +
                        "\"fileId\":\"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\"," +
                        "\"tag\":\"BUSINESS_LICENSE\"," +
                        "\"countryCode\":\"SG\"," +
                        "\"number\":\"1234567890\"," +
                        "\"type\":\"business\"," +
                        "\"businessName\":\"STYLOPAY Pty Ltd2\"," +
                        "\"businessStructure\":\"COMPANY\"," +
                        "\"contactNumber\":\"1234567890\"," +
                        "\"descriptionOfGoodsOrServices\":\"Payment gateway services\"," +
                        "\"industryCategoryCode\":\"ICCV3_0000XX\"," +
                        "\"registrationAddressLine1\":\"123 Market Street\"," +
                        "\"registrationAddressLine2\":\"Suite 456\"," +
                        "\"registrationCountryCode\":\"SG\"," +
                        "\"registrationPostcode\":\"2000\"," +
                        "\"registrationState\":\"NSW\"," +
                        "\"registrationSuburb\":\"Sydney\"," +
                        "\"operatingCountry\":\"AU\"," +
                        "\"personDocumentsFileId\":\"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\"," +
                        "\"personDocumentsTag\":\"PERSON_PURPORTING_TO_ACT_AUTHORISATION_LETTER\"," +
                        "\"residentialAddressLine1\":\"456 King Street\"," +
                        "\"residentialCountryCode\":\"SG\"," +
                        "\"residentialPostcode\":\"2010\"," +
                        "\"residentialState\":\"NSW\"," +
                        "\"residentialSuburb\":\"Newtown\"," +
                        "\"identificationType\":\"Passport\"," +
                        "\"issuingCountryCode\":\"SG\"," +
                        "\"effectiveAt\":\"2020-01-01\"," +
                        "\"expireAt\":\"2030-01-01\"," +
                        "\"frontFileId\":\"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\"," +
                        "\"Idnumber\":\"X1234567\"," +
                        "\"roles\":\"BENEFICIAL_OWNER\"," +
                        "\"dateOfBirth\":\"1985-05-15\"," +
                        "\"firstName\":\"nivi\"," +
                        "\"lastName\":\"Doe\"," +
                        "\"middleName\":\"A\"," +
                        "\"nationality\":\"SG\"," +
                        "\"liveSelfieFileId\":\"NzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjLHwsaG9uZ2tvbmcsfCxibGFuay5wZGZfMTc0MzQ5NTg5MTYzMA\"," +
                        "\"legalEntityType\":\"BUSINESS\"," +
                        "\"agreedToTermsAndConditions\":false," +
                        "\"mobile\":\"912500678\"" +
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
            "status": "Success",
            "message": "User Created Successfully",
            "code": 200,
            "data": [
                {
                    "accountid": "XXXXXXX"
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
            "message": "failed reason"
        }
        ```
      </TabItem>
    </Tabs>
  </div>
</div>

## Get User

This API retrieves user details from the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/user
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint retrieves the details of an existing user including business information, personal details, and account status.Update existing customer details using the update user API endpoint. Any changes to the existing user’s address, user's personal details or phone number can be initiated using the PATCH HTTP method. These changes will not affect the existing user's id.
All parameters used in create user can be updated, except Agent Code, subagent Code and email.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |
    
  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url {{baseUrl}}/zoqq/api/v1/user \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{Bearer Token}}'
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class GetUser {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/user");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");

                // Set headers
                conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
                conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
                conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
                conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
                conn.setRequestProperty("Authorization", "Bearer {{Bearer Token}}");

                int responseCode = conn.getResponseCode();
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println(response.toString());
            }
        }
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/user"

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{Bearer Token}}"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user';

        $headers = array(
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{Bearer Token}}'
        );

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
        using System.Net;
        using System.IO;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/zoqq/api/v1/user");
                request.Method = "GET";

                // Set headers
                request.Headers["x-api-key"] = "{{Shared Xapikey By Zoqq}}";
                request.Headers["x-program-id"] = "{{BasedOnRequirement}}";
                request.Headers["x-request-id"] = "{{IdempotencyKey}}";
                request.Headers["x-user-id"] = "{{Useridentificationkey}}";
                request.Headers["Authorization"] = "Bearer {{Bearer Token}}";

                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string jsonResponse = reader.ReadToEnd();
                    Console.WriteLine(jsonResponse);
                }
                catch (WebException ex)
                {
                    Console.WriteLine(ex.Message);
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
      "status": "success",
      "message": "User Details Fetched Successfully",
      "code": 200,
      "data": {
        "account_details": {
          "attachments": {
            "additional_files": []
          },
          "business_details": {
            "account_usage": {
              "estimated_monthly_revenue": {
                "amount": "10.0",
                "currency": "USD"
              },
              "product_reference": [
                "ACCEPT_ONLINE_PAYMENTS",
                "SG"
              ]
            },
            "as_trustee": true,
            "attachments": {
              "business_documents": []
            },
            "business_address": null,
            "business_identifiers": [],
            "business_name": "STYLOPAY Pty Ltd2",
            "business_name_english": null,
            "business_name_trading": null,
            "business_start_date": null,
            "business_structure": "COMPANY",
            "contact_number": null,
            "description_of_goods_or_services": "Payment gateway services",
            "explanation_for_high_risk_countries_exposure": null,
            "has_nominee_shareholders": null,
            "industry_category_code": "ICCV3_0000XX",
            "no_shareholders_with_over_25percent": null,
            "operating_country": [],
            "registration_address": {
              "address_line1": "123 Market Street",
              "address_line2": "Suite 456",
              "country_code": "SG",
              "postcode": "2010",
              "state": "NSW",
              "suburb": "Newtown"
            },
            "registration_address_english": null,
            "state_of_incorporation": null,
            "url": null,
            "urls": null
          },
          "business_person_details": [],
          "trustee_details": null,
          "individual_details": null,
          "legal_entity_id": "le_CZY8LKCSOzK5LMsCEd7c_A",
          "legal_entity_identifier": null,
          "legal_entity_type": "BUSINESS"
        },
        "created_at": "2025-04-25T13:38:40+0000",
        "customer_agreements": {
          "agreed_to_data_usage": true,
          "agreed_to_terms_and_conditions": true,
          "terms_and_conditions": {
            "device_data": {},
            "service_agreement_type": "FULL"
          }
        },
        "id": "acct_mdUe_PvMMzqYGd0Qmlib9g",
        "nickname": "acct_mdUe_PvMMzqYGd0Qmlib9g",
        "primary_contact": {
          "attachments": {
            "identity_files": []
          },
          "email": "testzoqq7@yopmail.com",
          "mobile": "912514678"
        },
        "status": "CREATED",
        "view_type": "EXCLUDED_PII"
      }
    }
    ```
  </TabItem>
  <TabItem value="400" label="400: Error">
    ```json
    {
      "code": 400,
      "status": "error",
      "message": "Failed to fetch user details"
    }
    ```
  </TabItem>
</Tabs>

  </div> 
</div>

## Accept Terms And Conditions

This API allows users to accept the terms and conditions.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET  {{baseUrl}}/zoqq/api/v1/user/termsConditions
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This API retrieves the current version of the Terms & Conditions that the user must review and accept. It ensures that the user has agreed to the legal and compliance requirements before proceeding with account creation or accessing platform services. This is a mandatory step in the onboarding process.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token |

  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url {{baseUrl}}/zoqq/api/v1/user/termsConditions \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{Bearer Token}}'
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class AcceptTerms {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/user/termsConditions");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");

                // Set headers
                conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
                conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
                conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
                conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
                conn.setRequestProperty("Authorization", "Bearer {{Bearer Token}}");

                int responseCode = conn.getResponseCode();
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println(response.toString());
            }
        }
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/user/termsConditions"

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{Bearer Token}}"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user/termsConditions';

        $headers = array(
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{Bearer Token}}'
        );

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
        using System.Net;
        using System.IO;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/zoqq/api/v1/user/termsConditions");
                request.Method = "GET";

                // Set headers
                request.Headers["x-api-key"] = "{{Shared Xapikey By Zoqq}}";
                request.Headers["x-program-id"] = "{{BasedOnRequirement}}";
                request.Headers["x-request-id"] = "{{IdempotencyKey}}";
                request.Headers["x-user-id"] = "{{Useridentificationkey}}";
                request.Headers["Authorization"] = "Bearer {{Bearer Token}}";

                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string jsonResponse = reader.ReadToEnd();
                    Console.WriteLine(jsonResponse);
                }
                catch (WebException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
        ```
      </TabItem>
    </Tabs>

    <h3>Response Examples</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>
        ```json
        {
          "status": "success",
          "message": "Terms and conditions accepted successfully"
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "failed reason"
        }
        ```
      </TabItem>
    </Tabs>

  </div> 
</div>

## Account Activation

This API activates a user account in the system.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET {{baseUrl}}/zoqq/api/v1/user/activate
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This API retrieves the activation status of a user’s account. It checks whether all required onboarding steps have been completed and confirms if the account is fully activated and ready for use. This endpoint is typically used after submitting the account for activation.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | Yes | Bearer token |

  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --request GET \
          --url {{baseUrl}}/zoqq/api/v1/user/activate \
          --header 'x-api-key: {{Shared Xapikey By Zoqq}}' \
          --header 'x-program-id: {{BasedOnRequirement}}' \
          --header 'x-request-id: {{IdempotencyKey}}' \
          --header 'x-user-id: {{Useridentificationkey}}' \
          --header 'Authorization: Bearer {{Bearer Token}}'
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class ActivateAccount {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/zoqq/api/v1/user/activate");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");

                // Set headers
                conn.setRequestProperty("x-api-key", "{{Shared Xapikey By Zoqq}}");
                conn.setRequestProperty("x-program-id", "{{BasedOnRequirement}}");
                conn.setRequestProperty("x-request-id", "{{IdempotencyKey}}");
                conn.setRequestProperty("x-user-id", "{{Useridentificationkey}}");
                conn.setRequestProperty("Authorization", "Bearer {{Bearer Token}}");

                int responseCode = conn.getResponseCode();
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println(response.toString());
            }
        }
        ```
      </TabItem>
      <TabItem value="python" label="Python">
        ```python
        import requests

        url = "{{baseUrl}}/zoqq/api/v1/user/activate"

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Authorization": "Bearer {{Bearer Token}}"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/zoqq/api/v1/user/activate';

        $headers = array(
            'x-api-key: {{Shared Xapikey By Zoqq}}',
            'x-program-id: {{BasedOnRequirement}}',
            'x-request-id: {{IdempotencyKey}}',
            'x-user-id: {{Useridentificationkey}}',
            'Authorization: Bearer {{Bearer Token}}'
        );

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
        using System.Net;
        using System.IO;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/zoqq/api/v1/user/activate");
                request.Method = "GET";

                // Set headers
                request.Headers["x-api-key"] = "{{Shared Xapikey By Zoqq}}";
                request.Headers["x-program-id"] = "{{BasedOnRequirement}}";
                request.Headers["x-request-id"] = "{{IdempotencyKey}}";
                request.Headers["x-user-id"] = "{{Useridentificationkey}}";
                request.Headers["Authorization"] = "Bearer {{Bearer Token}}";

                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader reader = new StreamReader(response.GetResponseStream());
                    string jsonResponse = reader.ReadToEnd();
                    Console.WriteLine(jsonResponse);
                }
                catch (WebException ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
        ```
      </TabItem>
    </Tabs>

    <h3>Response Examples</h3>

    <Tabs>
      <TabItem value="200" label="200: Success" default>
        ```json
        {
          "status": "success",
          "message": "Account Activated"
        }
        ```
      </TabItem>
      <TabItem value="400" label="400: Error">
        ```json
        {
          "code": 400,
          "status": "Error",
          "message": "failed reason"
        }
        ```
      </TabItem>
    </Tabs>

  </div> 
</div>

## Retrieve an RFI

This API retrieves details of an RFI using the given RFI ID.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    GET  {{baseUrl}}/zoqq/api/v1/user/rfi
     
```
  </TabItem>
</Tabs>
<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This API allows you to retrieve the details of a Request for Information (RFI) linked to a specific account or user. RFIs are generated when additional data or documentation is required for compliance, verification, or due diligence purposes. The API response includes the RFI status, requested items, and any relevant instructions for completion.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | Program identifier |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token (Nullable) |

    <h3>Response Fields</h3>
    
    | Field | Type | Description |
    |-------|------|-------------|
    | account_id | string | Unique account identifier |
    | active_request | object | Current pending RFI details |
    | answered_requests | array | List of previously answered RFIs |
    | status | string | RFI status (e.g., ACTION_REQUIRED) |
    | type | string | RFI type (e.g., KYC) |
    | created_at | string | ISO 8601 creation timestamp |
    | updated_at | string | ISO 8601 last update timestamp |

    <h4>Question Object Fields:</h4>
    | Field | Type | Description |
    |-------|------|-------------|
    | id | string | Unique question identifier |
    | key | string | Question type key (e.g., PROOF_OF_ADDRESS) |
    | title | object | Localized question titles |
    | description | object | Localized descriptions |
    | answer | object | Provided answer details |
    | attachments | array | List of attached files |
    | comment | string | Additional comments |

  </div>
  
  <div className="api-docs-right">
    <h3>Request Example</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl -X GET \
          "{{baseUrl}}/zoqq/api/v1/user/rfi" \
          -H "x-api-key: {{Shared Xapikey By Zoqq}}" \
          -H "x-program-id: {{BasedOnRequirement}}" \
          -H "x-request-id: {{IdempotencyKey}}" \
          -H "x-user-id: {{Useridentificationkey}}"
        ```
      </TabItem>
      
      <TabItem value="response" label="Response Example">
        ```json
        {
          "account_id": "acct_e_2wbiZ3Mx-ynlX-7Qidbg",
          "active_request": {
            "created_at": "2023-04-12T07:29:36+0000",
            "questions": [
              {
                "answer": {
                  "address": {
                    "address_line1": "200 Collins Street",
                    "address_line2": "200 Collins Street",
                    "country_code": "AU",
                    "postcode": "3000",
                    "state": "VIC",
                    "suburb": "Melbourne"
                  },
                  "attachments": [
                    {
                      "file_id": "ZTEyOWJjZTItZGI5NS00NzI5LWI1YTQtZmQ2MmZlNDEwNzFlLHwsaG9uZ2tvbmcsfCzpvI7og5xDSS5wZGZfMTY4MzI1Nzg5OTUwOQ"
                    }
                  ],
                  "identity_document": {
                    "back_file_id": "N2EwYTllMTgtZmZjOS00ZDllLWI1MDQtMDMyZjAzZTRjZWE0LHwsLHwsQ05fQkxfbmV3LnBuZ18xNjgzNTUyNjg3Nzg3",
                    "front_file_id": "N2EwYTllMTgtZmZjOS00ZDllLWI1MDQtMDMyZjAzZTRjZWE0LHwsLHwsQ05fQkxfbmV3LnBuZ18xNjgzNTUyNjg3Nzg3",
                    "issuing_country": "AU",
                    "number": "123456789",
                    "type": "DRIVING_LICENSE"
                  }
                },
                "id": "ba7bfb51-77bc-4991-b651-0969ece1d263",
                "key": "PROOF_OF_ADDRESS",
                "title": {
                  "en": "Information confirmation",
                  "zh": "信息确认"
                }
              }
            ],
            "updated_at": "2023-04-14T07:29:36+0000"
          },
          "status": "ACTION_REQUIRED",
          "type": "KYC",
          "updated_at": "2023-04-12T07:29:36+0000"
        }
        ```
      </TabItem>
      
      <TabItem value="python" label="Python">
        ```python
        import requests
        
        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}"
        }
        
        response = requests.get(
            "{{baseUrl}}/zoqq/api/v1/user/rfi",
            headers=headers
        )
        
        print(response.json())
        ```
      </TabItem>
    </Tabs>
  </div>
</div>


##  Respond an RFI

This API allows you to respond to an RFI request by providing the required answers.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    POST  {{baseUrl}}/zoqq/api/v1/user/rfi
     
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This API allows you to submit a response to an existing Request for Information (RFI). It is used to provide the required verification details along with any supporting documents requested during the compliance or onboarding process. A successful submission updates the RFI status and moves the review process forward.</p>
    
    <h3>Request Headers</h3>
    
    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-api-key | string | Yes | Shared X-API key provided by Zoqq |
    | x-program-id | string | Yes | BasedOnRequirement |
    | x-request-id | string | Yes | Idempotency key |
    | x-user-id | string | Yes | User identification key |
    | Authorization | string | No | Bearer token  |
    | Content-Type | string | Yes | Must be application/json |

    <h3>Request Body Parameters</h3>
    
    | Field | Type | Required | Description |
    |-------|------|----------|-------------|
    | id | string | Yes | RFI question identifier |
    | type | string | Yes | Response type (e.g., ADDRESS) |
    | address_line1 | string | Conditional | Street address line 1 |
    | address_line2 | string | No | Street address line 2 |
    | country_code | string | Conditional | 2-letter country code |
    | postcode | string | Conditional | Postal/ZIP code |
    | state | string | Conditional | State/Province code |
    | suburb | string | Conditional | City/Locality name |
    | attachments | array | No | File IDs of supporting documents |

    <h4>Supported Response Types:</h4>
    - `ADDRESS`: For proof of address verification
    - `DOCUMENT`: For identity document verification
    - `TEXT`: For simple text responses
  </div>
  
  <div className="api-docs-right">
    <h3>Request Examples</h3>
    
    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl -X POST \
          "{{baseUrl}}/zoqq/api/v1/user/rfi" \
          -H "x-api-key: {{Shared Xapikey By Zoqq}}" \
          -H "x-program-id: {{BasedOnRequirement}}" \
          -H "x-request-id: {{IdempotencyKey}}" \
          -H "x-user-id: {{Useridentificationkey}}" \
          -H "Content-Type: application/json" \
          -d '{
            "id": "de73d13b-cb60-4541-8fa6-4bc50c1cbe92",
            "type": "ADDRESS",
            "address_line1": "200 Collins Street",
            "address_line2": "200 Collins Street",
            "country_code": "AU",
            "postcode": "3000",
            "state": "VIC",
            "suburb": "Melbourne"
          }'
        ```
      </TabItem>
      
      <TabItem value="response" label="Response Example">
        ```json
        {
          "status": "SUBMITTED",
          "rfi_id": "de73d13b-cb60-4541-8fa6-4bc50c1cbe92",
          "submitted_at": "2023-04-15T08:30:45Z",
          "next_steps": "Verification may take 1-3 business days"
        }
        ```
      </TabItem>
      
      <TabItem value="python" label="Python">
        ```python
        import requests

        headers = {
            "x-api-key": "{{Shared Xapikey By Zoqq}}",
            "x-program-id": "{{BasedOnRequirement}}",
            "x-request-id": "{{IdempotencyKey}}",
            "x-user-id": "{{Useridentificationkey}}",
            "Content-Type": "application/json"
        }

        payload = {
            "id": "de73d13b-cb60-4541-8fa6-4bc50c1cbe92",
            "type": "ADDRESS",
            "address_line1": "200 Collins Street",
            "address_line2": "200 Collins Street",
            "country_code": "AU",
            "postcode": "3000",
            "state": "VIC",
            "suburb": "Melbourne"
        }

        response = requests.post(
            "{{baseUrl}}/zoqq/api/v1/user/rfi",
            headers=headers,
            json=payload
        )

        print(response.json())
        ```
      </TabItem>
      
      <TabItem value="advanced" label="With Attachments">
        ```json
        {
          "id": "de73d13b-cb60-4541-8fa6-4bc50c1cbe92",
          "type": "ADDRESS",
          "address_line1": "200 Collins Street",
          "country_code": "AU",
          "postcode": "3000",
          "attachments": [
            {
              "file_id": "ZTEyOWJjZTItZGI5NS00NzI5LWI1YTQtZmQ2MmZlNDEwNzFl",
              "purpose": "PROOF_OF_ADDRESS"
            }
          ]
        }
        ```
      </TabItem>
    </Tabs>
  </div>
</div>