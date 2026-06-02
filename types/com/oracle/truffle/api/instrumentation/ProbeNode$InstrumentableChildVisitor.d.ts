import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ProbeNode$InstrumentableChildVisitor extends Object implements NodeVisitor {
    constructor(binding: EventBinding$Source<Object>, rootNode: RootNode, providedTags: Class<Object>[], instrumentedNode: Node, instrumentedNodeSourceSection: SourceSection)
    // private binding: EventBinding$Source<Object>;
    // private instrumentedNode: Node;
    // private instrumentedNodeSourceSection: SourceSection;
    // private providedTags: Class<Object>[];
    // private rootNode: RootNode;
    visit(node: Node): boolean;
    visitChild(child: Node): boolean;
}