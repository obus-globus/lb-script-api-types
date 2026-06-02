import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
export class V99 extends Schema {
    static ITEM_TO_ENTITY: { [key: string]: string };
    static itemStackTag(paramschema: Schema): TypeTemplate;
    static sign(paramschema: Schema): TypeTemplate;
    constructor(versionKey: number, parent: Schema)
    registerBlockEntities(schema: Schema): { [key: string]: () => TypeTemplate };
    registerEntities(schema: Schema): { [key: string]: () => TypeTemplate };
    registerTypes(schema: Schema, entityTypes: { [key: string]: () => TypeTemplate }, blockEntityTypes: { [key: string]: () => TypeTemplate }): void;
}