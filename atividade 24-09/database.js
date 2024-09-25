import pg from 'pg';

const conexao = new pg.Client({
  connectionString: "postgres://avnadmin:AVNS_OPJhcJlqNiLV2Mjcs99@atividade-barbara-0012.d.aivencloud.com:22538/defaultdb",
ssl:{
    rejectUnauthorized : false,
    ca: "-----BEGIN CERTIFICATE-----MIIEQTCCAqmgAwIBAgIUbquA4uXy2WjyVD1VDYrUW8zvI/wwDQYJKoZIhvcNAQEMBQAwOjE4MDYGA1UEAwwvZDU1MmIzNTQtYmVmNy00OGQ1LTlmZDYtNWI0NWNmOWIzYmM3IFByb2plY3QgQ0EwHhcNMjQwOTE2MjI1OTEzWhcNMzQwOTE0MjI1OTEzWjA6MTgwNgYDVQQDDC9kNTUyYjM1NC1iZWY3LTQ4ZDUtOWZkNi01YjQ1Y2Y5YjNiYzcgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALruQDoBya7PANXibR9gzORdIKVR0/y6yckLB0yKXQiU3fWAaGpdY3f8Bb18/U6yPPEkSQcIo9SrWG1K5Mf47B5LAx324ZSY7TSMvsWR2rotm0JvCAV+YuKM4ktX627wf6Y8ypSYNcaiobxTjy/TYx74uQyir8fFL1q1TgEa0EbcdFw7f46bujf1oVwbYZJgXe70ZnKzHqh6x/dWp68AUHrIUhpmcu4HpTbQcYsq0HvTjsattL+aNGV5Uxd0Kq2b0K2CGUsdp22vXFJjo/eQbeL2wu/jfOck9EoFnpKWTFolu4SAnl8HT52xSILsan6eVbWtR03ego+M/WglsD87nb2c2rNxDMk/1QBfZndwBiqpYrwNZWmHlIZcsi/91MmQfBKfwCnDzMTx3xn1/Jci/EM4B2TtzdbRXDVJ+gEFXmisOG1ee8xEyb7k0KmnLFRwJMQelqKvNRvXEqQU1UqEeMOTx0mpi5GRBLi6ieF8Id1f3ZSGkby60sqrmGl6ORQfLQIDAQABoz8wPTAdBgNVHQ4EFgQU96LtUj1EPEEr2GeH49R0HtgHfcYwDwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAAqJk4a5mwnW3H3if6pG08YcPx59/hDbhAbkE2zDdDpqHyJIHWgsut4QNG2TRCNdAKSVDLQvoQiJpMD8qzoKWJHKfRCk5Ba/nPWQuUHCNLjBxbhNp6u+alW4AtbK5bNcP8J7055oZzc9L3WCzAspibvBoC1CP7ioUkuTnc038eEIZAPBAr1zyJY7TEIjYW8F8Dn85A1tQPIKVq57bSjVi8468XIIZOg387wl3GA3ikTOXjITfUZyUoIB0Ap8yB9yHoVBU0tjC13CqZngNBOsOqlehDT1bGt9o/nofggFeUCZWUE7gY3vOsVUf5Jr4/MehaAqvFWZ6FgGfyn4J+m/Z6DYtWz6jTMikaaSzVycaSyZfVLY1pfEpE0vRb8r2uGjo/I9evm9NNUcnCtN5463AObdUmHCiXpi+z+uFFtNxn20+GE5g4EQIqz6Lw9nBjWKASBgrp+h47HA1zLn5g824eRIcRYxBwqyATxwAVjjlCjSI+WtJ8SPX8kPYO3qOGDhYg==-----END CERTIFICATE-----"
}
});

try {
  await conexao.connect();
  console.log('Banco de dados conectado');
} catch (erro) {
  console.error('Erro ao conectar no banco de dados:', erro);
}

export default conexao;
