import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { Configurable } from '../../../../io/ktor/network/sockets/Configurable.d.ts'
import type { SocketBuilder } from '../../../../io/ktor/network/sockets/SocketBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BuildersKt extends Object {
    static aSocket(selector: SelectorManager): SocketBuilder;
    static tcpNoDelay<T extends Configurable<T, any>>(self: T): T;
}