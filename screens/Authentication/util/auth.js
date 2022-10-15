async function authenticate(mode, email, password) {
  url = "http://192.168.4.31:8080/v1/auth/signin";
  if (mode == "signInWithPassword") {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        console.log(res.json());
        return res.body.access_key;
      })
      .catch((err) => console.log(err));
  }
}

export async function createUser(email, password) {
  return await authenticate("signUp", email, password);
}

export async function login(email, password) {
  return await authenticate("signInWithPassword", email, password);
}
