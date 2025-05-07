const sidebars = {
  guide: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Global Account",
          items: [
            {
              type: "doc",
              id: "getting-started",
              label: "Overview",
            },
            {
              type: "link",
              href: "getting-started#accounts",
              label: "Account",
            },
            {
              type: "link",
              href: "/docs/getting-docs/account",
              label: "Supported Regions & Currencies",
            },
          ],
        },
        {
          type: "link",
          href: "/docs/getting-docs/onboarding",
          label: "Onboarding",
        },
        {
          type: "link",
          href: "/docs/getting-docs/payment",
          label: "payment",
        },
        {
          type: "link",
          href: "/docs/getting-docs/foreign",
          label: "Foreign Exchange",
        },
        {
          type: "link",
          href: "/docs/getting-docs/payout",
          label: "Payout",
        },
      ],
    },
  ],
  accounts: [
    {
      type: "category",
      label: "Global Accounts",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "getting-docs/account",
          label: "Supported Regions & Currencies",
        },
        {
          type: "link",
          href: "/docs/getting-docs/account#global-accounts-coverage",
          label: "Global Accounts Coverage",
        },
        {
          type: "link",
          href: "/docs/getting-docs/account#notes",
          label: "Notes",
        },
      ],
    },
  ],
  apiReference: [
    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            {
              type: "doc",
              id: "api-reference/authentication",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/authentication#authentication-login",
              label: "🟡 POST Authentication Login",
            },
          ],
        },
        {
          type: "category",
          label: "Onboarding",
          items: [
            {
              type: "doc",
              id: "api-reference/onboarding",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/onboarding#create-user",
              label: "🟡 POST Create User",
            },
            {
              type: "link",
              href: "/docs/api-reference/onboarding#get-user",
              label: "🟢 GET Get User",
            },
            {
              type: "link",
              href: "/docs/api-reference/onboarding#accept-terms-and-conditions",
              label: "🟢 GET Accept Terms & Conditions",
            },
            {
              type: "link",
              href: "/docs/api-reference/onboarding#account-activation",
              label: "🟢 GET Account Activation",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          items: [
            {
              type: "doc",
              id: "api-reference/accounts",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#create-account",
              label: "🟡 POST Create Account",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#get-account",
              label: "🟢 GET Get Account",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#get-balance",
              label: "🟢 GET Get Balance",
            },
            {
              type: "link",
              href: "/docs/api-reference/accounts#get-account-transactions",
              label: "🟢 GET Get Account Transactions",
            },
          ],
        },
        {
          type: "category",
          label: "Cards",
          items: [
            {
              type: "doc",
              id: "api-reference/cards",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#create-cardholder",
              label: "🟡 POST Create Cardholder",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#create-card",
              label: "🟡 POST Create Card",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-all-cards",
              label: "🟢 GET Get All Cards",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#activate-card",
              label: "🟡 POST Activate Card",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#update-card",
              label: "🟣 PATCH Update Card",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#update-card-holder",
              label: "🟣 PATCH Update Card Holder",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-card-limit",
              label: "🟢 GET Get Card Limit",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-card-transactions",
              label: "🟢 GET Get Card Transactions",
            },
            {
              type: "link",
              href: "/docs/api-reference/cards#get-card-details",
              label: "🟢 GET Get Card Details",
            },
          ],
        },
        {
          type: "category",
          label: "Foreign Exchange",
          items: [
            {
              type: "doc",
              id: "api-reference/foreignExchange",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#generate-quote",
              label: "🟢 GET Generate Quote ",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#fetch-quote-details",
              label: "🟢 GET Fetch Quote Details ",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#create-conversion",
              label: "🟡 POST Create Conversion",
            },
            {
              type: "link",
              href: "/docs/api-reference/foreignExchange#get-conversion",
              label: "🟢 GET Get Conversion",
            },
          ],
        },
        {
          type: "category",
          label: "Payout",
          items: [
            {
              type: "doc",
              id: "api-reference/payout",
              label: "Overview",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#get-create-beneficiary-schema",
              label: "🟢 GET Get-Create-Beneficiary-Schema",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#create-beneficiary",
              label: "🟡 POST Create Beneficiary",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#validate-create-beneficiary",
              label: "🟡 POST Validate Create Beneficiary",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#update-beneficiary",
              label: "🟣 PATCH Update Beneficiary",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#get-beneficiary-by-id",
              label: "🟢 GET Get Beneficiary by ID",
            },
            {
              type: "link",
              href: "/docs/api-reference/payout#get-beneficiary-list",
              label: "🟢 GET Get Beneficiary List",
            },
          ],
        },

        {
          type: "category",
          label: "Webhook",
          items: [
            {
              type: "doc",
              id: "api-reference/webhook",
              label: "Overview",
            },
            {
              type: "category",
              label: "Account Status",
              items: [
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#account-submitted",
                  label: "Account Submitted",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#account-active",
                  label: "Account Active",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#account-suspended",
                  label: "Account Suspended",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#account-action-required",
                  label: "Account Action Required",
                },
              ],
            },
            {
              type: "category",
              label: "Global Account",
              items: [
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#global-account-new",
                  label: "Global Account New",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#balance-collection",
                  label: "Balance Collection",
                },
              ],
            },
            {
              type: "category",
              label: "Conversion",
              items: [
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#conversion-scheduled",
                  label: "Conversion Scheduled",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#conversion-settled",
                  label: "Conversion Settled",
                },
              ],
            },
            {
              type: "category",
              label: "Deposits",
              items: [
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#deposit-settled",
                  label: "Deposit Settled",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#deposit-rejected",
                  label: "Deposit Rejected",
                },
              ],
            },
            {
              type: "category",
              label: "Transfer",
              items: [
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#payout-transfer-funding-scheduled",
                  label: "Payout Transfer Funding Scheduled",
                },
                {
                  type: "link",
                  href: "/docs/api-reference/webhook#payout-transfer-funded",
                  label: "Payout Transfer Funded",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  changelog: [
    {
      type: "category",
      label: "Changelog",
      collapsed: false,
      items: ["changelog"],
    },
  ],
};

export default sidebars;
