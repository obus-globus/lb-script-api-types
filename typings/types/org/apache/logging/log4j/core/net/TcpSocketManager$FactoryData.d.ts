import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { SocketOptions } from '../../../../../../org/apache/logging/log4j/core/net/SocketOptions.d.ts'
export class TcpSocketManager$FactoryData extends Object {
    constructor(host: string, port: number, connectTimeoutMillis: number, reconnectDelayMillis: number, immediateFail: boolean, layout: Layout<Serializable>, bufferSize: number, socketOptions: SocketOptions)
    // private bufferSize: number;
    // private connectTimeoutMillis: number;
    // private host: string;
    // private immediateFail: boolean;
    // private layout: Layout<Serializable>;
    // private port: number;
    // private reconnectDelayMillis: number;
    // private socketOptions: SocketOptions;
    toString(): string;
}