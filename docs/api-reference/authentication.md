---
id: authentication
title: Authentication
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Learn how to authenticate with the Zoqq API.

## Authentication Login

This API authenticates and retrieves an access token for API operations.To get started, you must first obtain an access token, which is required to access all other API endpoints. Use your unique Client ID and X-API Key to call the Authentication API. Upon a successful request, you will receive a unique Auth Code that remains valid for approximately 30 minutes. During this period, you can make API calls using the token. Once the Auth Code expires, you will need to generate a new one to continue accessing the APIs.

<Tabs>
  <TabItem value="endpoint" label="Endpoint" default>
```
    POST {{baseUrl}}/api/v1/authentication/login
```
  </TabItem>
</Tabs>

<div className="api-docs-container">
  <div className="api-docs-left">
    <h3>Description</h3>
    <p>This endpoint authenticates the client and returns an access token with specified permissions.</p>

    <h3>Request Headers</h3>

    | Parameter | Type | Required | Description |
    |-----------|------|----------|-------------|
    | x-client-id | string | Yes | Client identification key |
    | x-api-key | string | Yes | API secret key for authentication |
    | Content-Type | string | Yes | Must be application/json |
    
  </div>

  <div className="api-docs-right">
    <h3>Request Examples</h3>

    <Tabs>
      <TabItem value="curl" label="cURL" default>
        ```bash
        curl --location --request POST '{{baseUrl}}/api/v1/authentication/login' \
        --header 'x-client-id: Shared By Zoqq' \
        --header 'x-api-key: Shared By Zoqq' \
        --data ''
        ```
      </TabItem>
      <TabItem value="java" label="Java">
        ```java
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.io.OutputStream;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;

        public class AuthLogin {
            public static void main(String[] args) throws Exception {
                URL url = new URL("{{baseUrl}}/api/v1/authentication/login");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("POST");
                
                // Set headers
                conn.setRequestProperty("x-client-id", "Shared By Stylopay");
                conn.setRequestProperty("x-api-key", "Shared By Stylopay");
                conn.setRequestProperty("scope", "r:awx_action:balances_view r:awx_action:settings.account_details_view r:awx_action:global_accounts_view");
                
                // Send empty POST data
                conn.setDoOutput(true);
                try(OutputStream os = conn.getOutputStream()) {
                    byte[] input = "".getBytes("utf-8");
                    os.write(input, 0, input.length);           
                }
                
                // Get response
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

        url = "{{baseUrl}}/api/v1/authentication/login"

        headers = {
            "x-client-id": "Shared By Stylopay",
            "x-api-key": "Shared By Stylopay",
            "scope": "r:awx_action:balances_view r:awx_action:settings.account_details_view r:awx_action:global_accounts_view"
        }

        response = requests.post(url, headers=headers, data='')
        print(response.json())
        ```
      </TabItem>
      <TabItem value="php" label="php">
        ```php
        <?php
        $url = '{{baseUrl}}/api/v1/authentication/login';

        $headers = array(
            'x-client-id: Shared By Stylopay',
            'x-api-key: Shared By Stylopay',
            'scope: r:awx_action:balances_view r:awx_action:settings.account_details_view r:awx_action:global_accounts_view'
        );

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, '');
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
        using System.Text;

        class Program
        {
            static void Main()
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create("{{baseUrl}}/api/v1/authentication/login");
                request.Method = "POST";
                
                // Set headers
                request.Headers["x-client-id"] = "Shared By Stylopay";
                request.Headers["x-api-key"] = "Shared By Stylopay";
                request.Headers["scope"] = "r:awx_action:balances_view r:awx_action:settings.account_details_view r:awx_action:global_accounts_view";
                
                // Send empty POST data
                request.ContentLength = 0;
                
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
          "expires_at": "2025-04-25T07:27:04+0000",
          "token": "eyJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoiY2xpZW50IiwiZGMiOiJISyIsImRhdGFfY2VudGVyX3JlZ2lvbiI6IkhLIiwiaXNzZGMiOiJVUyIsImp0aSI6ImMxMTNkMTExLWNmYzgtNDM2NS1hYzY1LWJkNjFhYTg2ZDRhMCIsInN1YiI6ImE1MzI1YzU2LWZhOTAtNDFkMy04YmFmLTQ5NDllYjVlNzc2MCIsImlhdCI6MTc0NTU2NDIyNCwiZXhwIjoxNzQ1NTY2MDI0LCJhY2NvdW50X2lkIjoiNzViMjBjNzgtMjJmYy00ZTAwLWFlOGYtNmEwNTc3MDlhZmFjIiwiYXBpX3ZlcnNpb24iOiIyMDI1LTAyLTE0IiwicGVybWlzc2lvbnMiOlsicjphd3g6KjoqIiwidzphd3g6KjoqIl19.p0jS8JVg-svRtQZ5Hw-CWmJiDriXBnyoVUgWZLAHYAA"
        }
        ```
      </TabItem>
    </Tabs>
  </div> 
</div>
