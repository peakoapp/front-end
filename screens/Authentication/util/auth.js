async function authenticate(mode, email, password) {
  url = "http://localhost:8080/v1/auth/signin";
  if (mode == "signInWithPassword") {
    await fetch(url, {
      method: "POST",
      body: JSOM.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        console.log(res);
        return res.json.body.access_key;
      })
      .catch((err) => console.log(err));
  }
}

export async function createUser(email, password) {
  return await authenticate("signUp", email, password);
}

export async function login(email, password) {
  console.log("hi");
  return await authenticate("signInWithPassword", email, password);
}
