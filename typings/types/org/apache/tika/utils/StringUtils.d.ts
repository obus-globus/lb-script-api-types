import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringUtils extends Object {
    static EMPTY: string;
    static SPACE: string;
    static isBlank(paramarg0: string): boolean;
    static isEmpty(paramarg0: CharSequence): boolean;
    static joinWith(paramarg0: string, paramarg1: string[]): string;
    static leftPad(paramarg0: string, paramarg1: number, paramarg2: string): string;
    static repeat(paramarg0: string, paramarg1: number): string;
    constructor()
}