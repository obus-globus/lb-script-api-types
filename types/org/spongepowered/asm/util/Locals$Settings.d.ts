import type { Object } from '../../../../java/lang/Object.d.ts'
export class Locals$Settings extends Object {
    static DEFAULT: Locals$Settings;
    static DEFAULT_FLAGS: number;
    static RESURRECT_EXPOSED_ON_LOAD: number;
    static RESURRECT_EXPOSED_ON_STORE: number;
    static RESURRECT_FOR_BOGUS_TOP: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    // private choppedFrameThreshold: number;
    // private choppedInsnThreshold: number;
    // private flags: number;
    // private flagsCustom: number;
    // private trimmedFrameThreshold: number;
    // private trimmedInsnThreshold: number;
    hasFlags(arg0: number): boolean;
}