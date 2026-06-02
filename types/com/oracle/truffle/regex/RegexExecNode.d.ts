import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexBodyNode } from '../../../../com/oracle/truffle/regex/RegexBodyNode.d.ts'
import type { RegexLanguage } from '../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexResult } from '../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { ExpectStringNode } from '../../../../com/oracle/truffle/regex/runtime/nodes/ExpectStringNode.d.ts'
import type { ToLongNode } from '../../../../com/oracle/truffle/regex/runtime/nodes/ToLongNode.d.ts'
import type { InputReadNode } from '../../../../com/oracle/truffle/regex/tregex/nodes/input/InputReadNode.d.ts'
export abstract class RegexExecNode extends RegexBodyNode {
    constructor(language: RegexLanguage, source: RegexSource, mustCheckUTF16Surrogates: boolean)
    // private charAtNode: InputReadNode;
    // private expectStringNode: ExpectStringNode;
    // private mustCheckUTF16Surrogates: boolean;
    // private toLongNode: ToLongNode;
    // private adjustFromIndex(input: TruffleString, fromIndex: number, regionFrom: number, regionTo: number): number;
    execute(frame: VirtualFrame): RegexResult;
    execute(frame: VirtualFrame, input: TruffleString, fromIndex: number, toIndex: number, regionFrom: number, regionTo: number): RegexResult;
    inputRead(input: TruffleString, i: number): number;
    isBacktracking(): boolean;
    isNFA(): boolean;
}