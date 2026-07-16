import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { FunctionNameHolder } from '../../../../../../com/oracle/truffle/js/nodes/function/FunctionNameHolder.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionExpressionNode extends JavaScriptNode implements FunctionNameHolder {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramfunction: JSFunctionData): JSFunctionExpressionNode;
    static create(paramfunction: JSFunctionData, paramblockScopeSlot: JSFrameSlot): JSFunctionExpressionNode;
    static createLexicalThis(paramfunction: JSFunctionData, paramblockScopeSlot: JSFrameSlot, paramthisNode: JavaScriptNode): JSFunctionExpressionNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(functionData: JSFunctionData)
    readonly functionData: JSFunctionData;
    execute(frame: VirtualFrame): Object;
    executeWithRealm(frame: VirtualFrame, realm: JSRealm): Object;
    getFunctionData(): JSFunctionData;
    getFunctionName(): TruffleString;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    isAnonymous(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    setFunctionName(name: TruffleString): void;
}