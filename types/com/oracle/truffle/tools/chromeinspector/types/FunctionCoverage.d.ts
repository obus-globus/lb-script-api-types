import type { CoverageRange } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/CoverageRange.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class FunctionCoverage extends Object {
    constructor(functionName: string, isBlockCoverage: boolean, ranges: CoverageRange[])
    readonly functionName: string;
    // private isBlockCoverage: boolean;
    readonly ranges: CoverageRange[];
    getFunctionName(): string;
    getRanges(): CoverageRange[];
    isBlockCoverage(): boolean;
    // private toJSON(): JSONObject;
}