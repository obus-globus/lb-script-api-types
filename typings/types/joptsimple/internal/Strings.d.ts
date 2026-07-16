import type { Object } from '../../java/lang/Object.d.ts'
export class Strings extends Object {
    static EMPTY: string;
    static LINE_SEPARATOR: string;
    static isNullOrEmpty(paramarg0: string): boolean;
    static join(paramarg0: string[], paramarg1: string): string;
    static repeat(paramarg0: string, paramarg1: number): string;
    static surround(paramarg0: string, paramarg1: string, paramarg2: string): string;
    private constructor()
}