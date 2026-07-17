import type { JavaMap } from '../../JavaMap.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ResultSet } from '../../java/sql/ResultSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Array extends Object{
    free(): void;
    getArray(): Object;
    getArray(arg0: number, arg1: number): Object;
    getArray(arg0: number, arg1: number, arg2: JavaMap<string, Class<Object>>): Object;
    getArray(arg0: JavaMap<string, Class<Object>>): Object;
    getBaseType(): number;
    getBaseTypeName(): string;
    getResultSet(): ResultSet;
    getResultSet(arg0: number, arg1: number): ResultSet;
    getResultSet(arg0: number, arg1: number, arg2: JavaMap<string, Class<Object>>): ResultSet;
    getResultSet(arg0: JavaMap<string, Class<Object>>): ResultSet;
}