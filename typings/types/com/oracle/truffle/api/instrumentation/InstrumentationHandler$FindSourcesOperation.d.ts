import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$VisitOperation } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation.d.ts'
import type { InstrumentationHandler$VisitOperation$Scope } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation$Scope.d.ts'
import type { SourceInstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/SourceInstrumentationHandler.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$FindSourcesOperation extends InstrumentationHandler$VisitOperation {
    constructor(scope: InstrumentationHandler$VisitOperation$Scope, threadLocalNewSources: ThreadLocal<JavaMap<Source, void>>, sourceInstrumentationHandler: SourceInstrumentationHandler, dontNotifyBindings: boolean, performOnlyOnExecutedAST: boolean)
    // private dontNotifyBindings: boolean;
    // private newSources: JavaMap<Source, void>;
    // private performOnlyOnExecutedAST: boolean;
    // private sourceInstrumentationHandler: SourceInstrumentationHandler;
    // private threadLocalNewSources: ThreadLocal<JavaMap<Source, void>>;
    // private updateGlobalSourceList: boolean;
    adoptSource(source: Source): void;
    perform(binding: EventBinding$Source<Object>, node: Node, section: SourceSection, executedRoot: boolean): void;
    postVisitCleanup(): void;
    postVisitNotifications(providedTags: Class<Object>[], rootSourceSection: SourceSection): void;
    preVisit(root: RootNode, rootSourceSection: SourceSection, executedRoot: boolean, visitRoot: Node): void;
    shouldVisit(providedTags: Class<Object>[], rootNode: RootNode, rootSourceSection: SourceSection, rootNodeBits: number): boolean;
}