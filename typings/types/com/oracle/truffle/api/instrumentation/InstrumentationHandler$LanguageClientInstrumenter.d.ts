import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { ThreadsActivationListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsActivationListener.d.ts'
import type { ThreadsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$LanguageClientInstrumenter<T extends unknown> extends InstrumentationHandler$AbstractInstrumenter {
    constructor(null_: InstrumentationHandler$LanguageClientInstrumenter<T>)
    // private language: TruffleLanguage<Object>;
    // private languageInfo: LanguageInfo;
    attachContextsListener<S extends ContextsListener>(listener: S, includeActiveContexts: boolean): EventBinding<S>;
    attachThreadsActivationListener(listener: ThreadsActivationListener): EventBinding<ThreadsActivationListener>;
    attachThreadsListener<S extends ThreadsListener>(listener: S, includeStartedThreads: boolean): EventBinding<S>;
    dispose(): void;
    doFinalize(): void;
    isInstrumentableRoot(node: RootNode): boolean;
    isInstrumentableSource(source: Source): boolean;
    isReadyForContextEvents(): boolean;
    lookup<S extends unknown>(handler: InstrumentationHandler, type: Class<S>): S;
    queryTags(node: Node): Class<Object>[];
    verifyFilter(nearestFilter: NearestSectionFilter, sourceSectionFilter: SourceSectionFilter): void;
    verifyTags(filter: Object, referencedTags: Class<Object>[]): void;
}