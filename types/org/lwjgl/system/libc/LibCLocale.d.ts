import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class LibCLocale extends Object {
    static LC_ALL: number;
    static LC_COLLATE: number;
    static LC_CTYPE: number;
    static LC_MONETARY: number;
    static LC_NUMERIC: number;
    static LC_TIME: number;
    static nsetlocale(paramarg0: number, paramarg1: number): number;
    static setlocale(paramarg0: number, paramarg1: CharSequence): string;
    static setlocale(paramarg0: number, paramarg1: ByteBuffer): string;
    constructor()
}