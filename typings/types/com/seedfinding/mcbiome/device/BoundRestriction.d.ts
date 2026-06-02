import type { Restriction } from '../../../../com/seedfinding/mcbiome/device/Restriction.d.ts'
export abstract class BoundRestriction extends Restriction {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    // private bound: number;
    // private max: number;
    // private min: number;
    // private salt: number;
    // private shortBound: number;
    // private shortMax: number;
    // private shortMin: number;
    getBitPoints(): number[];
    testSeed(arg0: number, arg1: number): boolean;
}