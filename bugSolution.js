The solution involves using a server-side function, or a Cloud Function, to handle the increment operation. This ensures atomicity and prevents race conditions. Here's an example using a Cloud Function:

```javascript
exports.incrementCounter = functions.https.onCall(async (data, context) => {
  const docRef = db.collection('counters').doc('myCounter');
  await docRef.update({
    count: firebase.firestore.FieldValue.increment(1)
  });
});
```
This code utilizes `FieldValue.increment(1)` which ensures atomicity.  The client would call this cloud function instead of directly using transactions.  The client sends a request to the function, and the function handles the incrementing securely without worrying about concurrent updates.  A more robust solution might use a dedicated counter collection with its own update logic. 