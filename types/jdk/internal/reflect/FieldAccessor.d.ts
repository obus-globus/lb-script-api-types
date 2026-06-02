import type { Object } from '../../../java/lang/Object.d.ts'
export interface FieldAccessor extends Object{
    get(arg0: Object): Object;
    getBoolean(arg0: Object): boolean;
    getByte(arg0: Object): number;
    getChar(arg0: Object): string;
    getDouble(arg0: Object): number;
    getFloat(arg0: Object): number;
    getInt(arg0: Object): number;
    getLong(arg0: Object): number;
    getShort(arg0: Object): number;
    set(arg0: Object, arg1: Object): void;
    setBoolean(arg0: Object, arg1: boolean): void;
    setByte(arg0: Object, arg1: number): void;
    setChar(arg0: Object, arg1: string): void;
    setDouble(arg0: Object, arg1: number): void;
    setFloat(arg0: Object, arg1: number): void;
    setInt(arg0: Object, arg1: number): void;
    setLong(arg0: Object, arg1: number): void;
    setShort(arg0: Object, arg1: number): void;
}