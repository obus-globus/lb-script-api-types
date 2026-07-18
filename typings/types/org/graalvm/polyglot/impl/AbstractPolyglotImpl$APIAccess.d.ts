import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { AnnotatedElement } from '../../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine } from '../../../../org/graalvm/polyglot/Engine.d.ts'
import type { HostAccess$MutableTargetMapping } from '../../../../org/graalvm/polyglot/HostAccess$MutableTargetMapping.d.ts'
import type { Instrument } from '../../../../org/graalvm/polyglot/Instrument.d.ts'
import type { Language } from '../../../../org/graalvm/polyglot/Language.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl$AbstractContextDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractContextDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractEngineDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractEngineDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractExceptionDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExceptionDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractInstrumentDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractInstrumentDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractLanguageDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractLanguageDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceSectionDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceSectionDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractStackFrameImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractStackFrameImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractValueDispatch } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractValueDispatch.d.ts'
import type { ByteSequence } from '../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export abstract class AbstractPolyglotImpl$APIAccess extends Object {
    constructor()
    allowsAccess(hostAccess: Object, element: AnnotatedElement): boolean;
    allowsAccessInheritance(hostAccess: Object): boolean;
    allowsImplementation(hostAccess: Object, type: Class<Object>): boolean;
    allowsPublicAccess(hostAccess: Object): boolean;
    asByteSequence(origin: Object): ByteSequence;
    byteSequenceByteAt(origin: Object, index: number): number;
    byteSequenceLength(origin: Object): number;
    byteSequenceSubSequence(origin: Object, index: number, length: number): Object;
    byteSequenceToByteArray(origin: Object): number[];
    callContextAsValue(current: Object, classOverrides: Object): Object;
    callContextGetCurrent(): Object;
    callProxyArrayGet(proxy: Object, index: number): Object;
    callProxyArrayRemove(proxy: Object, index: number): boolean;
    callProxyArraySet(proxy: Object, index: number, value: Object): void;
    callProxyArraySize(proxy: Object): Object;
    callProxyDateAsDate(proxy: Object): LocalDate;
    callProxyDurationAsDuration(proxy: Object): Duration;
    callProxyExecutableExecute(proxy: Object, objects: Object[]): Object;
    callProxyHashMapGetEntriesIterator(proxy: Object): Object;
    callProxyHashMapGetHashSize(proxy: Object): Object;
    callProxyHashMapGetHashValue(proxy: Object, object: Object): Object;
    callProxyHashMapHasHashEntry(proxy: Object, object: Object): Object;
    callProxyHashMapPutHashEntry(proxy: Object, object: Object, object2: Object): void;
    callProxyHashMapRemoveHashEntry(proxy: Object, object: Object): Object;
    callProxyInstantAsInstant(proxy: Object): Instant;
    callProxyInstantiableNewInstance(proxy: Object, objects: Object[]): Object;
    callProxyIterableGetIterator(proxy: Object): Object;
    callProxyIteratorGetNext(proxy: Object): Object;
    callProxyIteratorHasNext(proxy: Object): Object;
    callProxyNativeObjectAsPointer(proxy: Object): Object;
    callProxyObjectGetMember(proxy: Object, member: string): Object;
    callProxyObjectHasMember(proxy: Object, string: string): Object;
    callProxyObjectMemberKeys(proxy: Object): Object;
    callProxyObjectPutMember(proxy: Object, member: string, value: Object): void;
    callProxyObjectRemoveMember(proxy: Object, member: string): boolean;
    callProxyTimeAsTime(proxy: Object): LocalTime;
    callProxyTimeZoneAsTimeZone(proxy: Object): ZoneId;
    callValueAs<T extends unknown>(delegateBindings: Object, targetType: Class<T>): T;
    callValueAs<T extends unknown>(delegateBindings: Object, rawType: Class<T>, type: Type): T;
    callValueAsString(arrayElement: Object): string;
    callValueGetArrayElement(keys: Object, i: number): Object;
    callValueGetArraySize(keys: Object): number;
    callValueGetMetaObject(delegateBindings: Object): Object;
    callValueIsString(arrayElement: Object): boolean;
    contextAsValue(localContext: Object, hostValue: Object): Object;
    contextClose(localContext: Object, cancelIfClosing: boolean): void;
    contextClosed(contextReference: Reference<Context>): void;
    contextEnter(localContext: Object): void;
    contextLeave(localContext: Object): void;
    createPolyglotAccess(bindingsAccess: string[], evalAccess: JavaMap<string, string[]>): Object;
    engineClosed(engineReference: Reference<Engine>): void;
    getBindingsAccess(polyglotAccess: Object): string[];
    getByteSequenceClass(): Class<Object>;
    getContextDispatch(context: Object): AbstractPolyglotImpl$AbstractContextDispatch;
    getContextReceiver(context: Object): Object;
    getEngineDispatch(engine: Object): AbstractPolyglotImpl$AbstractEngineDispatch;
    getEngineReceiver(engine: Object): Object;
    getEnvironmentAccessInherit(): Object;
    getEnvironmentAccessNone(): Object;
    getEvalAccess(polyglotAccess: Object): JavaMap<string, string[]>;
    getEvalAccess(polyglotAccess: Object, language: string): string[];
    getHostAccessImpl(hostAccess: Object): Object;
    getHostAccessNone(): Object;
    getIOAccessAll(): Object;
    getIOAccessNone(): Object;
    getInstrumentDispatch(value: Object): AbstractPolyglotImpl$AbstractInstrumentDispatch;
    getInstrumentReceiver(instrument: Object): Object;
    getLanguageDispatch(value: Object): AbstractPolyglotImpl$AbstractLanguageDispatch;
    getLanguageReceiver(language: Object): Object;
    getMethodLookup(hostAccess: Object): MethodHandles$Lookup;
    getMutableTargetMappings(access: Object): HostAccess$MutableTargetMapping[];
    getPolyglotAccessAll(): Object;
    getPolyglotAccessNone(): Object;
    getPolyglotExceptionAPIContext(polyglotException: RuntimeException): Context;
    getPolyglotExceptionAPIEngine(polyglotException: RuntimeException): Engine;
    getPolyglotExceptionClass(): Class<Object>;
    getPolyglotExceptionReceiver(exception: RuntimeException): Object;
    getProxyArrayClass(): Class<Object>;
    getProxyClass(): Class<Object>;
    getProxyDateClass(): Class<Object>;
    getProxyDurationClass(): Class<Object>;
    getProxyExecutableClass(): Class<Object>;
    getProxyHashMapClass(): Class<Object>;
    getProxyInstantClass(): Class<Object>;
    getProxyInstantiableClass(): Class<Object>;
    getProxyIterableClass(): Class<Object>;
    getProxyIteratorClass(): Class<Object>;
    getProxyNativeObjectClass(): Class<Object>;
    getProxyObjectClass(): Class<Object>;
    getProxyTimeClass(): Class<Object>;
    getProxyTimeZoneClass(): Class<Object>;
    getResourceLimitsReceiver(value: Object): Object;
    getSourceDispatch(source: Object): AbstractPolyglotImpl$AbstractSourceDispatch;
    getSourceReceiver(source: Object): Object;
    getSourceSectionDispatch(sourceSection: Object): AbstractPolyglotImpl$AbstractSourceSectionDispatch;
    getSourceSectionReceiver(sourceSection: Object): Object;
    getSourceSectionSource(sourceSection: Object): Object;
    getStackFrameDispatch(value: Object): AbstractPolyglotImpl$AbstractStackFrameImpl;
    getStackFrameReceiver(value: Object): AbstractPolyglotImpl$AbstractStackFrameImpl;
    getTargetMappings(hostAccess: Object): Object[];
    getValueClass(): Class<Object>;
    getValueContext(value: Object): Object;
    getValueDispatch(value: Object): AbstractPolyglotImpl$AbstractValueDispatch;
    getValueReceiver(value: Object): Object;
    isArrayAccessible(hostAccess: Object): boolean;
    isBigIntegerAccessibleAsNumber(hostAccess: Object): boolean;
    isBufferAccessible(hostAccess: Object): boolean;
    isByteSequence(origin: Object): boolean;
    isContext(context: Object): boolean;
    isEngine(engine: Object): boolean;
    isInstrument(instrument: Object): boolean;
    isIterableAccessible(hostAccess: Object): boolean;
    isIteratorAccessible(hostAccess: Object): boolean;
    isLanguage(language: Object): boolean;
    isListAccessible(hostAccess: Object): boolean;
    isMapAccessible(hostAccess: Object): boolean;
    isMethodScoped(hostAccess: Object, e: Executable): boolean;
    isMethodScopingEnabled(hostAccess: Object): boolean;
    isPolyglotException(exception: Object): boolean;
    isProxy(proxy: Object): boolean;
    isProxyArray(proxy: Object): boolean;
    isProxyDate(proxy: Object): boolean;
    isProxyDuration(proxy: Object): boolean;
    isProxyExecutable(proxy: Object): boolean;
    isProxyHashMap(proxy: Object): boolean;
    isProxyInstant(proxy: Object): boolean;
    isProxyInstantiable(proxy: Object): boolean;
    isProxyIterable(proxy: Object): boolean;
    isProxyIterator(proxy: Object): boolean;
    isProxyNativeObject(proxy: Object): boolean;
    isProxyObject(proxy: Object): boolean;
    isProxyTime(proxy: Object): boolean;
    isProxyTimeZone(proxy: Object): boolean;
    isSource(value: Object): boolean;
    isSourceSection(value: Object): boolean;
    isValue(value: Object): boolean;
    newContext(dispatch: AbstractPolyglotImpl$AbstractContextDispatch, receiver: Object, engine: Engine, registerInActiveContexts: boolean): Context;
    newEngine(dispatch: AbstractPolyglotImpl$AbstractEngineDispatch, receiver: Object, registerInActiveEngines: boolean): Engine;
    newInnerContext(dispatch: AbstractPolyglotImpl$AbstractContextDispatch, receiver: Object, parentContext: Context, engine: Engine): Context;
    newInstrument(dispatch: AbstractPolyglotImpl$AbstractInstrumentDispatch, receiver: Object, engine: Engine): Instrument;
    newLanguage(dispatch: AbstractPolyglotImpl$AbstractLanguageDispatch, receiver: Object, engine: Engine): Language;
    newLanguageException(message: string, dispatch: AbstractPolyglotImpl$AbstractExceptionDispatch, receiver: Object, anchor: Object): RuntimeException;
    newPolyglotStackTraceElement(dispatch: AbstractPolyglotImpl$AbstractStackFrameImpl, polyglotException: RuntimeException): Object;
    newResourceLimitsEvent(context: Object): Object;
    newSource(dispatch: AbstractPolyglotImpl$AbstractSourceDispatch, receiver: Object): Object;
    newSourceSection(source: Object, dispatch: AbstractPolyglotImpl$AbstractSourceSectionDispatch, receiver: Object): Object;
    newValue(dispatch: AbstractPolyglotImpl$AbstractValueDispatch, context: Object, receiver: Object, creatorContext: Context): Value;
    newValueArray(size: number): Object[];
    processReferenceQueue(): void;
    readOptionsFromSystemProperties(): JavaMap<string, string>;
    setHostAccessImpl(hostAccess: Object, impl: Object): void;
    toByteSequence(origin: Object): Object;
    validatePolyglotAccess(polyglotAccess: Object, language: string[]): string;
}