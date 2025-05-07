---
id: payout
title: payout
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How Zoqq Payouts Work

Zoqq Payouts enables businesses to make faster, more cost-effective payouts across the globe by connecting to local clearing systems in over 110 countries. With a single Zoqq account and/or one integration, you (and your customers) will be able to move funds globally via Zoqq's payout network, which currently supports local and SWIFT payouts in 170 countries/regions and over 60 currencies.

> Find out more about our [Payout network].

## Use Cases

Zoqq Payouts APIs allow you to create multiple transfers programmatically in seconds for different types of use cases:

- Making payouts for your own business purposes.
- Building a product experience that helps your customers make payouts.

You have full control over how you want to integrate with your internal systems (first-party use case) or customer-facing products (third-party use case) and when you want to release payouts.

To save development effort, you can also use our **Embedded Payout component** and **Embedded Beneficiary component** to collect and manage payout/beneficiary information with minimal coding.

## Getting Started

To get started, [sign up for an Zoqq account].

You can also reach out to our support team to set up a demo account to help you explore our product and test your integration.

👉 [Submit a request to our support team]  
When submitting the request:

- Select **"Transfers & Conversions"** as your issue category.
- Use **"Apply for a demo account"** as the request subject to help us expedite the process.

We will email you when your demo account is prepared.

---

### Want to dive straight into the code?

Let’s get started.

# Payout Network

Zoqq currently supports local and SWIFT payouts in **170 countries/regions** and over **60 currencies**, and continues to expand its coverage. By connecting to local clearing systems in over 110 countries and regions, Zoqq offers local payouts which are faster and more cost-effective in comparison to SWIFT.

By clicking on the country names or the subpages on the left menu, you can find country-specific guides that provide an overview of payout capabilities, specific bank detail requirements, and other key considerations. For the full request requirements of each payout scenario, see our _dynamic schema_.

> **New Feature**: Zoqq now supports **instant, in-network payouts** to other Zoqq accounts (API only).  
> Refer to **Create a transfer to an Zoqq account** to learn more.

---

## Local Payout Coverage

Below is an overview of Zoqq's local payout coverage:

Country/Region Currency Local Payout Instant Payout
APAC
Australia AUD Yes Yes
Bangladesh BDT Yes
China CNY Yes Yes
Hong Kong SAR HKD / CNY / USD Yes Yes
India INR Yes Yes
Indonesia IDR Yes Yes
Japan JPY Yes Yes
South Korea KRW Yes Yes
Malaysia MYR Yes Yes
Nepal NPR Yes
New Zealand NZD Yes
Pakistan PKR Yes
Philippines PHP Yes Yes
Singapore SGD Yes Yes
Sri Lanka LKR Yes
Thailand THB Yes Yes
Turkey TRY Yes
Viet Nam VND Yes
... ... ... ...

diff
Copy
Edit

> **Note**: This table is a partial view. For the full country list with details, please refer to the official Airwallex documentation.

### Country/Region Notes

- **Finland**: Includes Åland Islands
- **France**: Includes French Guiana, Guadeloupe, Réunion, Saint Barthélemy, and Saint Martin (French part)
- **Portugal**: Includes Azores and Madeira
- **Spain**: Includes Canary Islands
- **United Kingdom**: Includes Gibraltar, Guernsey, Isle of Man, and Jersey
- `**` Payouts to these countries may be subject to restrictions or additional compliance review.

---

## SWIFT Payout Coverage

Zoqq supports SWIFT payouts in **AUD, CAD, CHF, CNY\*, CZK, DKK, EUR, GBP, HKD, HUF, ILS, JPY, MXN\*, NOK, NZD, PLN, RON, SAR\*, SEK, SGD, THB, TRY, USD, ZAR** to **150 countries/regions**.

Example countries include:

- Albania
- Argentina
- Australia
- Bangladesh
- Brazil
- Canada
- China
- Egypt
- France
- Germany
- Hong Kong SAR
- India
- Indonesia
- Japan
- Kenya
- Mexico
- Nigeria\*\*
- United Arab Emirates
- United Kingdom
- United States
- Viet Nam
- Zambia  
  _(...and many more)_

> **Note**:  
> \* CNY: Onshore CNY supported for paying into China only  
> \* MXN: Only for payouts to Mexico  
> \* SAR: Only for payouts to Saudi Arabia  
> \*\* Payouts may be subject to restrictions or compliance review  
> \*\*\* Ukraine: Subject to restrictions or region-based sanctions

---

For full and up-to-date details, consult the [Zoqq documentation] or contact support for the
