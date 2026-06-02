import type { Class } from '../../../java/lang/Class.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Fields extends Object {
    static copy(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyBoolean(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyByte(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyChar(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyDouble(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyFloat(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyInt(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyLong(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyObject(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static copyShort(paramarg0: Object, paramarg1: Object, paramarg2: Field): void;
    static get(paramarg0: Object, paramarg1: Field): Object | null;
    static getBoolean(paramarg0: Object, paramarg1: Field): boolean;
    static getByte(paramarg0: Object, paramarg1: Field): number;
    static getChar(paramarg0: Object, paramarg1: Field): string;
    static getDeclaredField(paramarg0: Class<Object>, paramarg1: string): Field;
    static getDeclaredFields(paramarg0: Class<Object>): (Object | null)[];
    static getDouble(paramarg0: Object, paramarg1: Field): number;
    static getFloat(paramarg0: Object, paramarg1: Field): number;
    static getInt(paramarg0: Object, paramarg1: Field): number;
    static getLong(paramarg0: Object, paramarg1: Field): number;
    static getObject(paramarg0: Object, paramarg1: Field): Object | null;
    static getShort(paramarg0: Object, paramarg1: Field): number;
    static instance(paramarg0: Object, paramarg1: Field): Object;
    static offset(paramarg0: Field): number;
    static set(paramarg0: Object, paramarg1: Field, paramarg2: Object | null): void;
    static setBoolean(paramarg0: Object, paramarg1: Field, paramarg2: boolean): void;
    static setByte(paramarg0: Object, paramarg1: Field, paramarg2: number): void;
    static setChar(paramarg0: Object, paramarg1: Field, paramarg2: string): void;
    static setDouble(paramarg0: Object, paramarg1: Field, paramarg2: number): void;
    static setFloat(paramarg0: Object, paramarg1: Field, paramarg2: number): void;
    static setInt(paramarg0: Object, paramarg1: Field, paramarg2: number): void;
    static setLong(paramarg0: Object, paramarg1: Field, paramarg2: number): void;
    static setObject(paramarg0: Object, paramarg1: Field, paramarg2: Object): void;
    static setShort(paramarg0: Object, paramarg1: Field, paramarg2: number): void;
    constructor()
}