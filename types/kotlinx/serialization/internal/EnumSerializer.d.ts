import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class EnumSerializer<T extends Enum<T>> extends Object implements KSerializer<T> {
    constructor(serialName: string, values: T[])
    constructor(serialName: string, values: T[], descriptor: SerialDescriptor)
    readonly descriptor: SerialDescriptor;
    // private overriddenDescriptor: SerialDescriptor | null;
    // private values: T[];
    // private createUnmarkedDescriptor(serialName: string): SerialDescriptor;
    deserialize(decoder: Decoder): T;
    serialize(encoder: Encoder, value: T): void;
    toString(): string;
}