import type { EmbeddedChannel } from '../../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpContentEncoder$Result extends Object {
    constructor(arg0: string, arg1: EmbeddedChannel)
    // private contentEncoder: EmbeddedChannel;
    // private targetContentEncoding: string;
    contentEncoder(): EmbeddedChannel;
    targetContentEncoding(): string;
}