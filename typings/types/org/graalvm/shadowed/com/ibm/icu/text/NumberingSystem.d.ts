import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class NumberingSystem extends Object {
    static LATIN: NumberingSystem;
    static getAvailableNames(): string[];
    static getInstance(): NumberingSystem;
    static getInstance(paramradix_in: number, paramisAlgorithmic_in: boolean, paramdesc_in: string): NumberingSystem;
    static getInstance(paraminLocale: Locale): NumberingSystem;
    static getInstance(paramlocale: ULocale): NumberingSystem;
    static getInstanceByName(paramname: string): NumberingSystem;
    static isValidDigitString(paramstr: string): boolean;
    constructor()
    readonly algorithmic: boolean;
    // private desc: string;
    readonly name: string;
    readonly radix: number;
    getDescription(): string;
    getName(): string;
    getRadix(): number;
    isAlgorithmic(): boolean;
}