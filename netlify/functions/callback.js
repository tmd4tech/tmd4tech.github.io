export async function handler(event) {
  const code = new URLSearchParams(event.rawQuery || event.queryStringParameters ? event.rawQuery : "").get("code")
    || (event.queryStringParameters && event.queryStringParameters.code);

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      code,
    }),
  });
  const data = await tokenRes.json();
  const token = data.access_token;

  const content = `
<!DOCTYPE html><html><body><script>
(function(){
  function send(){
    window.opener.postMessage(
      'authorization:github:success:${JSON.stringify({ token })}',
      '*'
    );
  }
  window.addEventListener('message', send, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script><p>Logging you in…</p></body></html>`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: content,
  };
}
