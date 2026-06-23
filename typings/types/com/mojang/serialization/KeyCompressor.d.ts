import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class KeyCompressor<T extends unknown> extends Object {
    constructor(arg0: DynamicOps<T>, arg1: Stream<T>)
    // private compress: { [key: string]: any };
    // private compressString: { [key: string]: any };
    // private decompress: { [key: string]: any };
    // private ops: DynamicOps<T>;
    // private size: number;
    compress(arg0: T): number;
    compress(arg0: string): number;
    decompress(arg0: number): T;
    size(): number;
}