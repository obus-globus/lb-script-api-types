import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
export class V99 extends Schema {
    static ITEM_TO_ENTITY: JavaMap<string, string>;
    static itemStackTag(paramschema: Schema): TypeTemplate;
    static sign(paramschema: Schema): TypeTemplate;
    constructor(versionKey: number, parent: Schema)
    registerBlockEntities(schema: Schema): JavaMap<string, () => TypeTemplate>;
    registerEntities(schema: Schema): JavaMap<string, () => TypeTemplate>;
    registerTypes(schema: Schema, entityTypes: JavaMap<string, () => TypeTemplate>, blockEntityTypes: JavaMap<string, () => TypeTemplate>): void;
}