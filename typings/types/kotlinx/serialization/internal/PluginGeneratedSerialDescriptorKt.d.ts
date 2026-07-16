import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class PluginGeneratedSerialDescriptorKt extends Object {
    static equalsImpl<SD extends SerialDescriptor>(self: SD, other: Object | null, typeParamsAreEqual: (param0: SD) => boolean): boolean;
    static hashCodeImpl(self: SerialDescriptor, typeParams: SerialDescriptor[]): number;
    static toStringImpl(self: SerialDescriptor): string;
}