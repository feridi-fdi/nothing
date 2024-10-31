/* Instruksi
Buat fungsi aggregateUserItems(transactions).
Optimalkan kode yang ada, hindari penggunaan loop yang tidak perlu.
Fokuskan pada efisiensi logika dan kejelasan kode.
Lakukan Pemeriksaan Linter

Output :
[
    { user_id: 101, items: [{ id: 'A1', qty: 2 }, { id: 'B1', qty: 7 }, { id: 'D1', qty: 1 }] },
    { user_id: 102, items: [{ id: 'A1', qty: 1 }, { id: 'C1', qty: 5 }] },
    { user_id: 103, items: [{ id: 'A1', qty: 3 }, { id: 'B1', qty: 2 }] },
];
*/

// Diberikan sebuah array transactions yang berisi data transaksi dari beberapa user dengan format sebagai berikut:
const transactions = [
  { transaction_id: 1, user_id: 101, items: [{ id: 'A1', qty: 2 }, { id: 'B1', qty: 3 }] },
   { transaction_id: 2, user_id: 102, items:  [{ id: 'A1', qty: 1 }, { id: 'C1', qty: 5 }] },
   { transaction_id: 3, user_id: 101, items: [{ id: 'B1', qty: 4 }, { id: 'D1', qty: 1 }] },
  {  transaction_id: 4, user_id: 103, items: [{ id: 'A1', qty: 3 }, { id: 'B1', qty: 2 }] },
];
