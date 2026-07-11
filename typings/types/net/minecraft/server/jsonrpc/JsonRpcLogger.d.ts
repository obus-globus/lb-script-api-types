import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class JsonRpcLogger extends Object {
    constructor()
    log(clientInfo: ClientInfo, message: string, ...args: Object[]): void;
}