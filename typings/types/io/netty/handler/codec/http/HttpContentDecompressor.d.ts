import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { HttpContentDecoder } from '../../../../../io/netty/handler/codec/http/HttpContentDecoder.d.ts'
export class HttpContentDecompressor extends HttpContentDecoder {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: number)
    // private maxAllocation: number;
    // private strict: boolean;
    newContentDecoder(arg0: string): EmbeddedChannel;
}