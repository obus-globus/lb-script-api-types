import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ProbeNode$InstrumentableChildVisitor } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode$InstrumentableChildVisitor.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProbeNode$InputChildContextLookup extends ProbeNode$InstrumentableChildVisitor {
    constructor(binding: EventBinding$Source<Object>, rootNode: RootNode, providedTags: Class<Object>[], instrumentedNode: Node, instrumentedNodeSourceSection: SourceSection, childrenCount: number)
    // private foundContexts: EventContext[];
    // private index: number;
    visitChild(child: Node): boolean;
}