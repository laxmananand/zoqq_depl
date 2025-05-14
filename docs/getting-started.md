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
<!-- - Sign up and log in to access your **Developer Dashboard** -->

---

##  Step 2: Retrieve Your API Keys

<!-- 1. Navigate to **Developer Settings → API Keys** -->
<!-- 2. Copy your:
   - `x-api-key`
   - `x-program-id`
   - `x-user-id` -->
- Collect and secure your keys — never expose them in frontend code. The API secret will be sent to the user's email address by us.
---

## ⚙️ Step 3: Make Your First API Call

Use the following sample to make your first authenticated API request:

```bash
curl -X POST https://api.zoqq.com/api/v1/authentication/login \
        --header 'x-request-id:UUID'\
        --header 'x-client-id: Shared by Stylopay' \
        --header 'x-api-key: Shared by Stylopay' \
        --data ''
🧠 Tip: Use a unique x-request-id for each request to ensure idempotency.
```

## 🧪 Step 4: Use the Sandbox Environment

Zoqq provides a sandbox for safe and isolated testing.

Base URL: https://api.zoqq.com

Use sandbox-specific API keys from your dashboard

No real transactions are processed


<h2>🚀 Getting Started with Onboarding API</h2>



## 📎 Next Steps
- 👉 [Create a User](api-reference/onboarding.md#create-user)
- 👉 [Create an Account](api-reference/accounts.md#create-account)
- 👉 [Get Account Balance](api-reference/accounts.md#get-balance)
- 👉 [Create a Beneficiary](api-reference/payout.md#create-beneficiary)
- 👉 [Create a Payout](api-reference/payout.md#create-payout)
- 👉 [Create a Card](api-reference/cards.md#create-card)
- 👉 [Full API Reference](api-reference/authentication.md)

Need help? Contact our developer support at support@zoqq.com
