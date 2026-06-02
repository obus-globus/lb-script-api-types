import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class ObjectSerializer<T extends Object | number | string | boolean> extends Object implements KSerializer<T> {
    constructor(serialName: string, objectInstance: T)
    constructor(serialName: string, objectInstance: T, classAnnotations: Annotation[])
    // private _annotations: Annotation[];
    readonly descriptor: SerialDescriptor;
    // private objectInstance: T;
    deserialize(decoder: Decoder): T;
    serialize(encoder: Encoder, value: T): void;
}