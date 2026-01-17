export function printMultiplicationTable(base: number, limit: number = 10) : void {
    if(base <= 0) throw new Error(`La base enviada ${base} no es válida. Debe ser mayor a 0`);
    if(limit <= 0) throw new Error(`El límite enviado ${limit} no es válido. Debe ser mayor a 0`);
    for (let index = 1; index <= limit; index++) {
        console.log(`${base} x ${index} = ${base * index}`);
    }
}