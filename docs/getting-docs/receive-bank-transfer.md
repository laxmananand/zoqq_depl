---
sidebar_position: 1
hide_table_of_contents: true
---

# Receive Bank Transfers to Global Accounts

Global Accounts enable you to receive bank transfers via local payment methods and/or SWIFT from you, your customers, other parties, and various platforms such as Amazon and Google.

## Receive Deposits

As a first step, you must have your Global Account details ready. See [Get started] for how to create a Global Account and retrieve account details.

To collect funds from your own bank account or from third parties, simply initiate bank transfers into your Global Account using the retrieved bank account details.

Review status codes to track status transitions when deposits are credited into your Wallet.

## Simulate Deposits

zoqq provides a simulation API, [Create a global account deposit], to create a production-like deposit into your Global Accounts in the demo environment. The status of deposit can be:

- `SETTLED`
- `PENDING`
- `REJECTED`

See [Simulate deposits to your Global Account] for more information.

## Retrieve Deposits

You can retrieve transaction details for deposits made to your Wallet via bank transfers. For more information, see [Retrieve your deposits].
