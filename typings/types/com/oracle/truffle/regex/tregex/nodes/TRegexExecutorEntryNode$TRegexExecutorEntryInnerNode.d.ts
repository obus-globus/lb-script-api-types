import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode extends Node {
    static create(paramlanguage: RegexLanguage, paramexecutor: TRegexExecutorBaseNode): TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode;
    constructor(language: RegexLanguage, executor: TRegexExecutorBaseNode)
    executor: TRegexExecutorBaseNode;
    // private language: RegexLanguage;
    createCallTarget(codeRange: TruffleString$CodeRange): DirectCallNode;
    doTString(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number, codeRange: TruffleString$CodeRange, cachedCodeRange: TruffleString$CodeRange, callNode: DirectCallNode): Object;
    execute(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number, codeRange: TruffleString$CodeRange): Object;
    getExecutor(): TRegexExecutorBaseNode;
    // private runExecutor(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number, callNode: DirectCallNode, cachedCodeRange: TruffleString$CodeRange): Object;
}