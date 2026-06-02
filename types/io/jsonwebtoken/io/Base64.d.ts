import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Base64 extends Object {
    private constructor(arg0: boolean)
    // private ALPHABET: string[];
    // private IALPHABET: number[];
    // private urlsafe: boolean;
    // private ctoi(arg0: string): number;
    decodeFast(arg0: CharSequence): number[];
    // private encodeToChar(arg0: number[], arg1: boolean): string[];
    encodeToString(arg0: number[], arg1: boolean): string;
    // private getName(): string;
}