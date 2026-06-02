import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class PatternProps extends Object {
    static isIdentifier(paramarg0: CharSequence): boolean;
    static isIdentifier(paramarg0: CharSequence, paramarg1: number, paramarg2: number): boolean;
    static isSyntax(paramarg0: number): boolean;
    static isSyntaxOrWhiteSpace(paramarg0: number): boolean;
    static isWhiteSpace(paramarg0: number): boolean;
    static skipIdentifier(paramarg0: CharSequence, paramarg1: number): number;
    static skipWhiteSpace(paramarg0: CharSequence, paramarg1: number): number;
    static trimSpaceChar(paramarg0: string): string;
    static trimWhiteSpace(paramarg0: string): string;
    constructor()
}