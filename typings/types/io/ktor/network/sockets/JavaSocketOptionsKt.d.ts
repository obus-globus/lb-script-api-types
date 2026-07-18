import type { SocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JavaSocketOptionsKt extends Object {
    static assignOptions(self: SelectableChannel, options: SocketOptions): void;
    static getJava7NetworkApisAvailable(): boolean;
    static nonBlocking(self: SelectableChannel): void;
}