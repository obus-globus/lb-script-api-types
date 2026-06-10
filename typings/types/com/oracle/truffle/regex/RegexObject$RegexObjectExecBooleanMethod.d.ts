import type { AbstractRegexObject } from '../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexObject } from '../../../../com/oracle/truffle/regex/RegexObject.d.ts'
import type { RegexObject$ExecBooleanCompiledRegexNode } from '../../../../com/oracle/truffle/regex/RegexObject$ExecBooleanCompiledRegexNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexObject$RegexObjectExecBooleanMethod extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: number[] }): AbstractRegexObject;
    constructor(regex: RegexObject)
    // private regex: RegexObject;
    execute(args: Object[], execNode: RegexObject$ExecBooleanCompiledRegexNode): boolean;
    isExecutable(): boolean;
    toString(): string;
}