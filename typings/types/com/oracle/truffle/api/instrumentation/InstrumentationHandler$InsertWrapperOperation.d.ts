import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { InstrumentationHandler$VisitOperation } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation.d.ts'
import type { InstrumentationHandler$VisitOperation$Scope } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation$Scope.d.ts'
import type { NearestNodesCollector$NodeListSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeListSection.d.ts'
import type { NearestNodesCollector$NodeSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeSection.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$InsertWrapperOperation extends InstrumentationHandler$VisitOperation {
    constructor(null_: InstrumentationHandler, scope: InstrumentationHandler$VisitOperation$Scope, binding: EventBinding$Source<Object>)
    constructor(null_: InstrumentationHandler, scope: InstrumentationHandler$VisitOperation$Scope, bindings: EventBinding$Source<Object>[])
    perform(binding: EventBinding$Source<Object>, node: Node, section: SourceSection, executedRoot: boolean): void;
    performNearest(binding: EventBinding$Source<Object>, nearest: NearestNodesCollector$NodeSection, oldNearest: NearestNodesCollector$NodeListSection): void;
    postVisitNotifications(providedTags: Class<Object>[], rootSourceSection: SourceSection): void;
}