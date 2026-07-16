import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CountingConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/CountingConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SwitchNode extends StatementNode implements ResumableNode$WithObjectState {
    static EMPTY: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramdeclarations: JavaScriptNode[], paramcaseExpressions: JavaScriptNode[], paramjumptable: number[], paramstatements: JavaScriptNode[]): SwitchNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(declarations: JavaScriptNode[], caseExpressions: JavaScriptNode[], jumptable: number[], statements: JavaScriptNode[])
    // private caseExpressions: JavaScriptNode[];
    // private conditionProfiles: CountingConditionProfile[];
    // private declarations: JavaScriptNode[];
    // private jumptable: number[];
    // private ordered: boolean;
    // private statements: JavaScriptNode[];
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private executeDeclarations(frame: VirtualFrame): void;
    // private executeDefault(frame: VirtualFrame): Object;
    // private executeOrdered(frame: VirtualFrame): Object;
    // private executeStatements(frame: VirtualFrame, statementStartIndex: number): Object;
    // private executeStatements(frame: VirtualFrame, statementStartIndex: number, initialResult: Object, stateSlot: number): Object;
    getNodeObject(): Object;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    hasTag(tag: Class<Tag>): boolean;
    // private identifyTargetCase(frame: VirtualFrame, firstCase: number, stateSlot: number): number;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    // private needsMaterialization(): boolean;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}