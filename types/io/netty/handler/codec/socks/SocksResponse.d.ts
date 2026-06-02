import type { SocksMessage } from '../../../../../io/netty/handler/codec/socks/SocksMessage.d.ts'
import type { SocksResponseType } from '../../../../../io/netty/handler/codec/socks/SocksResponseType.d.ts'
export abstract class SocksResponse extends SocksMessage {
    constructor(arg0: SocksResponseType)
    // private responseType: SocksResponseType;
    responseType(): SocksResponseType;
}