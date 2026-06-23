import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { KeyCompressor } from '../../../com/mojang/serialization/KeyCompressor.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Compressable extends Keyable, Object{
    compressor<T extends unknown>(arg0: DynamicOps<T>): KeyCompressor<T>;
}