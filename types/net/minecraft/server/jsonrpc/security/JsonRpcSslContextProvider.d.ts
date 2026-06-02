import type { SslContext } from '../../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonRpcSslContextProvider extends Object {
    static createFrom(paramkeystorePath: string, paramkeystorePasswordFromServerProperties: string): SslContext;
    static printInstructions(): void;
    constructor()
}