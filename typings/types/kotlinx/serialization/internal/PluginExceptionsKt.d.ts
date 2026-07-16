import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PluginExceptionsKt extends Object {
    static throwArrayMissingFieldException(seenArray: number[], goldenMaskArray: number[], descriptor: SerialDescriptor): void;
    static throwMissingFieldException(seen: number, goldenMask: number, descriptor: SerialDescriptor): void;
}