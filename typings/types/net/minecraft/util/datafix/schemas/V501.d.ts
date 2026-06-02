import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { TypeTemplate } from '../../../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
export class V501 extends Schema {
    constructor(versionKey: number, parent: Schema)
    registerEntities(schema: Schema): { [key: string]: () => TypeTemplate };
}