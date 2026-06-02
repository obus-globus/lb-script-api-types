import type { InstrumentableNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionFilter$TaggedNode extends Node implements InstrumentableNode {
    static findInstrumentableParent(paramnode: Node): Node;
    constructor(tags: Class<Object>[])
    // private tags: Class<Object>[];
    createProbe(sourceSection: SourceSection): ProbeNode;
    createWrapper(probe: ProbeNode): InstrumentableNode$WrapperNode;
    findNearestNodeAt(line: number, column: number, tags: Class<Tag>[]): Node;
    findNearestNodeAt(sourceCharIndex: number, tags: Class<Tag>[]): Node;
    findProbe(): ProbeNode;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    hasTag(tag: Class<Tag>): boolean;
    isInstrumentable(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}