import type { Object } from '../../java/lang/Object.d.ts'
import type { LongParser$Companion } from '../../kotlin/time/LongParser$Companion.d.ts'
export class LongParser extends Object {
    static Companion: LongParser$Companion;
    private constructor(overflowLimit: number, allowSign: boolean)
    // private allowSign: boolean;
    // private lastDigitMax: number;
    // private overflowLimit: number;
    // private overflowThreshold: number;
    parse(value: string, startIndex: number, callback: (param0: number, param1: number, param2: boolean) => void): number;
}