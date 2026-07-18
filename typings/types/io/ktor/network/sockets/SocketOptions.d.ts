import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { SocketOptions$AcceptorOptions } from '../../../../io/ktor/network/sockets/SocketOptions$AcceptorOptions.d.ts'
import type { SocketOptions$Companion } from '../../../../io/ktor/network/sockets/SocketOptions$Companion.d.ts'
import type { SocketOptions$PeerSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$PeerSocketOptions.d.ts'
import type { TypeOfService } from '../../../../io/ktor/network/sockets/TypeOfService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketOptions extends Object {
    static Companion: SocketOptions$Companion;
    protected constructor(customOptions: JavaMap<Object, Object | null>)
    // private customOptions: JavaMap<Object, Object | null>;
    // private /*not mapped: */ getCustomOptions(): JavaMap<Object, Object | null>;
    reuseAddress: boolean;
    reusePort: boolean;
    // private typeOfService: TypeOfService;
// (invalid TS: name contains '-')     /*not mapped: */ getTypeOfService-zieKYfw(): TypeOfService;
    copy(): SocketOptions;
    protected copyCommon(from: SocketOptions): void;
    peer(): SocketOptions$PeerSocketOptions;
    tcpAccept(): SocketOptions$AcceptorOptions;
}