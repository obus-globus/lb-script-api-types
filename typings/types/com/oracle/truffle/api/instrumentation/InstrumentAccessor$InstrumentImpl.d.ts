import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Accessor$InstrumentSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$InstrumentSupport.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
export class InstrumentAccessor$InstrumentImpl extends Accessor$InstrumentSupport {
    constructor()
    collectEnvServices(collectTo: Object[], polyglotLanguageContext: Object, language: TruffleLanguage<Object>): void;
    createInstrument(instrumentationHandler: Object, polyglotInstrument: Object, expectedServices: string[], options: OptionValues): void;
    createInstrumentationHandler(polyglotEngine: Object, strongReferences: boolean): Object;
    createPolyglotSourceSection(instrumentEnv: Object, polyglotSource: Object, ss: SourceSection): Object;
    describeContextOptions(instrumentationHandler: Object, key: Object, requiredGroup: string): OptionDescriptor[];
    describeEngineOptions(instrumentationHandler: Object, key: Object, requiredGroup: string): OptionDescriptor[];
    describeSourceOptions(instrumentationHandler: Object, key: Object, requiredGroup: string): OptionDescriptor[];
    disposeInstrument(instrumentationHandler: Object, polyglotInstrument: Object, cleanupRequired: boolean): void;
    finalizeInstrument(instrumentationHandler: Object, polyglotInstrument: Object): void;
    getEngineInstrumenter(instrumentationHandler: Object): Object;
    getInstrumentationHandlerService<T extends Object | number | string | boolean>(instrumentationHandler: Object, key: Object, type: Class<T>): T;
    getLoadedCallTargets(instrumentationHandler: Object): CallTarget[];
    getPolyglotInstrument(instrumentEnv: Object): Object;
    hasContextBindings(engine: Object): boolean;
    hasThreadBindings(engine: Object): boolean;
    initializeInstrument(instrumentationHandler: Object, polyglotInstrument: Object, instrumentClassName: string, instrumentSupplier: () => Object | null): void;
    invokeContextLocalFactory(factory: Object, truffleContext: TruffleContext): Object;
    invokeContextThreadLocalFactory(factory: Object, truffleContext: TruffleContext, t: Thread): Object;
    isInputValueSlotIdentifier(identifier: Object): boolean;
    isInstrumentable(node: Node): boolean;
    notifyContextClosed(engine: Object, context: TruffleContext): void;
    notifyContextCreated(engine: Object, context: TruffleContext): void;
    notifyContextResetLimit(engine: Object, context: TruffleContext): void;
    notifyEnter(instrumentationHandler: Object, truffleContext: TruffleContext): void;
    notifyLanguageContextCreate(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextCreateFailed(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextCreated(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextDisposed(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextFinalized(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextInitialize(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextInitializeFailed(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLanguageContextInitialized(engine: Object, context: TruffleContext, info: LanguageInfo): void;
    notifyLeave(instrumentationHandler: Object, truffleContext: TruffleContext): void;
    notifyThreadFinished(engine: Object, context: TruffleContext, thread: Thread): void;
    notifyThreadStarted(engine: Object, context: TruffleContext, thread: Thread): void;
    onFirstExecution(rootNode: RootNode, validate: boolean): void;
    onLoad(rootNode: RootNode): void;
    onNodeInserted(rootNode: RootNode, tree: Node): void;
}