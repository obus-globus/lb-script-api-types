import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$VisitOperation$Scope } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation$Scope.d.ts'
import type { NearestNodesCollector } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector.d.ts'
import type { NearestNodesCollector$NodeListSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeListSection.d.ts'
import type { NearestNodesCollector$NodeSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeSection.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export abstract class InstrumentationHandler$VisitOperation extends Object {
    constructor(scope: InstrumentationHandler$VisitOperation$Scope, binding: EventBinding$Source<Object>)
    constructor(scope: InstrumentationHandler$VisitOperation$Scope, bindingsArray: EventBinding$Source<Object>[], performForEachBinding: boolean)
    constructor(scope: InstrumentationHandler$VisitOperation$Scope, bindingsArray: EventBinding$Source<Object>[], performForEachBinding: boolean, alwaysPerform: boolean)
    constructor(scope: InstrumentationHandler$VisitOperation$Scope, bindingsArray: EventBinding$Source<Object>[], singleBindingOperation: boolean, performForEachBinding: boolean, alwaysPerform: boolean)
    // private alwaysPerform: boolean;
    // private bindingsAtConstructionTime: EventBinding$Source<Object>[];
    // private nearestNodeCollectors: EconomicMap<EventBinding$Source<Object>, EconomicMap<Source, NearestNodesCollector>>;
    // private performForEachBinding: boolean;
    // private scope: InstrumentationHandler$VisitOperation$Scope;
    // private singleBindingOperation: boolean;
    perform(binding: EventBinding$Source<Object>, node: Node, section: SourceSection, executedRoot: boolean): void;
    performNearest(binding: EventBinding$Source<Object>, nearest: NearestNodesCollector$NodeSection, oldNearest: NearestNodesCollector$NodeListSection): void;
    postVisitCleanup(): void;
    postVisitNotifications(providedTags: Class<Object>[], rootSourceSection: SourceSection): void;
    preVisit(root: RootNode, rootSourceSection: SourceSection, executedRoot: boolean, visitRoot: Node): void;
    shouldVisit(providedTags: Class<Object>[], rootNode: RootNode, rootSourceSection: SourceSection, rootNodeBits: number): boolean;
    // private updateNearestNode(binding: EventBinding$Source<Object>, instrumentableNode: Node, sourceSection: SourceSection, rootSection: SourceSection): boolean;
    visitNearestSections(providedTags: Class<Object>[], rootSourceSection: SourceSection): void;
}