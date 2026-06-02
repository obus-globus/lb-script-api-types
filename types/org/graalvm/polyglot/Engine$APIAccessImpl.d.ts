import type { Class } from '../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Reference } from '../../../java/lang/ref/Reference.d.ts'
import type { AnnotatedElement } from '../../../java/lang/reflect/AnnotatedElement.d.ts'
import type { Executable } from '../../../java/lang/reflect/Executable.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Context } from '../../../org/graalvm/polyglot/Context.d.ts'
import type { Engine } from '../../../org/graalvm/polyglot/Engine.d.ts'
import type { HostAccess$MutableTargetMapping } from '../../../org/graalvm/polyglot/HostAccess$MutableTargetMapping.d.ts'
import type { Instrument } from '../../../org/graalvm/polyglot/Instrument.d.ts'
import type { Language } from '../../../org/graalvm/polyglot/Language.d.ts'
import type { PolyglotException$StackFrame } from '../../../org/graalvm/polyglot/PolyglotException$StackFrame.d.ts'
import type { Source } from '../../../org/graalvm/polyglot/Source.d.ts'
import type { Value } from '../../../org/graalvm/polyglot/Value.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
import type { AbstractPolyglotImpl$AbstractContextDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractContextDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractEngineDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractEngineDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractExceptionDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractExceptionDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractInstrumentDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractInstrumentDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractLanguageDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractLanguageDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceSectionDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceSectionDispatch.d.ts'
import type { AbstractPolyglotImpl$AbstractStackFrameImpl } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractStackFrameImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractValueDispatch } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractValueDispatch.d.ts'
import type { ByteSequence } from '../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class Engine$APIAccessImpl extends AbstractPolyglotImpl$APIAccess {
    constructor()
    allowsAccess(access: Object, element: AnnotatedElement): boolean;
    allowsAccessInheritance(access: Object): boolean;
    allowsImplementation(access: Object, type: Class<Object>): boolean;
    allowsPublicAccess(access: Object): boolean;
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
    callProxyHashMapGetHashValue(proxy: Object, key: Object): Object;
    callProxyHashMapHasHashEntry(proxy: Object, key: Object): Object;
    callProxyHashMapPutHashEntry(proxy: Object, key: Object, value: Object): void;
    callProxyHashMapRemoveHashEntry(proxy: Object, key: Object): Object;
    callProxyInstantAsInstant(proxy: Object): Instant;
    callProxyInstantiableNewInstance(proxy: Object, objects: Object[]): Object;
    callProxyIterableGetIterator(proxy: Object): Object;
    callProxyIteratorGetNext(proxy: Object): Object;
    callProxyIteratorHasNext(proxy: Object): Object;
    callProxyNativeObjectAsPointer(proxy: Object): Object;
    callProxyObjectGetMember(proxy: Object, member: string): Object;
    callProxyObjectHasMember(proxy: Object, member: string): Object;
    callProxyObjectMemberKeys(proxy: Object): Object;
    callProxyObjectPutMember(proxy: Object, member: string, value: Object): void;
    callProxyObjectRemoveMember(proxy: Object, member: string): boolean;
    callProxyTimeAsTime(proxy: Object): LocalTime;
    callProxyTimeZoneAsTimeZone(proxy: Object): ZoneId;
    callValueAs<T extends Object | number | string | boolean>(delegateBindings: Object, targetType: Class<T>): T;
    callValueAs<T extends Object | number | string | boolean>(delegateBindings: Object, rawType: Class<T>, type: Type): T;
    callValueAsString(value: Object): string;
    callValueGetArrayElement(value: Object, i: number): Object;
    callValueGetArraySize(value: Object): number;
    callValueGetMetaObject(delegateBindings: Object): Object;
    callValueIsString(value: Object): boolean;
    contextAsValue(context: Object, hostValue: Object): Object;
    contextClose(context: Object, cancelIfClosing: boolean): void;
    contextClosed(contextReference: Reference<Context>): void;
    contextEnter(context: Object): void;
    contextLeave(context: Object): void;
    createPolyglotAccess(bindingsAccess: string[], evalAccess: { [key: string]: string[] }): Object;
    engineClosed(engineReference: Reference<Engine>): void;
    getBindingsAccess(access: Object): string[];
    getByteSequenceClass(): Class<Object>;
    getContextDispatch(context: Object): AbstractPolyglotImpl$AbstractContextDispatch;
    getContextReceiver(context: Object): Object;
    getEngineDispatch(engine: Object): AbstractPolyglotImpl$AbstractEngineDispatch;
    getEngineReceiver(engine: Object): Object;
    getEnvironmentAccessInherit(): Object;
    getEnvironmentAccessNone(): Object;
    getEvalAccess(access: Object): { [key: string]: string[] };
    getEvalAccess(access: Object, language: string): string[];
    getHostAccessImpl(access: Object): Object;
    getHostAccessNone(): Object;
    getIOAccessAll(): Object;
    getIOAccessNone(): Object;
    getInstrumentDispatch(value: Object): AbstractPolyglotImpl$AbstractInstrumentDispatch;
    getInstrumentReceiver(instrument: Object): Object;
    getLanguageDispatch(value: Object): AbstractPolyglotImpl$AbstractLanguageDispatch;
    getLanguageReceiver(language: Object): Object;
    getMethodLookup(access: Object): MethodHandles$Lookup;
    getMutableTargetMappings(access: Object): HostAccess$MutableTargetMapping[];
    getPolyglotAccessAll(): Object;
    getPolyglotAccessNone(): Object;
    getPolyglotExceptionAPIContext(polyglotException: RuntimeException): Context;
    getPolyglotExceptionAPIEngine(polyglotException: RuntimeException): Engine;
    getPolyglotExceptionClass(): Class<Object>;
    getPolyglotExceptionReceiver(polyglot: RuntimeException): Object;
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
    isArrayAccessible(access: Object): boolean;
    isBigIntegerAccessibleAsNumber(access: Object): boolean;
    isBufferAccessible(access: Object): boolean;
    isByteSequence(origin: Object): boolean;
    isContext(context: Object): boolean;
    isEngine(engine: Object): boolean;
    isInstrument(instrument: Object): boolean;
    isIterableAccessible(access: Object): boolean;
    isIteratorAccessible(access: Object): boolean;
    isLanguage(language: Object): boolean;
    isListAccessible(access: Object): boolean;
    isMapAccessible(access: Object): boolean;
    isMethodScoped(access: Object, e: Executable): boolean;
    isMethodScopingEnabled(access: Object): boolean;
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
    newPolyglotStackTraceElement(dispatch: AbstractPolyglotImpl$AbstractStackFrameImpl, receiver: RuntimeException): PolyglotException$StackFrame;
    newResourceLimitsEvent(context: Object): Object;
    newSource(dispatch: AbstractPolyglotImpl$AbstractSourceDispatch, receiver: Object): Source;
    newSourceSection(source: Object, dispatch: AbstractPolyglotImpl$AbstractSourceSectionDispatch, receiver: Object): Object;
    newValue(dispatch: AbstractPolyglotImpl$AbstractValueDispatch, context: Object, receiver: Object, creatorContext: Context): Value;
    newValueArray(size: number): Object[];
    processReferenceQueue(): void;
    readOptionsFromSystemProperties(): { [key: string]: string };
    setHostAccessImpl(access: Object, impl: Object): void;
    toByteSequence(origin: Object): Object;
    validatePolyglotAccess(access: Object, languages: string[]): string;
}