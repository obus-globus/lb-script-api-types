import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { RegexResult$RegexResultGetEndNode } from '../../../../../com/oracle/truffle/regex/result/RegexResult$RegexResultGetEndNode.d.ts'
import type { ToIntNode } from '../../../../../com/oracle/truffle/regex/runtime/nodes/ToIntNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegexResult$RegexResultGetEndMethod extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: JavaMap<string, number[]>): AbstractRegexObject;
    constructor(result: RegexResult)
    // private result: RegexResult;
    execute(args: Object[], toIntNode: ToIntNode, getEndNode: RegexResult$RegexResultGetEndNode): number;
    isExecutable(): boolean;
    toString(): string;
}