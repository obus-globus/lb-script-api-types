import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage$Env } from '../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { AllocationReporter } from '../../../../../com/oracle/truffle/api/instrumentation/AllocationReporter.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptLanguage } from '../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { Evaluator } from '../../../../../com/oracle/truffle/js/runtime/Evaluator.d.ts'
import type { ImportMetaInitializer } from '../../../../../com/oracle/truffle/js/runtime/ImportMetaInitializer.d.ts'
import type { ImportModuleDynamicallyCallback } from '../../../../../com/oracle/truffle/js/runtime/ImportModuleDynamicallyCallback.d.ts'
import type { JSAgent } from '../../../../../com/oracle/truffle/js/runtime/JSAgent.d.ts'
import type { JSContext$BuiltinFunctionKey } from '../../../../../com/oracle/truffle/js/runtime/JSContext$BuiltinFunctionKey.d.ts'
import type { JSContext$SharedRootNode } from '../../../../../com/oracle/truffle/js/runtime/JSContext$SharedRootNode.d.ts'
import type { JSContextOptions } from '../../../../../com/oracle/truffle/js/runtime/JSContextOptions.d.ts'
import type { JSErrorType } from '../../../../../com/oracle/truffle/js/runtime/JSErrorType.d.ts'
import type { JSLanguageOptions } from '../../../../../com/oracle/truffle/js/runtime/JSLanguageOptions.d.ts'
import type { JSParserOptions } from '../../../../../com/oracle/truffle/js/runtime/JSParserOptions.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { PrepareStackTraceCallback } from '../../../../../com/oracle/truffle/js/runtime/PrepareStackTraceCallback.d.ts'
import type { PromiseHook } from '../../../../../com/oracle/truffle/js/runtime/PromiseHook.d.ts'
import type { PromiseRejectionTracker } from '../../../../../com/oracle/truffle/js/runtime/PromiseRejectionTracker.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { Builtin } from '../../../../../com/oracle/truffle/js/runtime/builtins/Builtin.d.ts'
import type { JSClass } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSFinalizationRegistryObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFinalizationRegistryObject.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionFactory } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionFactory.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObjectFactory } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSObjectFactory$BoundProto } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$BoundProto.d.ts'
import type { JSObjectFactory$RealmData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$RealmData.d.ts'
import type { JSPromiseObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSWebAssemblyInstance$Cache } from '../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyInstance$Cache.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSModuleRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/JSModuleRecord.d.ts'
import type { JSPrototypeData } from '../../../../../com/oracle/truffle/js/runtime/objects/JSPrototypeData.d.ts'
import type { JSShapeData } from '../../../../../com/oracle/truffle/js/runtime/objects/JSShapeData.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { StableContextOptionValue } from '../../../../../com/oracle/truffle/js/runtime/util/StableContextOptionValue.d.ts'
import type { StableContextOptionValue$UpdateKind } from '../../../../../com/oracle/truffle/js/runtime/util/StableContextOptionValue$UpdateKind.d.ts'
import type { TimeProfiler } from '../../../../../com/oracle/truffle/js/runtime/util/TimeProfiler.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSContext extends Object {
    static createContext(paramevaluator: Evaluator, paramlanguage: JavaScriptLanguage, paramenv: TruffleLanguage$Env): JSContext;
    constructor(evaluator: Evaluator, lang: JavaScriptLanguage, languageOptions: JSLanguageOptions, env: TruffleLanguage$Env)
    readonly allocationReporter: AllocationReporter;
    readonly arrayBufferFactory: JSObjectFactory;
    readonly arrayBufferNotShrunkAssumption: Assumption;
    readonly arrayFactory: JSObjectFactory;
    readonly arrayIteratorFactory: JSObjectFactory;
    readonly arrayPrototypeNoElementsAssumption: Assumption;
    readonly asyncContextSnapshotFactory: JSObjectFactory;
    readonly asyncContextVariableFactory: JSObjectFactory;
    readonly asyncFromSyncIteratorFactory: JSObjectFactory;
    // private asyncFunctionFactory: JSFunctionFactory;
    // private asyncGeneratorFunctionFactory: JSFunctionFactory;
    readonly asyncGeneratorObjectFactory: JSObjectFactory;
    readonly asyncGeneratorObjectPrototypeFactory: JSObjectFactory;
    readonly asyncIteratorFactory: JSObjectFactory;
    readonly asyncIteratorHelperObjectFactory: JSObjectFactory;
    readonly bigIntFactory: JSObjectFactory;
    readonly booleanFactory: JSObjectFactory;
    // private boundFunctionFactory: JSFunctionFactory;
    // private builtinFunctionData: JSFunctionData[];
    // private builtinFunctionDataMap: JavaMap<Builtin, JSFunctionData>;
    readonly callSiteFactory: JSObjectFactory;
    readonly collatorFactory: JSObjectFactory;
    // private constructorFactory: JSFunctionFactory;
    readonly dataViewFactory: JSObjectFactory;
    readonly dateFactory: JSObjectFactory;
    readonly dateTimeFormatFactory: JSObjectFactory;
    // private deferredModuleNamespaceFactory: JSObjectFactory$BoundProto;
    readonly dictionaryObjectFactory: JSObjectFactory;
    readonly directArrayBufferFactory: JSObjectFactory;
    readonly displayNamesFactory: JSObjectFactory;
    readonly durationFormatFactory: JSObjectFactory;
    readonly embedderData: Object;
    readonly emptyFunctionCallTarget: CallTarget;
    // private emptyShape: Shape;
    readonly emptyShapePrototypeInObject: Shape;
    readonly enumerateIteratorFactory: JSObjectFactory;
    // private errorObjectFactories: JSObjectFactory[];
    readonly evaluator: Evaluator;
    // private factoryCount: number;
    readonly fastArgumentsObjectAssumption: Assumption;
    readonly fastArrayAssumption: Assumption;
    readonly finalizationRegistryFactory: JSObjectFactory;
    readonly forInIteratorFactory: JSObjectFactory;
    // private functionFactory: JSFunctionFactory;
    // private generatorFunctionFactory: JSFunctionFactory;
    // private generatorNotConstructibleCallTargetCache: CallTarget;
    readonly generatorObjectFactory: JSObjectFactory;
    readonly generatorObjectPrototypeFactory: JSObjectFactory;
    readonly globalObjectFactory: JSObjectFactory;
    readonly globalObjectPristineAssumption: Assumption;
    readonly globalScopeShape: Shape;
    readonly importMetaInitializer: ImportMetaInitializer;
    // private importMetaInitializerNotUsedAssumption: Assumption;
    readonly importModuleDynamicallyCallback: (param0: JSRealm, param1: ScriptOrModule, param2: Module$ModuleRequest) => JSDynamicObject;
    // private importModuleDynamicallyCallbackNotUsedAssumption: Assumption;
    // private inObjectPrototypeData: JSPrototypeData;
    readonly interopArrayBufferFactory: JSObjectFactory;
    // private isMultiContext: boolean;
    readonly iteratorFactory: JSObjectFactory;
    readonly iteratorHelperObjectFactory: JSObjectFactory;
    readonly javaImporterFactory: JSObjectFactory;
    readonly javaPackageFactory: JSObjectFactory;
    // private jsAdapterFactory: JSObjectFactory;
    readonly language: JavaScriptLanguage;
    readonly languageOptions: JSLanguageOptions;
    readonly lazyRegexArrayFactory: JSObjectFactory;
    readonly lazyRegexIndicesArrayFactory: JSObjectFactory;
    readonly listFormatFactory: JSObjectFactory;
    readonly locale: Locale;
    readonly localeFactory: JSObjectFactory;
    readonly mapFactory: JSObjectFactory;
    readonly mapIteratorFactory: JSObjectFactory;
    // private moduleNamespaceFactory: JSObjectFactory$BoundProto;
    // private namedEmptyFunctionsDataMap: JavaMap<TruffleString, JSFunctionData>;
    readonly noSuchMethodUnusedAssumption: Assumption;
    readonly noSuchPropertyUnusedAssumption: Assumption;
    readonly nodeFactory: Object;
    readonly nonStrictArgumentsFactory: JSObjectFactory;
    // private notConstructibleCallTargetCache: CallTarget;
    // private nullPrototypeData: JSPrototypeData;
    readonly numberFactory: JSObjectFactory;
    readonly numberFormatFactory: JSObjectFactory;
    readonly optionDirectByteBuffer: StableContextOptionValue<boolean>;
    readonly optionRegexpStaticResult: StableContextOptionValue<boolean>;
    // private optionTimerResolution: StableContextOptionValue<number>;
    readonly optionV8CompatibilityMode: StableContextOptionValue<boolean>;
    readonly ordinaryObjectFactory: JSObjectFactory;
    readonly parserOptions: JSParserOptions;
    readonly pluralRulesFactory: JSObjectFactory;
    readonly prepareStackTraceCallback: PrepareStackTraceCallback;
    // private prepareStackTraceCallbackNotUsedAssumption: Assumption;
    readonly privateSymbolRegistry: JavaMap<TruffleString, Symbol>;
    readonly promiseFactory: JSObjectFactory;
    readonly promiseHook: PromiseHook;
    // private promiseHookNotUsedAssumption: Assumption;
    // private promiseRejectionTrackerNotUsedAssumption: Assumption;
    readonly promiseShapePrototypeInObject: Shape;
    // private protoGetterFunctionData: JSFunctionData;
    // private protoSetterFunctionData: JSFunctionData;
    readonly proxyFactory: JSObjectFactory;
    readonly rawJSONFactory: JSObjectFactory;
    // private realmInit: AtomicInteger;
    readonly regExpFactory: JSObjectFactory;
    readonly regExpGroupsEmptyShape: Shape;
    readonly regExpStaticResultUnusedAssumption: Assumption;
    readonly regexOptions: string;
    readonly regexValidateOptions: string;
    readonly relativeTimeFormatFactory: JSObjectFactory;
    readonly segmentIteratorFactory: JSObjectFactory;
    readonly segmenterFactory: JSObjectFactory;
    readonly segmentsFactory: JSObjectFactory;
    readonly setFactory: JSObjectFactory;
    readonly setIteratorFactory: JSObjectFactory;
    readonly shadowRealmFactory: JSObjectFactory;
    readonly shapeDataMap: JavaMap<Shape, JSShapeData>;
    readonly sharedArrayBufferFactory: JSObjectFactory;
    // private sharedRootNode: JSContext$SharedRootNode;
    readonly singleRealmAssumption: Assumption;
    readonly strictArgumentsFactory: JSObjectFactory;
    // private strictConstructorFactory: JSFunctionFactory;
    // private strictFunctionFactory: JSFunctionFactory;
    readonly stringFactory: JSObjectFactory;
    readonly stringIteratorFactory: JSObjectFactory;
    readonly supportedImportAttributes: TruffleString[];
    readonly symbolFactory: JSObjectFactory;
    readonly symbolIteratorThisGetterFunctionData: JSFunctionData;
    readonly symbolRegistry: JavaMap<TruffleString, Symbol>;
    readonly symbolSpeciesThisGetterFunctionData: JSFunctionData;
    readonly symbolUsageMarker: Object;
    // private tRegexEmptyResult: Object;
    readonly temporalDurationFactory: JSObjectFactory;
    readonly temporalInstantFactory: JSObjectFactory;
    readonly temporalPlainDateFactory: JSObjectFactory;
    readonly temporalPlainDateTimeFactory: JSObjectFactory;
    readonly temporalPlainMonthDayFactory: JSObjectFactory;
    readonly temporalPlainTimeFactory: JSObjectFactory;
    readonly temporalPlainYearMonthFactory: JSObjectFactory;
    readonly temporalZonedDateTimeFactory: JSObjectFactory;
    readonly textDecoderFactory: JSObjectFactory;
    readonly textEncoderFactory: JSObjectFactory;
    // private throwTypeErrorFunctionData: JSFunctionData;
    // private throwTypeErrorRestrictedPropertyFunctionData: JSFunctionData;
    readonly timeProfiler: TimeProfiler;
    // private typedArrayFactories: JSObjectFactory[];
    readonly typedArrayNotDetachedAssumption: Assumption;
    readonly uncheckedProxyHandlerFactory: JSObjectFactory;
    // private unregisteredSymbols: JavaMap<Symbol, boolean>;
    readonly weakMapFactory: JSObjectFactory;
    readonly weakRefFactory: JSObjectFactory;
    readonly weakSetFactory: JSObjectFactory;
    readonly webAssemblyCache: JSWebAssemblyInstance$Cache;
    readonly webAssemblyGlobalFactory: JSObjectFactory;
    readonly webAssemblyInstanceFactory: JSObjectFactory;
    readonly webAssemblyMemoryFactory: JSObjectFactory;
    readonly webAssemblyModuleFactory: JSObjectFactory;
    readonly webAssemblyTableFactory: JSObjectFactory;
    readonly workerFactory: JSObjectFactory;
    readonly wrapForAsyncIteratorFactory: JSObjectFactory;
    readonly wrapForIteratorFactory: JSObjectFactory;
    readonly wrappedFunctionFactory: JSFunctionFactory;
    addWeakRefTargetToSet(target: Object): boolean;
    adoptNode<T extends Node>(node: T): T;
    checkEvalAllowed(): void;
    clearSymbolInvertedMaps(): void;
    // private createAgent(): JSAgent;
    createEmptyShape(): Shape;
    // private createEmptyShapePrototypeInObject(): Shape;
    // private createGlobalScopeShape(): Shape;
    // private createPromiseShapePrototypeInObject(): Shape;
    createRealm(env: TruffleLanguage$Env): JSRealm;
    createRealm(env: TruffleLanguage$Env, parentRealm: JSRealm): JSRealm;
    enqueuePromiseJob(realm: JSRealm, job: JSFunctionObject): void;
    getAllocationReporter(): AllocationReporter;
    getArrayBufferFactory(): JSObjectFactory;
    getArrayBufferNotShrunkAssumption(): Assumption;
    getArrayBufferViewFactory(factory: TypedArrayFactory): JSObjectFactory;
    getArrayFactory(): JSObjectFactory;
    getArrayIteratorFactory(): JSObjectFactory;
    getArrayPrototypeNoElementsAssumption(): Assumption;
    getAsyncContextSnapshotFactory(): JSObjectFactory;
    getAsyncContextVariableFactory(): JSObjectFactory;
    getAsyncFromSyncIteratorFactory(): JSObjectFactory;
    getAsyncGeneratorObjectFactory(): JSObjectFactory;
    getAsyncGeneratorObjectPrototypeFactory(): JSObjectFactory;
    getAsyncIteratorFactory(): JSObjectFactory;
    getAsyncIteratorHelperObjectFactory(): JSObjectFactory;
    getBigIntFactory(): JSObjectFactory;
    getBooleanFactory(): JSObjectFactory;
    getBoundFunctionData(constructor: boolean, async: boolean): JSFunctionData;
    getBoundFunctionFactory(functionData: JSFunctionData): JSFunctionFactory;
    getBuiltinFunctionData(key: Builtin): JSFunctionData;
    getCallSiteFactory(): JSObjectFactory;
    getCollatorFactory(): JSObjectFactory;
    getDataViewFactory(): JSObjectFactory;
    getDateFactory(): JSObjectFactory;
    getDateTimeFormatFactory(): JSObjectFactory;
    getDictionaryObjectFactory(): JSObjectFactory;
    getDirectArrayBufferFactory(): JSObjectFactory;
    getDisplayNamesFactory(): JSObjectFactory;
    getDurationFormatFactory(): JSObjectFactory;
    getEcmaScriptVersion(): number;
    getEmbedderData(): Object;
    getEmptyFunctionCallTarget(): CallTarget;
    getEmptyShapeNullPrototype(): Shape;
    getEmptyShapePrototypeInObject(): Shape;
    getEnumerateIteratorFactory(): JSObjectFactory;
    getErrorFactory(type: JSErrorType): JSObjectFactory;
    getEvaluator(): Evaluator;
    getFastArgumentsObjectAssumption(): Assumption;
    getFastArrayAssumption(): Assumption;
    getFinalizationRegistryFactory(): JSObjectFactory;
    getForInIteratorFactory(): JSObjectFactory;
    getFunctionArgumentsLimit(): number;
    getFunctionCacheLimit(): number;
    getFunctionFactory(functionData: JSFunctionData): JSFunctionFactory;
    getGeneratorNotConstructibleCallTarget(): CallTarget;
    getGeneratorObjectFactory(): JSObjectFactory;
    getGeneratorObjectPrototypeFactory(): JSObjectFactory;
    getGlobalObjectFactory(): JSObjectFactory;
    getGlobalObjectPristineAssumption(): Assumption;
    getGlobalScopeShape(): Shape;
    getInteropArrayBufferFactory(): JSObjectFactory;
    getIteratorFactory(): JSObjectFactory;
    getIteratorHelperObjectFactory(): JSObjectFactory;
    getJSAdapterFactory(): JSObjectFactory;
    // private getJSAgent(): JSAgent;
    getJavaImporterFactory(): JSObjectFactory;
    getJavaPackageFactory(): JSObjectFactory;
    getLanguage(): JavaScriptLanguage;
    getLanguageOptions(): JSLanguageOptions;
    getLazyRegexArrayFactory(): JSObjectFactory;
    getLazyRegexIndicesArrayFactory(): JSObjectFactory;
    getListFormatFactory(): JSObjectFactory;
    getLocale(): Locale;
    getLocaleFactory(): JSObjectFactory;
    // private getLocaleImpl(): Locale;
    getMapFactory(): JSObjectFactory;
    getMapIteratorFactory(): JSObjectFactory;
    getModuleNamespaceFactory(deferred: boolean): JSObjectFactory$BoundProto;
    getNamedEmptyFunctionData(name: TruffleString): JSFunctionData;
    getNoSuchMethodUnusedAssumption(): Assumption;
    getNoSuchPropertyUnusedAssumption(): Assumption;
    getNodeFactory(): Object;
    getNonStrictArgumentsFactory(): JSObjectFactory;
    getNotConstructibleCallTarget(): CallTarget;
    getNumberFactory(): JSObjectFactory;
    getNumberFormatFactory(): JSObjectFactory;
    getOrCreateBuiltinFunctionData(key: JSContext$BuiltinFunctionKey, factory: (param0: JSContext) => JSFunctionData): JSFunctionData;
    getOrdinaryObjectFactory(): JSObjectFactory;
    getParserOptions(): JSParserOptions;
    getPluralRulesFactory(): JSObjectFactory;
    getPrepareStackTraceCallback(): PrepareStackTraceCallback;
    getPrivateSymbolRegistry(): JavaMap<TruffleString, Symbol>;
    getPromiseFactory(): JSObjectFactory;
    getPromiseShapePrototypeInObject(): Shape;
    getPropertyCacheLimit(): number;
    getProxyFactory(): JSObjectFactory;
    getRawJSONFactory(): JSObjectFactory;
    // private getRealm(): JSRealm;
    getRegExpFactory(): JSObjectFactory;
    getRegExpGroupsEmptyShape(): Shape;
    getRegExpStaticResultUnusedAssumption(): Assumption;
    getRegexOptions(): string;
    getRegexValidateOptions(): string;
    getRelativeTimeFormatFactory(): JSObjectFactory;
    getSegmentIteratorFactory(): JSObjectFactory;
    getSegmenterFactory(): JSObjectFactory;
    getSegmentsFactory(): JSObjectFactory;
    getSetFactory(): JSObjectFactory;
    getSetIteratorFactory(): JSObjectFactory;
    getShadowRealmFactory(): JSObjectFactory;
    getShapeDataMap(): JavaMap<Shape, JSShapeData>;
    getSharedArrayBufferFactory(): JSObjectFactory;
    getSingleRealmAssumption(): Assumption;
    getStrictArgumentsFactory(): JSObjectFactory;
    getStringFactory(): JSObjectFactory;
    getStringIteratorFactory(): JSObjectFactory;
    getStringLengthLimit(): number;
    getSupportedImportAttributes(): TruffleString[];
    getSymbolFactory(): JSObjectFactory;
    getSymbolIteratorThisGetterFunctionData(): JSFunctionData;
    getSymbolRegistry(): JavaMap<TruffleString, Symbol>;
    getSymbolSpeciesThisGetterFunctionData(): JSFunctionData;
    getSymbolUsageMarker(): Object;
    getTRegexEmptyResult(): Object;
    getTemporalDurationFactory(): JSObjectFactory;
    getTemporalInstantFactory(): JSObjectFactory;
    getTemporalPlainDateFactory(): JSObjectFactory;
    getTemporalPlainDateTimeFactory(): JSObjectFactory;
    getTemporalPlainMonthDayFactory(): JSObjectFactory;
    getTemporalPlainTimeFactory(): JSObjectFactory;
    getTemporalPlainYearMonthFactory(): JSObjectFactory;
    getTemporalZonedDateTimeFactory(): JSObjectFactory;
    getTextDecoderFactory(): JSObjectFactory;
    getTextEncoderFactory(): JSObjectFactory;
    getTimeProfiler(): TimeProfiler;
    getTimerResolution(): number;
    getTypedArrayNotDetachedAssumption(): Assumption;
    getUncheckedProxyHandlerFactory(): JSObjectFactory;
    getWeakMapFactory(): JSObjectFactory;
    getWeakRefFactory(): JSObjectFactory;
    getWeakSetFactory(): JSObjectFactory;
    getWebAssemblyCache(): JSWebAssemblyInstance$Cache;
    getWebAssemblyGlobalFactory(): JSObjectFactory;
    getWebAssemblyInstanceFactory(): JSObjectFactory;
    getWebAssemblyMemoryFactory(): JSObjectFactory;
    getWebAssemblyModuleFactory(): JSObjectFactory;
    getWebAssemblyTableFactory(): JSObjectFactory;
    getWorkerFactory(): JSObjectFactory;
    getWrapForAsyncIteratorFactory(): JSObjectFactory;
    getWrapForIteratorFactory(): JSObjectFactory;
    getWrappedFunctionFactory(): JSFunctionFactory;
    hasImportMetaInitializerBeenSet(): boolean;
    hasImportModuleDynamicallyCallbackBeenSet(): boolean;
    hasPromiseHook(): boolean;
    hostImportModuleDynamically(realm: JSRealm, referrer: ScriptOrModule, moduleRequest: Module$ModuleRequest): JSDynamicObject;
    // private invalidatePrepareStackTraceCallbackNotUsedAssumption(): void;
    // private invalidatePromiseHookNotUsedAssumption(): void;
    // private invalidatePromiseQueueNotUsedAssumption(): void;
    // private invalidatePromiseRejectionTrackerNotUsedAssumption(): void;
    isMultiContext(): boolean;
    isOptionAnnexB(): boolean;
    isOptionAsyncStackTraces(): boolean;
    isOptionDirectByteBuffer(): boolean;
    isOptionDisableWith(): boolean;
    isOptionForeignObjectPrototype(): boolean;
    isOptionIntl402(): boolean;
    isOptionMleBuiltin(): boolean;
    isOptionNashornCompatibilityMode(): boolean;
    isOptionParseOnly(): boolean;
    isOptionRegexpMatchIndices(): boolean;
    isOptionRegexpStaticResult(): boolean;
    isOptionRegexpUnicodeSets(): boolean;
    isOptionSharedArrayBuffer(): boolean;
    isOptionTemporal(): boolean;
    isOptionTopLevelAwait(): boolean;
    isOptionV8CompatibilityMode(): boolean;
    isSingleRealm(): boolean;
    makeEmptyShapeWithNullPrototype(jsclass: JSClass): Shape;
    makeEmptyShapeWithPrototypeInObject(jsclass: JSClass): Shape;
    neverCreatedChildRealms(): boolean;
    newObjectFactoryRealmData(): JSObjectFactory$RealmData;
    notifyImportMetaInitializer(importMeta: JSDynamicObject, module: JSModuleRecord): void;
    notifyPromiseHook(changeType: number, promise: JSDynamicObject): void;
    // private notifyPromiseHookImpl(changeType: number, promise: JSDynamicObject, parent: JSDynamicObject): void;
    notifyPromiseRejectionTracker(promise: JSPromiseObject, operation: number, value: Object, agent: JSAgent): void;
    processAllPendingPromiseJobs(realm: JSRealm): void;
    // private protoGetterFunction(): JSFunctionData;
    // private protoSetterFunction(): JSFunctionData;
    putBuiltinFunctionData(key: Builtin, functionData: JSFunctionData): void;
    registerFinalizationRegistry(finalizationRegistry: JSFinalizationRegistryObject): void;
    resetSymbolUsageMarker(): void;
    setAllocationReporter(env: TruffleLanguage$Env): void;
    setEmbedderData(embedderData: Object): void;
    setImportMetaInitializer(importMetaInitializer: ImportMetaInitializer): void;
    setImportModuleDynamicallyCallback(callback: (param0: JSRealm, param1: ScriptOrModule, param2: Module$ModuleRequest) => JSDynamicObject): void;
    setPrepareStackTraceCallback(callback: PrepareStackTraceCallback): void;
    setPromiseHook(promiseHook: PromiseHook): void;
    setPromiseRejectionTracker(agent: JSAgent, tracker: PromiseRejectionTracker): void;
    signalAsyncWaiterRecordUsage(): void;
    // private throwTypeErrorFunction(restrictedProperty: boolean): JSFunctionData;
    trackAllocation<T extends unknown>(object: T): T;
    unregisteredSymbolCreated(symbol: Symbol): void;
    updateStableOptions(contextOptions: JSContextOptions, kind: StableContextOptionValue$UpdateKind): void;
    usePromiseResolve(): boolean;
}