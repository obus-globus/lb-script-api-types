import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Struct extends Object{
    getAttributes(): Object[];
    getAttributes(arg0: { [key: string]: Class<Object> }): Object[];
    getSQLTypeName(): string;
}