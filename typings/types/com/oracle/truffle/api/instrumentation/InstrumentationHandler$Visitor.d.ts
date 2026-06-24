import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { InstrumentationHandler$VisitOperation } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$Visitor extends Object implements NodeVisitor {
    constructor(null_: InstrumentationHandler, shouldMaterializeSyntaxNodes: boolean, operations: InstrumentationHandler$VisitOperation[])
    // private computingRootNodeBits: number;
    // private firstExecution: boolean;
    // private materializeLimitedTags: (Object | null)[];
    // private materializeTags: Class<Tag>[];
    // private onlyAlwaysPerformOperationsActive: boolean;
    // private operations: InstrumentationHandler$VisitOperation[];
    // private providedTags: Class<Object>[];
    // private root: RootNode;
    // private rootBits: number;
    // private rootSourceSection: SourceSection;
    // private savedParent: Node;
    // private savedParentSourceSection: SourceSection;
    // private setExecutedRootNodeBit: boolean;
    // private shouldMaterializeSyntaxNodes: boolean;
    // private singleBindingOptimization: boolean;
    // private singleBindingOptimizationPass: boolean;
    // private visitingMaterialized: boolean;
    // private visitingRetiredNodes: boolean;
    // private computeRootBits(sourceSection: SourceSection): void;
    // private isInstrumented(operation: InstrumentationHandler$VisitOperation, binding: EventBinding$Source<Object>, parentInstrumentable: Node, parentSourceSection: SourceSection, instrumentableNode: Node, sourceSection: SourceSection): boolean;
    // private materialize(node: Node, sourceSection: SourceSection, originalNode: Node): Node;
    // private materializeSyntaxNodes(instrumentableNode: Node, sourceSection: SourceSection): Node;
    postVisit(): void;
    preVisit(r: RootNode, visitRoot: Node, firstExec: boolean): void;
    // private saveAndVisitNewlyRetiredNode(node: Node, sourceSection: SourceSection, originalNode: Node): boolean;
    shouldPerformForBinding(operation: InstrumentationHandler$VisitOperation, binding: EventBinding$Source<Object>, parentInstrumentable: Node, parentSourceSection: SourceSection, instrumentableNode: Node, sourceSection: SourceSection): boolean;
    shouldVisit(): boolean;
    visit(originalNode: Node): boolean;
    visitInstrumentable(parentInstrumentable: Node, parentSourceSection: SourceSection, instrumentableNode: Node, sourceSection: SourceSection): void;
    // private visitPreviouslyRetiredNodes(node: Node): boolean;
    // private visitRetiredNodes(retiredSubtreeRoot: Node): void;
}