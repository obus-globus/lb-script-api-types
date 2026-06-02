import type { Schema } from '../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { TypeTemplate } from '../../../com/mojang/datafixers/types/templates/TypeTemplate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DSL$TypeReference extends Object{
    in(arg0: Schema): TypeTemplate;
    typeName(): string;
}