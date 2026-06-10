import type { Object } from '../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { ChannelSegment } from '../../../kotlinx/coroutines/channels/ChannelSegment.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class BufferedChannelKt extends Object {
    static BUFFERED: Symbol;
    static SEGMENT_SIZE: number;
    static createSegmentFunction(): KFunction<ChannelSegment<Object>>;
    static getCHANNEL_CLOSED(): Symbol;
}