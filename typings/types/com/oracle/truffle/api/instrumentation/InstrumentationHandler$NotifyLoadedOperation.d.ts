import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$BindingLoadSourceSectionEvent } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$BindingLoadSourceSectionEvent.d.ts'
import type { InstrumentationHandler$VisitOperation } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation.d.ts'
import type { NearestNodesCollector$NodeListSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeListSection.d.ts'
import type { NearestNodesCollector$NodeSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeSection.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$NotifyLoadedOperation extends InstrumentationHandler$VisitOperation {
    constructor(null_: InstrumentationHandler$NotifyLoadedOperation, binding: EventBinding$Source<Object>)
    constructor(null_: InstrumentationHandler$NotifyLoadedOperation, bindings: EventBinding$Source<Object>[])
    // private notifyBindings: boolean;
    // private sourceSectionLoadedList: InstrumentationHandler$BindingLoadSourceSectionEvent[];
    perform(binding: EventBinding$Source<Object>, node: Node, section: SourceSection, executedRoot: boolean): void;
    performNearest(binding: EventBinding$Source<Object>, nearest: NearestNodesCollector$NodeSection, oldNearest: NearestNodesCollector$NodeListSection): void;
    postVisitCleanup(): void;
    postVisitNotifications(providedTags: Class<Object>[], rootSourceSection: SourceSection): void;
    preVisit(root: RootNode, rootSourceSection: SourceSection, executedRoot: boolean, visitRoot: Node): void;
}