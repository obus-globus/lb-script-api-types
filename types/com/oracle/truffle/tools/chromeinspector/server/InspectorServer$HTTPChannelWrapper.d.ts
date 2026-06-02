import type { InspectorServer$HttpRequest } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$HttpRequest.d.ts'
import type { InspectorServer$HttpResponse } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$HttpResponse.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { SocketChannel } from '../../../../../../java/nio/channels/SocketChannel.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$HTTPChannelWrapper extends Object implements ByteChannel {
    constructor(channel: SocketChannel, interceptors: (param0: InspectorServer$HttpRequest) => InspectorServer$HttpResponse[])
    // private buffer: ByteBuffer;
    // private channel: SocketChannel;
    // private interceptors: (param0: InspectorServer$HttpRequest) => InspectorServer$HttpResponse[];
    // private wsUpgraded: boolean;
    close(): void;
    isOpen(): boolean;
    read(dst: ByteBuffer): number;
    // private readHttpRequest(): InspectorServer$HttpRequest;
    write(src: ByteBuffer): number;
    // private writeHttpResponse(request: InspectorServer$HttpRequest): void;
}