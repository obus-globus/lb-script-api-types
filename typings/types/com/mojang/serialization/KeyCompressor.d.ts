import type { JavaMap } from '../../../JavaMap.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KeyCompressor<T extends unknown> extends Object {
    constructor(arg0: DynamicOps<T>, arg1: Stream<T>)
    // private compress: JavaMap<any, any>;
    // private compressString: JavaMap<any, any>;
    // private decompress: JavaMap<any, any>;
    // private ops: DynamicOps<T>;
    // private size: number;
    compress(arg0: T): number;
    compress(arg0: string): number;
    decompress(arg0: number): T;
    size(): number;
}