export default async (request, context) => {
  const allowedIps = ["200.201.185.202"]; // coloque aqui o SEU IP público
  const ip = request.headers.get("x-nf-client-connection-ip") || request.ip;

  if (!allowedIps.includes(ip)) {
    return new Response("Acesso não autorizado", { status: 403 });
  }

  return context.next();
};
