import type { Random } from '../../../../java/util/Random.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RandomUtils extends Object {
    static insecure(): RandomUtils;
    static nextBoolean(): boolean;
    static nextBytes(paramarg0: number): number[];
    static nextDouble(): number;
    static nextDouble(paramarg0: number, paramarg1: number): number;
    static nextFloat(): number;
    static nextFloat(paramarg0: number, paramarg1: number): number;
    static nextInt(): number;
    static nextInt(paramarg0: number, paramarg1: number): number;
    static nextLong(): number;
    static nextLong(paramarg0: number, paramarg1: number): number;
    static secure(): RandomUtils;
    static secureStrong(): RandomUtils;
    constructor()
    private constructor(arg0: () => Random)
    // private random: () => Random;
    random(): Random;
    randomBoolean(): boolean;
    randomBytes(arg0: number): number[];
    randomDouble(): number;
    randomDouble(arg0: number, arg1: number): number;
    randomFloat(): number;
    randomFloat(arg0: number, arg1: number): number;
    randomInt(): number;
    randomInt(arg0: number, arg1: number): number;
    randomLong(): number;
    // private randomLong(arg0: number): number;
    randomLong(arg0: number, arg1: number): number;
    toString(): string;
}