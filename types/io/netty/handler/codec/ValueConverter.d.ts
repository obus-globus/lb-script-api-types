import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ValueConverter<T extends Object | number | string | boolean> extends Object{
    convertBoolean(arg0: boolean): T;
    convertByte(arg0: number): T;
    convertChar(arg0: string): T;
    convertDouble(arg0: number): T;
    convertFloat(arg0: number): T;
    convertInt(arg0: number): T;
    convertLong(arg0: number): T;
    convertObject(arg0: Object): T;
    convertShort(arg0: number): T;
    convertTimeMillis(arg0: number): T;
    convertToBoolean(arg0: T): boolean;
    convertToByte(arg0: T): number;
    convertToChar(arg0: T): string;
    convertToDouble(arg0: T): number;
    convertToFloat(arg0: T): number;
    convertToInt(arg0: T): number;
    convertToLong(arg0: T): number;
    convertToShort(arg0: T): number;
    convertToTimeMillis(arg0: T): number;
}