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

## 🔑 Step 2: Retrieve Your API Keys

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
    href="./receive-bank-transfers"
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
href="./direct-debits"
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
    href="./global-treasury"
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
