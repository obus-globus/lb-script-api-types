import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LongMath$MillerRabinTester extends Enum<LongMath$MillerRabinTester> {
    static LARGE: LongMath$MillerRabinTester;
    static SMALL: LongMath$MillerRabinTester;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LongMath$MillerRabinTester;
    static values(): LongMath$MillerRabinTester[];
    constructor(arg2: any)
    mulMod(a: number, b: number, m: number): number;
    // private powMod(a: number, p: number, m: number): number;
    squareMod(a: number, m: number): number;
    // private testWitness(base: number, n: number): boolean;
    name(): "SMALL" | "LARGE";
}