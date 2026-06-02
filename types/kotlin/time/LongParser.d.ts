import type { Object } from '../../java/lang/Object.d.ts'
import type { Function3 } from '../../kotlin/jvm/functions/Function3.d.ts'
import type { LongParser$Companion } from '../../kotlin/time/LongParser$Companion.d.ts'
export class LongParser extends Object {
    static Companion: LongParser$Companion;
    private constructor(overflowLimit: number, allowSign: boolean)
    // private allowSign: boolean;
    // private lastDigitMax: number;
    // private overflowLimit: number;
    // private overflowThreshold: number;
    parse(value: string, startIndex: number, callback: Function3<number, number, boolean, void>): number;
}