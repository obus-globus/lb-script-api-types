import type { Random } from '../../../../java/util/Random.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomUtils } from '../../../../org/apache/commons/lang3/RandomUtils.d.ts'
export class RandomStringUtils extends Object {
    static insecure(): RandomStringUtils;
    static random(paramarg0: number): string;
    static random(paramarg0: number, paramarg1: boolean, paramarg2: boolean): string;
    static random(paramarg0: number, ...paramarg1: string[]): string;
    static random(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean): string;
    static random(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean, ...paramarg5: string[]): string;
    static random(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: boolean, paramarg5: string[], paramarg6: Random): string;
    static random(paramarg0: number, paramarg1: string): string;
    static randomAlphabetic(paramarg0: number): string;
    static randomAlphabetic(paramarg0: number, paramarg1: number): string;
    static randomAlphanumeric(paramarg0: number): string;
    static randomAlphanumeric(paramarg0: number, paramarg1: number): string;
    static randomAscii(paramarg0: number): string;
    static randomAscii(paramarg0: number, paramarg1: number): string;
    static randomGraph(paramarg0: number): string;
    static randomGraph(paramarg0: number, paramarg1: number): string;
    static randomNumeric(paramarg0: number): string;
    static randomNumeric(paramarg0: number, paramarg1: number): string;
    static randomPrint(paramarg0: number): string;
    static randomPrint(paramarg0: number, paramarg1: number): string;
    static secure(): RandomStringUtils;
    static secureStrong(): RandomStringUtils;
    constructor()
    // private random: () => RandomUtils;
    next(arg0: number): string;
    next(arg0: number, arg1: boolean, arg2: boolean): string;
    next(arg0: number, ...arg1: string[]): string;
    next(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): string;
    next(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, ...arg5: string[]): string;
    next(arg0: number, arg1: string): string;
    nextAlphabetic(arg0: number): string;
    nextAlphabetic(arg0: number, arg1: number): string;
    nextAlphanumeric(arg0: number): string;
    nextAlphanumeric(arg0: number, arg1: number): string;
    nextAscii(arg0: number): string;
    nextAscii(arg0: number, arg1: number): string;
    nextGraph(arg0: number): string;
    nextGraph(arg0: number, arg1: number): string;
    nextNumeric(arg0: number): string;
    nextNumeric(arg0: number, arg1: number): string;
    nextPrint(arg0: number): string;
    nextPrint(arg0: number, arg1: number): string;
    // private random(): Random;
    // private randomUtils(): RandomUtils;
    toString(): string;
}