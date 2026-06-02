import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KeyCompressor<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: DynamicOps<T>, arg1: Stream<T>)
    // private compress: Object2IntMap<T>;
    // private compressString: Object2IntMap<string>;
    // private decompress: Int2ObjectMap<T>;
    // private ops: DynamicOps<T>;
    // private size: number;
    compress(arg0: T): number;
    compress(arg0: string): number;
    decompress(arg0: number): T;
    size(): number;
}