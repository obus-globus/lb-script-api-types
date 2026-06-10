import type { DSL$TypeReference } from '../../../com/mojang/datafixers/DSL$TypeReference.d.ts'
import type { Schema } from '../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DataFixer extends Object{
    getSchema(arg0: number): Schema;
    update<T extends Object | number | string | boolean>(arg0: DSL$TypeReference, arg1: Dynamic<T>, arg2: number, arg3: number): Dynamic<T>;
}