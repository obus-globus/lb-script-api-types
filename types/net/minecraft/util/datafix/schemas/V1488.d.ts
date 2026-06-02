import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { PrimitiveCodec } from '../../../../../com/mojang/serialization/codecs/PrimitiveCodec.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { NamespacedSchema } from '../../../../../net/minecraft/util/datafix/schemas/NamespacedSchema.d.ts'
export class V1488 extends NamespacedSchema {
    static NAMESPACED_STRING_CODEC: PrimitiveCodec<string>;
    static ensureNamespaced(paraminput: string): string;
    static namespacedString(): Type<string>;
    constructor(versionKey: number, parent: Schema)
    registerBlockEntities(schema: Schema): { [key: string]: () => TypeTemplate };
}