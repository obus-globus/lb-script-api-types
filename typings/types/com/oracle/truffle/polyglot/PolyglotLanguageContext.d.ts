import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage$Env } from '../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleLanguage$ExitMode } from '../../../../com/oracle/truffle/api/TruffleLanguage$ExitMode.d.ts'
import type { Frame } from '../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { LanguageInfo } from '../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { PolyglotContextConfig } from '../../../../com/oracle/truffle/polyglot/PolyglotContextConfig.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { PolyglotLanguageContext$Lazy } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext$Lazy.d.ts'
import type { PolyglotLanguageInstance } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageInstance.d.ts'
import type { PolyglotSourceCache$ParseOrigin } from '../../../../com/oracle/truffle/polyglot/PolyglotSourceCache$ParseOrigin.d.ts'
import type { PolyglotThreadInfo } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadInfo.d.ts'
import type { PolyglotThreadTask } from '../../../../com/oracle/truffle/polyglot/PolyglotThreadTask.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl$APIAccess } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$APIAccess.d.ts'
export class PolyglotLanguageContext extends Object implements PolyglotImpl$VMObject {
    constructor(context: PolyglotContextImpl, language: PolyglotLanguage)
    // private context: PolyglotContextImpl;
    // private created: boolean;
    // private creatingThread: Thread;
    // private env: TruffleLanguage$Env;
    // private eventsEnabled: boolean;
    // private exited: TruffleLanguage$ExitMode;
    // private finalized: boolean;
    // private hostBindings: Object;
    // private initializationFailed: boolean;
    // private initialized: boolean;
    // private initializingThread: Thread;
    // private language: PolyglotLanguage;
    // private languageServices: Object[];
    // private lazy: PolyglotLanguageContext$Lazy;
    asValue(guestValue: Object): Object;
    checkAccess(accessingLanguage: PolyglotLanguage): void;
    // private checkThreadAccess(localEnv: TruffleLanguage$Env): void;
    close(): void;
    dispose(): boolean;
    ensureCreated(accessingLanguage: PolyglotLanguage): void;
    ensureInitialized(accessingLanguage: PolyglotLanguage): boolean;
    ensureMultiThreadingInitialized(mustSucceed: boolean): void;
    enterThread(polyglotThreadTask: PolyglotThreadTask): Object[];
    exitContext(exitMode: TruffleLanguage$ExitMode, exitCode: number): boolean;
    finalizeContext(mustSucceed: boolean, notifyInstruments: boolean): boolean;
    getAPIAccess(): AbstractPolyglotImpl$APIAccess;
    getAccessibleLanguages(allowInternalAndDependent: boolean): JavaMap<string, LanguageInfo>;
    getContextImpl(): Object;
    getEngine(): PolyglotEngineImpl;
    getHostBindings(): Object;
    getImpl(): PolyglotImpl;
    getInternalFileSystemContext(): Object;
    getLanguageInstance(): PolyglotLanguageInstance;
    getLanguageInstanceOrNull(): PolyglotLanguageInstance;
    getLanguageView(receiver: Object): Object;
    getLanguageViewNoCheck(receiver: Object): Object;
    getOwnedAlivePolyglotThreads(): Thread[];
    getPolyglotExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    getPolyglotGuestBindings(): Object;
    getPublicFileSystemContext(): Object;
    getScopedView(location: Node, frame: Frame, value: Object): Object;
    initializeThreadIfNeeded(languageContextInitializationThread: Thread, currentThread: Thread, currentThreadInfo: PolyglotThreadInfo, mustSucceed: boolean, initThreadErrors: Throwable[]): void;
    isCreated(): boolean;
    isInitialized(): boolean;
    isPolyglotBindingsAccessAllowed(): boolean;
    isPolyglotEvalAllowed(info: LanguageInfo): boolean;
    leaveAndDisposePolyglotThread(prev: Object[], polyglotThreadTask: PolyglotThreadTask): void;
    lookupService<S extends unknown>(type: Class<S>): S;
    notifyDisposed(notifyInstruments: boolean): void;
    parseCached(origin: PolyglotSourceCache$ParseOrigin, accessingLanguage: PolyglotLanguage, source: Source, argumentNames: string[]): CallTarget;
    patch(newConfig: PolyglotContextConfig): boolean;
    patchInstance(hostInstance: PolyglotLanguageInstance): void;
    requireEnv(): TruffleLanguage$Env;
    toGuestValue(node: Node, receiver: Object): Object;
    toHostValues(values: Object[]): Object[];
    toHostValues(values: Object[], startIndex: number): Object[];
    toString(): string;
    // private validLanguageView(result: Object): boolean;
    // private validScopedView(result: Object, location: Node): boolean;
    waitForInitializationAndThen<T extends unknown>(pollSafepoint: boolean, action: () => T): T;
}