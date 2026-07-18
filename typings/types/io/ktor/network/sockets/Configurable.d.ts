import type { SocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Configurable<T extends Configurable<T, Options>, Options extends SocketOptions> extends Object {
    options: Options;
    configure(block: (param0: Options) => void): T;
}