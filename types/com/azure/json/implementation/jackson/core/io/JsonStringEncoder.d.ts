import type { ByteArrayBuilder } from '../../../../../../../com/azure/json/implementation/jackson/core/util/ByteArrayBuilder.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class JsonStringEncoder extends Object {
    static getInstance(): JsonStringEncoder;
    constructor()
    // private _appendByte(arg0: number, arg1: number, arg2: ByteArrayBuilder, arg3: number): number;
    // private _appendNamed(arg0: number, arg1: string[]): number;
    // private _appendNumeric(arg0: number, arg1: string[]): number;
    // private _qbuf(): string[];
    encodeAsUTF8(arg0: string): number[];
    quoteAsString(arg0: CharSequence, arg1: StringBuilder): void;
    quoteAsString(arg0: string): string[];
    quoteAsUTF8(arg0: string): number[];
}