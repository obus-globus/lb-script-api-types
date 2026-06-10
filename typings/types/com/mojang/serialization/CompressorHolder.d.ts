import type { Compressable } from '../../../com/mojang/serialization/Compressable.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { KeyCompressor } from '../../../com/mojang/serialization/KeyCompressor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CompressorHolder extends Object implements Compressable {
    constructor()
    // private compressors: Map<DynamicOps<Object>, KeyCompressor<Object>>;
    compressor<T extends Object | number | string | boolean>(arg0: DynamicOps<T>): KeyCompressor<T>;
}