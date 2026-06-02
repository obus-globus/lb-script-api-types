import type { SocksMessage } from '../../../../../io/netty/handler/codec/socks/SocksMessage.d.ts'
import type { SocksRequestType } from '../../../../../io/netty/handler/codec/socks/SocksRequestType.d.ts'
export abstract class SocksRequest extends SocksMessage {
    constructor(arg0: SocksRequestType)
    // private requestType: SocksRequestType;
    requestType(): SocksRequestType;
}