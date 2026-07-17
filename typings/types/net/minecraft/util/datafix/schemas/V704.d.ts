import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DSL$TypeReference } from '../../../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class V704 extends Schema {
    constructor(versionKey: number, parent: Schema)
    getChoiceType(type: DSL$TypeReference, choiceName: string): Type<Object>;
    registerBlockEntities(schema: Schema): JavaMap<string, () => TypeTemplate>;
    registerTypes(schema: Schema, entityTypes: JavaMap<string, () => TypeTemplate>, blockEntityTypes: JavaMap<string, () => TypeTemplate>): void;
}