# GetMonkeyTypeStats

## Overview

This is a python lambda for getting the typing stats for my website using the [monketype api](https://api.monkeytype.com/docs).

Since github pages are entirely client side, doing an api in the react app itself would have exposed my APE Key (monkeytype calls API keys APE keys. Funny)

This python lambda was implemented through the AWS lambda UI. I didn't think it was necessary to terraformize it.
