import type { ValueConverter } from '../../../../io/netty/handler/codec/ValueConverter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnsupportedValueConverter<V extends Object | number | string | boolean> extends Object implements ValueConverter<V> {
    static instance(): UnsupportedValueConverter<Object>;
    private constructor()
    convertBoolean(arg0: boolean): V;
    convertByte(arg0: number): V;
    convertChar(arg0: string): V;
    convertDouble(arg0: number): V;
    convertFloat(arg0: number): V;
    convertInt(arg0: number): V;
    convertLong(arg0: number): V;
    convertObject(arg0: Object): V;
    convertShort(arg0: number): V;
    convertTimeMillis(arg0: number): V;
    convertToBoolean(arg0: V): boolean;
    convertToByte(arg0: V): number;
    convertToChar(arg0: V): string;
    convertToDouble(arg0: V): number;
    convertToFloat(arg0: V): number;
    convertToInt(arg0: V): number;
    convertToLong(arg0: V): number;
    convertToShort(arg0: V): number;
    convertToTimeMillis(arg0: V): number;
}