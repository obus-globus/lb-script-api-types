import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { ThreadsActivationListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsActivationListener.d.ts'
import type { ThreadsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { TruffleInstrument } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$InstrumentClientInstrumenter extends InstrumentationHandler$AbstractInstrumenter {
    constructor(null_: InstrumentationHandler, env: TruffleInstrument$Env, instrumentClassName: string)
    // private env: TruffleInstrument$Env;
    // private instrument: TruffleInstrument;
    // private instrumentClassName: string;
    // private services: Object[];
    attachContextsListener<T extends ContextsListener>(listener: T, includeActiveContexts: boolean): EventBinding<T>;
    attachThreadsActivationListener(listener: ThreadsActivationListener): EventBinding<ThreadsActivationListener>;
    attachThreadsListener<T extends ThreadsListener>(listener: T, includeStartedThreads: boolean): EventBinding<T>;
    // private checkServices(expectedServices: string[]): boolean;
    create(expectedServices: string[]): void;
    dispose(): void;
    doFinalize(): void;
    // private findType(name: string, type: Class<Object>): boolean;
    getEnv(): TruffleInstrument$Env;
    getInstrument(): TruffleInstrument;
    getInstrumentClassName(): string;
    isInitialized(): boolean;
    isInstrumentableRoot(rootNode: RootNode): boolean;
    isInstrumentableSource(source: Source): boolean;
    isReadyForContextEvents(): boolean;
    lookup<T extends unknown>(handler: InstrumentationHandler, type: Class<T>): T;
    queryTags(node: Node): Class<Object>[];
    verifyFilter(nearestFilter: NearestSectionFilter, sourceSectionFilter: SourceSectionFilter): void;
}