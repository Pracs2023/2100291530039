
const express = require('express');
const axios = require('axios');
const even = require('even')

const app = express();
const PORT = 9876;
const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIzNTE2LCJpYXQiOjE3MTcyMjMyMTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY3ZTRhMTE3LTQxOWYtNDE1NC1hNDlkLWFjMTNiMWQ1MjAzMCIsInN1YiI6InByYWNzMjAyM0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJBZmZvcmRNZWQiLCJjbGllbnRJRCI6ImY3ZTRhMTE3LTQxOWYtNDE1NC1hNDlkLWFjMTNiMWQ1MjAzMCIsImNsaWVudFNlY3JldCI6ImJjTW56SlBqb1lIZHpyVEYiLCJvd25lck5hbWUiOiJQcmFjaGkgR3VwdGEiLCJvd25lckVtYWlsIjoicHJhY3MyMDIzQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxMDAyOTE1MzAwMzkifQ.fLEPvIJMhXKvIY2qu7L5dY__ytjOeQUcX0x7ZcPTu_k"

const WINDOW_SIZE = 10;
const NUMBERS = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibo',
    'e': 'http://20.244.56.144/test/even',
    'r': 'http://20.244.56.144/test/rand'
};

app.get('/number/:numberid',async(req,res)=>{
  const id = req.params.numberid


})

app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});