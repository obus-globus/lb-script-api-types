import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeoutLimits extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    readonly parseTimeoutMS: number;
    readonly pulseMS: number;
    readonly waitTimeoutMS: number;
    getParseTimeoutMS(): number;
    getPulseMS(): number;
    getWaitTimeoutMS(): number;
}