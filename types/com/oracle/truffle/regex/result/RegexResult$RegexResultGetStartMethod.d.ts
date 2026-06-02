import type { AbstractRegexObject } from '../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { RegexResult$RegexResultGetStartNode } from '../../../../../com/oracle/truffle/regex/result/RegexResult$RegexResultGetStartNode.d.ts'
import type { ToIntNode } from '../../../../../com/oracle/truffle/regex/runtime/nodes/ToIntNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegexResult$RegexResultGetStartMethod extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    constructor(result: RegexResult)
    // private result: RegexResult;
    execute(args: Object[], toIntNode: ToIntNode, getStartNode: RegexResult$RegexResultGetStartNode): number;
    isExecutable(): boolean;
    toString(): string;
}