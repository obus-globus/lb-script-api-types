import type { DSL$TypeReference } from '../../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { PrimitiveCodec } from '../../../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NamespacedSchema extends Schema {
    static NAMESPACED_STRING_CODEC: PrimitiveCodec<string>;
    static ensureNamespaced(paraminput: string): string;
    static namespacedString(): Type<string>;
    constructor(versionKey: number, parent: Schema)
    getChoiceType(type: DSL$TypeReference, choiceName: string): Type<Object>;
}