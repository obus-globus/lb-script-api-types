import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class WordUtils extends Object {
    static capitalize(paramarg0: string): string;
    static capitalize(paramarg0: string, ...paramarg1: string[]): string;
    static capitalizeFully(paramarg0: string): string;
    static capitalizeFully(paramarg0: string, ...paramarg1: string[]): string;
    static containsAllWords(paramarg0: CharSequence, ...paramarg1: (Object | null)[]): boolean;
    static initials(paramarg0: string): string;
    static initials(paramarg0: string, ...paramarg1: string[]): string;
    static swapCase(paramarg0: string): string;
    static uncapitalize(paramarg0: string): string;
    static uncapitalize(paramarg0: string, ...paramarg1: string[]): string;
    static wrap(paramarg0: string, paramarg1: number): string;
    static wrap(paramarg0: string, paramarg1: number, paramarg2: string, paramarg3: boolean): string;
    static wrap(paramarg0: string, paramarg1: number, paramarg2: string, paramarg3: boolean, paramarg4: string): string;
    constructor()
}