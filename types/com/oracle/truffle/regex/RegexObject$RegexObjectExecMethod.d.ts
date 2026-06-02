import type { AbstractRegexObject } from '../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexObject } from '../../../../com/oracle/truffle/regex/RegexObject.d.ts'
import type { RegexObject$ExecCompiledRegexNode } from '../../../../com/oracle/truffle/regex/RegexObject$ExecCompiledRegexNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexObject$RegexObjectExecMethod extends AbstractRegexObject {
    static createNamedCaptureGroupMapInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    static createNamedCaptureGroupMapListInt(paramnamedCaptureGroups: { [key: string]: Object | null }): AbstractRegexObject;
    constructor(regex: RegexObject)
    // private regex: RegexObject;
    execute(args: Object[], execNode: RegexObject$ExecCompiledRegexNode): Object;
    isExecutable(): boolean;
    toString(): string;
}