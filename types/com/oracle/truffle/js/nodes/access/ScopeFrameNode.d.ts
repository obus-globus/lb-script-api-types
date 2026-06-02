import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
export abstract class ScopeFrameNode extends JavaScriptBaseNode {
    static BLOCK_SCOPE_IDENTIFIER: TruffleString;
    static EVAL_SCOPE_IDENTIFIER: TruffleString;
    static PARENT_SCOPE_IDENTIFIER: TruffleString;
    static PARENT_SCOPE_SLOT_INDEX: number;
    static create(paramframeLevel: number): ScopeFrameNode;
    static create(paramframeLevel: number, paramscopeLevel: number, paramblockScopeSlot: JSFrameSlot): ScopeFrameNode;
    static createCurrent(): ScopeFrameNode;
    static getBlockScopeParentFrame(paramframe: Frame): Frame;
    static getNonBlockScopeParentFrame(paramframe: Frame): Frame;
    static isBlockScopeFrame(paramframe: Frame): boolean;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeFrame(frame: Frame): Frame;
    isAdoptable(): boolean;
}