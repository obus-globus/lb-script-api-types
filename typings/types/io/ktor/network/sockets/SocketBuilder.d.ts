import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { Configurable } from '../../../../io/ktor/network/sockets/Configurable.d.ts'
import type { SocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions.d.ts'
import type { TcpSocketBuilder } from '../../../../io/ktor/network/sockets/TcpSocketBuilder.d.ts'
import type { UDPSocketBuilder } from '../../../../io/ktor/network/sockets/UDPSocketBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SocketBuilder extends Object implements Configurable<SocketBuilder, SocketOptions> {
    constructor(selector: SelectorManager, options: SocketOptions)
    options: SocketOptions;
    // private selector: SelectorManager;
    configure(block: (param0: SocketOptions) => void): SocketBuilder;
    tcp(): TcpSocketBuilder;
    udp(): UDPSocketBuilder;
}