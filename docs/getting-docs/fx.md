---
id: foreign
title: Foreign
hide_table_of_contents: true
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




# Transactional FX

Access interbank FX rates and programmatically manage currency risk.

## Choose an FX solution that best fits your needs

Use one or more products to build a unique solution for your use case. Learn more on [Choose your FX solution](link-to-fx-solution).

## Key Features

### Create a conversion

Get the best possible market rate at the point of conversion or a guaranteed rate with a validity period

### Cancel a conversion

Change of mind? Cancel your booked conversion before settlement

## Our FX network

Explore our supported regions and currencies.

### Multi-currency support

Transact in nearly 1000+ currency pairs across 60+ trade currencies

## Explore related products

Integrate your FX solution with zoqq products to strengthen your global financial infrastructure.

### Embedded Finance Use Cases

#### Banking as a Service

Offer a full-featured fintech solution including accounts and card issuing

#### Global Treasury

Enable your platform to collect and disburse funds globally

### Platform APIs

## Payouts

Programmatically make cost-effective, fast and secure global payouts






### How Transactional FX Works

zoqq’s Transactional Foreign Exchange (FX) capabilities provide a wide-ranging set of solutions to allow your business to access FX prices and transaction services that best meet your unique needs.

Each business is unique, and the challenges of converting one currency to another will also vary from business to business. zoqq's FX solution to these challenges is to offer great flexibility in how you obtain prices from us, how you execute transactions with us, and how you can manage any inherent FX risk your business is exposed to.

## Key Features

- **Highly available FX pricing and conversion services** — 24 hours a day, 365 days a year  
- **Highly competitive pricing** — we work hard to offer the best available pricing to all our customers  
- **Access to a wide range of currencies** — including currencies that are traditionally hard to deal in  
- **Choice of FX products, Rates, and Quotes** — available via zoqq API  
- **Quick and easy integration** — regardless of your product choice (Rates or Quotes), you can be up and transacting quickly upon successful account registration  
- **Seamless integration** — with the wider zoqq range of features


### Supported Regions and Currencies

zoqq currently has the capability to transact in nearly **1,000 currency pairs across 64 currencies** — a capability that is constantly improving. Some of the pairs are freely traded, meaning we are able to price and execute on both sides of the trade, whereas pairs that contain a currency with additional constraints are considered **exotic currency pairs**.

You can use the **supported currencies** endpoint to get a list of currencies you can buy or sell.

Buy and sell amounts are rounded to the nearest unit based on a currency's decimals as defined by **ISO 4217**.

## Current List of Supported Currencies

| Currency Code | Country              | Buy | Sell                              | Pure Conversion (Hold in Wallet) | Convert + Payout |
|---------------|-----------------------|-----|------------------------------------|----------------------------------|------------------|
| AUD           | Australia             | ✔   | ✔                                  | ✔                                | ✔                |
| CNY           | China                 | ✔   | ✔                                  | ✔                                | ✔                |
| USD           | United States         | ✔   | ✔                                  | ✔                                | ✔                |
| HKD           | Hong Kong             | ✔   | ✔                                  | ✔                                | ✔                |
| EUR           | Eurozone              | ✔   | ✔                                  | ✔                                | ✔                |
| GBP           | United Kingdom        | ✔   | ✔                                  | ✔                                | ✔                |
| CAD           | Canada                | ✔   | ✔                                  | ✔                                | ✔                |
| SGD           | Singapore             | ✔   | ✔                                  | ✔                                | ✔                |
| CHF           | Switzerland           | ✔   | ✔                                  | ✔                                | ✔                |
| NZD           | New Zealand           | ✔   | ✔                                  | ✔                                | ✔                |
| JPY           | Japan                 | ✔   | ✔                                  | ✔                                | ✔                |
| THB           | Thailand              | ✔   | ✔                                  | ✔                                | ✔                |
| SEK           | Sweden                | ✔   | ✔                                  | ✔                                | ✔                |
| NOK           | Norway                | ✔   | ✔                                  | ✔                                | ✔                |
| DKK           | Denmark               | ✔   | ✔                                  | ✔                                | ✔                |
| HUF           | Hungary               | ✔   | ✔                                  | ✔                                | ✔                |
| CZK           | Czech Republic        | ✔   | ✔                                  | ✔                                | ✔                |
| PLN           | Poland                | ✔   | ✔                                  | ✔                                | ✔                |
| RON           | Romania               | ✔   | ✔                                  | ✔                                | ✔                |
| IDR           | Indonesia             | ✔   | ✔* (CN & HK customers only)        |                                  | ✔                |
| MYR           | Malaysia              | ✔   | ✔* (MY customers only)             |                                  | ✔                |
| PHP           | Philippines           | ✔   |                                    |                                  | ✔                |
| TRY           | Turkey                | ✔   |                                    |                                  | ✔                |
| INR           | India                 | ✔   |                                    |                                  | ✔                |
| VND           | Vietnam               | ✔   |                                    |                                  | ✔                |
| KRW           | Korea, Republic of    | ✔   | ✔                                  | ✔                                | ✔                |
| BDT           | Bangladesh            | ✔   |                                    |                                  | ✔                |
| LKR           | Sri Lanka             | ✔   |                                    |                                  | ✔                |
| NPR           | Nepal                 | ✔   |                                    |                                  | ✔                |
| PKR           | Pakistan              | ✔   |                                    |                                  | ✔                |
| MXN           | Mexico                | ✔   | ✔                                  | ✔                                | ✔                |
| ILS           | Israel                | ✔   | ✔                                  | ✔                                | ✔                |
| ZAR           | South Africa          | ✔   | ✔                                  | ✔                                | ✔                |
| BHD           | Bahrain               | ✔* (CN & HK customers only) |       |                                  | ✔                |
| EGP           | Egypt                 | ✔   |                                    |                                  | ✔                |
| AED           | United Arab Emirates  | ✔   | ✔*                                 | ✔* (Excluding customers in UAE)  | ✔                |
| SAR           | Saudi Arabia          | ✔   |                                    |                                  | ✔                |
| MAD           | Morocco               | ✔   |                                    |                                  | ✔                |
| CLP           | Chile                 | ✔   |                                    |                                  | ✔                |
| ARS           | Argentina             | ✔   |                                    |                                  | ✔                |
| BRL           | Brazil                | ✔   |                                    |                                  | ✔                |
| COP           | Colombia              | ✔   |                                    |                                  | ✔                |
| BOB           | Bolivia               | ✔   |                                    |                                  | ✔                |
| PEN           | Peru                  | ✔   |                                    |                                  | ✔                |
| UYU           | Uruguay               | ✔   |                                    |                                  | ✔                |
| AOA           | Angola                | ✔   |                                    |                                  | ✔                |
| BGN           | Bulgaria              | ✔   |                                    |                                  | ✔                |
| LSL           | Lesotho               | ✔   |                                    |                                  | ✔                |
| MGA           | Madagascar            | ✔   |                                    |                                  | ✔                |
| MWK           | Malawi                | ✔   |                                    |                                  | ✔                |
| NAD           | Namibia               | ✔   |                                    |                                  | ✔                |
| NGN           | Nigeria               | ✔   |                                    |                                  | ✔                |
| RWF           | Rwanda                | ✔   |                                    |                                  | ✔                |
| XOF           | West Africa           | ✔   |                                    |                                  | ✔                |
| BWP           | Botswana              | ✔   |                                    |                                  | ✔                |
| GMD           | Gambia                | ✔   |                                    |                                  | ✔                |
| KES           | Kenya                 | ✔   |                                    |                                  | ✔                |
| PYG           | Paraguay              | ✔   |                                    |                                  | ✔                |
| ZMW           | Zambia                | ✔   |                                    |                                  | ✔                |
| XAF           | Equatorial Guinea     | ✔   |                                    |                                  |                  |




### Funding and Settlement Models

Depending on the jurisdiction in which you operate, and the types of accounts you have with us, your zoqq account will be assigned to either a **pre-funding** or a **post-funding** workflow.

Your funding mode will dictate the timing of when you fund zoqq and when zoqq will settle your conversions. If you are unsure of which funding mode you have been assigned, please contact your customer support representative, who would be happy to assist.

## Pre-funding Workflow

Prior to booking any conversion or payout, clients assigned to pre-funding mode must first top-up their zoqq Wallet. The funds required for a conversion or payout are deducted from the relevant wallet balance and cannot exceed your available funds in the currency you are converting or paying out from.

## Post-funding Workflow

Clients assigned to post-funding mode are permitted to book conversions and payouts without sufficient funds available in their wallet. These accounts will have a limit assigned to them, which will be the upper limit of unfunded transactions you can have open with zoqq at any one time.

For same-day conversions, we will fallback to your available balance in the sell currency if you have insufficient open position limit for the conversion.

## Settlement Timing

When booking a conversion or payout with zoqq, you will have the option to select the desired date for each transaction to settle. This “conversion date”, along with your funding mode, will determine when funds will be settled to and from your wallet.

If you do not select a date, you will be assigned a **default date**:

- For **pre-funding mode**: the default date will always be **same-day**, for immediate settlement.
- For **post-funding mode**: 
  - If funds are **sufficient**, the conversion date will default to **same-day**.
  - If funds are **insufficient**, the default date will be the **next valid business day**, accounting for any holidays in the funding currency.

### Value Date Table

| Value Date   | Sell Currency (Pre-funding) | Buy Currency (Pre-funding) | Sell Currency (Post-funding) | Buy Currency (Post-funding) |
|--------------|------------------------------|------------------------------|-------------------------------|------------------------------|
| Same-day     | Immediately deducted         | Immediately funded           | Immediately deducted          | Immediately funded           |
| Future-dated | Immediately deducted         | Funded at 9am on conversion date | Deducted at 9am on conversion date | Funded upon deduction         |

For clients in post-funding mode, if the wallet balance is insufficient on the conversion date, the zoqq team will notify clients regarding the overdue balance. This may incur a **fee** to cover the cost of processing the overdue transaction.

We will settle conversions on a **first-in, first-out** basis based on:
1. The earliest `conversion_date` with sufficient balance
2. Then the earliest `created_at`

We will retry settlement every **30 minutes** as a batch.

## Time Zones by zoqq Location

The zoqq location that you are onboarded with will determine your account time zone. We use the **IANA Time Zone Database (TZDB)**. Each zoqq location is assigned the following time zones:

| AWX Entity | Time Zone           | UTC (STD/DST) |
|------------|---------------------|---------------|
| AWX NZ     | Pacific/Auckland    | UTC +12/+13   |
| AWX AU     | Australia/Melbourne | UTC +10/+11   |
| AWX HK     | Asia/Hong Kong      | UTC +8        |
| AWX SG     | Asia/Singapore      | UTC +8        |
| AWX MY     | Asia/Kuala Lumpur   | UTC +8        |
| AWX NL     | Europe/Amsterdam    | UTC +1/+2     |
| AWX LT     | Europe/Vilnius      | UTC +2/+3     |
| AWX UK     | Europe/London       | UTC +0/+1     |
| AWX JP     | Asia/Tokyo          | UTC +9        |
| AWX CA     | America/Toronto     | UTC -5/-4     |
| AWX US     | America/Los Angeles | UTC -8/-7     |

