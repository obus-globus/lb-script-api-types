import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Ascii extends Object {
    static ACK: number;
    static BEL: number;
    static BS: number;
    static CAN: number;
    static CR: number;
    static DC1: number;
    static DC2: number;
    static DC3: number;
    static DC4: number;
    static DEL: number;
    static DLE: number;
    static EM: number;
    static ENQ: number;
    static EOT: number;
    static ESC: number;
    static ETB: number;
    static ETX: number;
    static FF: number;
    static FS: number;
    static GS: number;
    static HT: number;
    static LF: number;
    static MAX: string;
    static MIN: string;
    static NAK: number;
    static NL: number;
    static NUL: number;
    static RS: number;
    static SI: number;
    static SO: number;
    static SOH: number;
    static SP: number;
    static SPACE: number;
    static STX: number;
    static SUB: number;
    static SYN: number;
    static US: number;
    static VT: number;
    static XOFF: number;
    static XON: number;
    static equalsIgnoreCase(params1: CharSequence, params2: CharSequence): boolean;
    static isLowerCase(paramc: string): boolean;
    static isUpperCase(paramc: string): boolean;
    static toLowerCase(paramc: string): string;
    static toLowerCase(paramchars: CharSequence): string;
    static toLowerCase(paramstring: string): string;
    static toUpperCase(paramc: string): string;
    static toUpperCase(paramchars: CharSequence): string;
    static toUpperCase(paramstring: string): string;
    static truncate(paramseq: CharSequence, parammaxLength: number, paramtruncationIndicator: string): string;
    private constructor()
}