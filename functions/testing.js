export function onRequest(context) {
    console.dir(context);
    return new Response(`Hello, ${context.env.NETWORK} world!!!!!!!!`);
}
