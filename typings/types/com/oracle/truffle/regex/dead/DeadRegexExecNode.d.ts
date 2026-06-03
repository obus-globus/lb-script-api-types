import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexExecNode } from '../../../../../com/oracle/truffle/regex/RegexExecNode.d.ts'
import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexResult } from '../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
export class DeadRegexExecNode extends RegexExecNode {
    constructor(language: RegexLanguage, source: RegexSource)
    execute(frame: VirtualFrame): RegexResult;
    execute(frame: VirtualFrame, input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number): RegexResult;
    getEngineLabel(): string;
}