export async function createUser(email, password) {
    await authenticate('signUp', email, password);
  }
  
export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}