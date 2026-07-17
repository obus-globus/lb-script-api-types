import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
export class V100 extends Schema {
    constructor(versionKey: number, parent: Schema)
    registerTypes(schema: Schema, entityTypes: JavaMap<string, () => TypeTemplate>, blockEntityTypes: JavaMap<string, () => TypeTemplate>): void;
}