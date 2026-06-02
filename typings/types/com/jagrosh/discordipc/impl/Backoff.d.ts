import type { Random } from '../../../../java/util/Random.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Backoff extends Object {
    constructor(arg0: number, arg1: number)
    // private current: number;
    // private fails: number;
    // private maxAmount: number;
    // private minAmount: number;
    // private randGenerator: Random;
    nextDelay(): number;
    // private rand01(): number;
    reset(): void;
}