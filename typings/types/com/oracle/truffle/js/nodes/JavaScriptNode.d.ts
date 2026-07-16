import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class JavaScriptNode extends JavaScriptBaseNode implements InstrumentableNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static findBlockScopeNode(paramnode: Node): Node;
    static findInstrumentableParent(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor()
    constructor(sourceSection: SourceSection)
    // private charIndex: number;
    // private charLength: number;
    // private source: Object;
    accepts(cachedNode: JavaScriptNode): boolean;
    addCallTag(): void;
    addExpressionTag(): void;
    addRootBodyTag(): void;
    addStatementTag(): void;
    // private checkSameSourceSection(newSection: SourceSection): void;
    convertIncomingValue(value: Object): Object;
    copy(): JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createProbe(sourceSection: SourceSection): ProbeNode;
    createWrapper(probe: ProbeNode): InstrumentableNode$WrapperNode;
    execute(frame: VirtualFrame): Object;
    executeBoolean(frame: VirtualFrame): boolean;
    executeDouble(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame): number;
    executeVoid(frame: VirtualFrame): void;
    expressionToString(): string;
    findNearestNodeAt(line: number, column: number, tags: Class<Tag>[]): Node;
    findNearestNodeAt(sourceCharIndex: number, tags: Class<Tag>[]): Node;
    findProbe(): ProbeNode;
    getNodeObject(): Object;
    getReceiverMember(frame: Frame): Object;
    getRootInstance(frame: Frame): Object;
    getScope(frame: Frame, nodeEnter: boolean, blockNode: Node, frameBlockNode: Node): Object;
    getSourceSection(): SourceSection;
    hasImportantTag(): boolean;
    hasReceiverMember(frame: Frame): boolean;
    hasRootInstance(frame: Frame): boolean;
    hasScope(frame: Frame): boolean;
    hasSourceSection(): boolean;
    hasTag(tag: Class<Tag>): boolean;
    isInstrumentable(): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    onReplace(newNode: Node, reason: CharSequence): void;
    setSourceSection(source: Source, charIndex: number, charLength: number): void;
    setSourceSection(section: SourceSection): void;
    toString(): string;
}