import type { Restriction } from '../../../../com/seedfinding/mcbiome/device/Restriction.d.ts'
export abstract class ModRestriction extends Restriction {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number)
    // private bound: number;
    // private modulo: number;
    // private salt: number;
    // private value: number;
    getBitPoints(): number[];
    testSeed(arg0: number, arg1: number): boolean;
}