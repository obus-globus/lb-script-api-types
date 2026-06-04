import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { ContextsListener } from '../../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { Instrumenter } from '../../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { LoadSourceEvent } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceEvent.d.ts'
import type { LoadSourceListener } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { SourceFilter } from '../../../../../../com/oracle/truffle/api/instrumentation/SourceFilter.d.ts'
import type { LanguageInfo } from '../../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { AgentObject } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AgentObject.d.ts'
import type { IgnoreSources } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/IgnoreSources.d.ts'
import type { InsightFilter$Data } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightFilter$Data.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class InsightPerSource extends Object implements ContextsListener, LoadSourceListener, AutoCloseable {
    constructor(instrumenter: Instrumenter, instrument: InsightInstrument, src: () => Source, ignoredSources: IgnoreSources)
    // private bindings: Map<Object, InsightInstrument$Key>;
    // private closeBinding: InsightInstrument$Key;
    // private contextLanguagesInitializing: Map<TruffleContext, string[]>;
    // private ignoredSources: IgnoreSources;
    // private initializeBindings: EconomicMap<TruffleContext, EventBinding<Object>>;
    // private insight: AgentObject;
    // private instrument: InsightInstrument;
    // private onInit: EventBinding<InsightPerSource>;
    // private registeredSource: Map<TruffleContext, Source>;
    // private sourceBinding: InsightInstrument$Key;
    // private src: () => Source;
    // private attachBinding(data: InsightFilter$Data, key: InsightInstrument$Key, sourceFilter: SourceFilter, needFactory: (param0: InsightInstrument$Key) => ExecutionEventNodeFactory): void;
    binding(data: InsightFilter$Data, needFactory: (param0: InsightInstrument$Key) => ExecutionEventNodeFactory, hasFactory: (param0: InsightInstrument$Key) => void): void;
    // private checkClosed(): void;
    close(): void;
    closeBinding(): InsightInstrument$Key;
    collectSymbols(argNames: string[], args: Object[]): void;
    initializeAgent(ctx: TruffleContext): void;
    onContextClosed(context: TruffleContext): void;
    onContextCreated(context: TruffleContext): void;
    onContextResetLimits(context: TruffleContext): void;
    onLanguageContextCreate(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextCreateFailed(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextCreated(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextDisposed(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextFinalized(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextInitialize(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextInitializeFailed(context: TruffleContext, language: LanguageInfo): void;
    onLanguageContextInitialized(context: TruffleContext, language: LanguageInfo): void;
    onLoad(event: LoadSourceEvent): void;
    // private popLanguageContextCreateOrInitialize(context: TruffleContext, language: LanguageInfo): boolean;
    // private pushLanguageContextCreateOrInitialize(context: TruffleContext, language: LanguageInfo): void;
    sourceBinding(): InsightInstrument$Key;
}