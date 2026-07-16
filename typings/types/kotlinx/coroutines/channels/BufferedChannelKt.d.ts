import type { Object } from '../../../java/lang/Object.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class BufferedChannelKt extends Object {
    static BUFFERED: Symbol;
    static SEGMENT_SIZE: number;
    static createSegmentFunction<E extends unknown>(): KFunction<Object>;
    static getCHANNEL_CLOSED(): Symbol;
}