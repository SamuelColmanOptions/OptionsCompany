export default async (request, context) => {
  const allowedIps = ["200.201.185.202"]; // coloque aqui o SEU IP público
  let ip = request.headers.get("x-nf-client-connection-ip") || request.ip || "";

  if (ip.startsWith("::ffff:")) ip = ip.slice(7);

  // 👇 aqui vai o log
  console.log("Client IP:", ip);

  if (!allowedIps.includes(ip)) {
    return new Response("Acesso não autorizado", { status: 403 });
  }

  return context.next();
};
