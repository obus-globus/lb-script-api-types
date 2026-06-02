import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PluginGeneratedSerialDescriptorKt extends Object {
    static equalsImpl(paramarg0: Object | null, paramarg1: Object, paramarg2: Function1<Object, boolean>): boolean;
    static hashCodeImpl(paramarg0: SerialDescriptor, paramarg1: (Object | null)[]): number;
    static toStringImpl(paramarg0: SerialDescriptor): string;
}