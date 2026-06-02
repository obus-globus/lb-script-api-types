import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class StringEncoder extends Object {
    static encodeIsoChars(paramcharArray: CharSequence, paramcharIndex: number, parambyteArray: number[], parambyteIndex: number, paramlength: number): number;
    static encodeSingleByteChars(params: CharSequence): number[];
    static encodeString(paramcharArray: CharSequence, paramcharOffset: number, paramcharLength: number, parambyteArray: number[]): number;
    static toBytes(paramstr: string, paramcharset: Charset): number[];
    private constructor()
}