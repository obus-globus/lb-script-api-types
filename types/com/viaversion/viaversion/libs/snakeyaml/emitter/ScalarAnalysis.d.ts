import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ScalarAnalysis extends Object {
    constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean)
    readonly allowBlock: boolean;
    readonly allowBlockPlain: boolean;
    readonly allowFlowPlain: boolean;
    readonly allowSingleQuoted: boolean;
    readonly empty: boolean;
    readonly multiline: boolean;
    readonly scalar: string;
    getScalar(): string;
    isAllowBlock(): boolean;
    isAllowBlockPlain(): boolean;
    isAllowFlowPlain(): boolean;
    isAllowSingleQuoted(): boolean;
    isEmpty(): boolean;
    isMultiline(): boolean;
}