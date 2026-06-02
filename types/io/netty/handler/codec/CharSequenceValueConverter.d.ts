import type { ValueConverter } from '../../../../io/netty/handler/codec/ValueConverter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharSequenceValueConverter extends Object implements ValueConverter<CharSequence> {
    static INSTANCE: CharSequenceValueConverter;
    constructor()
    convertBoolean(arg0: boolean): CharSequence;
    convertByte(arg0: number): CharSequence;
    convertChar(arg0: string): CharSequence;
    convertDouble(arg0: number): CharSequence;
    convertFloat(arg0: number): CharSequence;
    convertInt(arg0: number): CharSequence;
    convertLong(arg0: number): CharSequence;
    convertObject(arg0: Object): CharSequence;
    convertShort(arg0: number): CharSequence;
    convertTimeMillis(arg0: number): CharSequence;
    convertToBoolean(arg0: CharSequence): boolean;
    convertToByte(arg0: CharSequence): number;
    convertToChar(arg0: CharSequence): string;
    convertToDouble(arg0: CharSequence): number;
    convertToFloat(arg0: CharSequence): number;
    convertToInt(arg0: CharSequence): number;
    convertToLong(arg0: CharSequence): number;
    convertToShort(arg0: CharSequence): number;
    convertToTimeMillis(arg0: CharSequence): number;
}