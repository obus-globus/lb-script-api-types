import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharPredicate } from '../../../../../net/minecraft/CharPredicate.d.ts'
export class SimpleArguments extends Object {
    static bool(paramarg0: string): boolean;
    static bool(paramarg0: string, paramarg1: boolean): boolean;
    static floatNumber(paramarg0: string): number;
    static floatNumber(paramarg0: string, paramarg1: number): number;
    static intNumber(paramarg0: string): number;
    static intNumber(paramarg0: string, paramarg1: number): number;
    static isWrapCharacter(paramarg0: string): boolean;
    static split(paramarg0: string, paramarg1: string): string[];
    static split(paramarg0: string, paramarg1: string, paramarg2: boolean, paramarg3: boolean): string[];
    static unwrap(paramarg0: string): string;
    static unwrap(paramarg0: string, paramarg1: (param0: string) => boolean): string;
    constructor()
}