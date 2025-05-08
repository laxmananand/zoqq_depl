---
id: getting-started
title: Getting Started
hide_table_of_contents: true
# sidebar_position: 1
---

# 🚀 Getting Started with Zoqq API

Welcome to **Zoqq** — your all-in-one platform for digital payments, wallet services, and seamless API integrations.

This guide walks you through the essential steps to integrate Zoqq APIs quickly and confidently.

---

## ✅ Step 1: Create a Zoqq Account

- Go to [https://zoqq.com](https://zoqq.com)
- Sign up and log in to access your **Developer Dashboard**

---

##  Step 2: Retrieve Your API Keys

1. Navigate to **Developer Settings → API Keys**
2. Copy your:
   - `x-api-key`
   - `x-program-id`
   - `x-user-id`
3. Secure your keys — never expose them in frontend code

---

## ⚙️ Step 3: Make Your First API Call

Use the following sample to make your first authenticated API request:

```bash
curl -X GET https://api.zoqq.com/zoqq/api/v1/accounts \
  -H "x-api-key: YOUR_API_KEY" \
  -H "x-program-id: YOUR_PROGRAM_ID" \
  -H "x-user-id: YOUR_USER_ID" \
  -H "x-request-id: UNIQUE_REQUEST_ID" \
  -H "Authorization: Bearer YOUR_SECRET_KEY"
🧠 Tip: Use a unique x-request-id for each request to ensure idempotency.
```

## 🧪 Step 4: Use the Sandbox Environment

Zoqq provides a sandbox for safe and isolated testing.

Base URL: https://api.sandbox.stylopay.com

Use sandbox-specific API keys from your dashboard

No real transactions are processed


<h2>🚀 Getting Started with Accounts API</h2>

<pre>
  <code className="language-bash">{`# sample shell command`}</code>
</pre>

## 📎 Next Steps

- 👉 [Create an Account](api-reference/accounts.md#create-account)
- 👉 [Get Account Balance](api-reference/accounts.md#get-balance)
- 👉 [Create a Beneficiary](api-reference/payout.md#create-beneficiary)
- 👉 [Full API Reference](api-reference/authentication.md)

Need help? Contact our developer support at support@zoqq.com
