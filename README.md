# Firebase Transaction Concurrency Bug

This repository demonstrates a race condition that can occur when using Firebase Firestore transactions with multiple concurrent updates. The bug showcases how inconsistent results can arise if multiple clients simultaneously attempt to modify the same document's field.

## Problem
When using transactions, a client reads data, performs some calculations and updates the data. If multiple clients execute this concurrently, a race condition can occur. For example, two clients trying to increment a counter will likely result in the counter incrementing only once. 

## Solution
The solution involves adding optimistic concurrency control. Instead of directly incrementing the count, the server side will handle the update using a conditional update. This will ensure atomicity. 