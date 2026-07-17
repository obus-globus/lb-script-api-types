import type { JavaMap } from '../../JavaMap.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Struct extends Object{
    getAttributes(): Object[];
    getAttributes(arg0: JavaMap<string, Class<Object>>): Object[];
    getSQLTypeName(): string;
}