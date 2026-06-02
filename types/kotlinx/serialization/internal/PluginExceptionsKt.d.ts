import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PluginExceptionsKt extends Object {
    static throwArrayMissingFieldException(paramarg0: number[], paramarg1: number[], paramarg2: SerialDescriptor): void;
    static throwMissingFieldException(paramarg0: number, paramarg1: number, paramarg2: SerialDescriptor): void;
}