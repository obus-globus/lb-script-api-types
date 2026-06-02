import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
export abstract class TRegexExecNode$RunRegexSearchNode extends Node {
    constructor()
    run(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
}