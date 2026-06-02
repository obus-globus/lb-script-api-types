import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class EarlyStoppingListener$EarlyStoppedException extends RuntimeException {
    constructor(arg0: number, arg1: string)
    readonly stopEpoch: number;
    getStopEpoch(): number;
}