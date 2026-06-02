import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class PatternProps extends Object {
    static isIdentifier(params: CharSequence): boolean;
    static isIdentifier(params: CharSequence, paramstart: number, paramlimit: number): boolean;
    static isSyntax(paramc: number): boolean;
    static isSyntaxOrWhiteSpace(paramc: number): boolean;
    static isWhiteSpace(paramc: number): boolean;
    static skipIdentifier(params: CharSequence, parami: number): number;
    static skipWhiteSpace(params: CharSequence, parami: number): number;
    static trimSpaceChar(params: string): string;
    static trimWhiteSpace(params: string): string;
    constructor()
}