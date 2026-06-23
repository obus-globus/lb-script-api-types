import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { DebuggerSuspendedInfo } from '../../../../../com/oracle/truffle/tools/chromeinspector/DebuggerSuspendedInfo.d.ts'
import type { InspectorExecutionContext$Listener } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext$Listener.d.ts'
import type { InspectorExecutionContext$SuspendedThreadExecutor } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext$SuspendedThreadExecutor.d.ts'
import type { RemoteObjectsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/RemoteObjectsHandler.d.ts'
import type { ScriptsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler.d.ts'
import type { SuspendThreadExecutable } from '../../../../../com/oracle/truffle/tools/chromeinspector/SuspendThreadExecutable.d.ts'
import type { CallArgument } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/CallArgument.d.ts'
import type { RemoteObject } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { CountDownLatch } from '../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class InspectorExecutionContext extends Object {
    static VALUE_NOT_READABLE: string;
    static resetIDs(): void;
    constructor(name: string, inspectInternal: boolean, inspectInitialization: boolean, env: TruffleInstrument$Env, sourceRoots: URI[], infoOut: PrintWriter, err: PrintWriter, suspensionTimeout: number)
    // private allowToStringSideEffects: boolean;
    readonly customObjectFormatterEnabled: boolean;
    readonly env: TruffleInstrument$Env;
    readonly err: PrintWriter;
    readonly id: number;
    // private infoOut: PrintWriter;
    readonly inspectInitialization: boolean;
    readonly inspectInternal: boolean;
    // private lastLanguage: string;
    // private lastMimeType: string;
    // private listeners: InspectorExecutionContext$Listener[];
    // private log: TruffleLogger;
    // private name: string;
    // private roh: RemoteObjectsHandler;
    // private runPermission: CountDownLatch;
    // private schBinding: EventBinding<ScriptsHandler>;
    // private schCounter: number;
    // private scriptsHandler: ScriptsHandler;
    // private sourceRoots: URI[];
    // private suspendThreadExecutor: InspectorExecutionContext$SuspendedThreadExecutor;
    // private suspendedInfo: DebuggerSuspendedInfo;
    // private suspensionTimeout: number;
    readonly synchronous: boolean;
    acquireScriptsHandler(): ScriptsHandler;
    acquireScriptsHandler(debuggerSession: DebuggerSession): ScriptsHandler;
    addListener(l: InspectorExecutionContext$Listener): void;
    areToStringSideEffectsAllowed(): boolean;
    canRun(): boolean;
    createAndRegister(value: DebugValue, generatePreview: boolean): RemoteObject;
    doRunIfWaitingForDebugger(): void;
    executeInSuspendThread<T extends unknown>(executable: SuspendThreadExecutable<T>): T;
    // private fireContextCreated(): void;
    getDebugValue(newValue: CallArgument, session: DebuggerSession): DebugValue;
    getEnv(): TruffleInstrument$Env;
    getErr(): PrintWriter;
    getId(): number;
    getInfoOutput(): PrintWriter;
    getLastLanguage(): string;
    getLastMimeType(): string;
    getRemoteObjectsHandler(): RemoteObjectsHandler;
    getSourcePath(): URI[];
    getSuspendedInfo(): DebuggerSuspendedInfo;
    getSuspensionTimeout(): number;
    isCustomObjectFormatterEnabled(): boolean;
    isInspectInitialization(): boolean;
    isInspectInternal(): boolean;
    isSynchronous(): boolean;
    logException(prefix: string, ex: Throwable): void;
    logException(ex: Throwable): void;
    logMessage(prefix: string, message: Object): void;
    releaseScriptsHandler(): void;
    removeListener(l: InspectorExecutionContext$Listener): void;
    reset(): void;
    setCustomObjectFormatterEnabled(enabled: boolean): void;
    setLastLanguage(language: string, mimeType: string): void;
    setSuspendThreadExecutor(suspendThreadExecutor: InspectorExecutionContext$SuspendedThreadExecutor): void;
    setSuspendedInfo(suspendedInfo: DebuggerSuspendedInfo): void;
    setSynchronous(synchronousExecution: boolean): void;
    setValue(debugValue: DebugValue, newValue: CallArgument): void;
    waitForRunPermission(): boolean;
    waitForRunPermission(timeoutMillis: number): boolean;
}