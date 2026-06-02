import type { TruffleContext } from '../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { DebugContext } from '../../../../../com/oracle/truffle/api/debug/DebugContext.d.ts'
import type { DebugContextsListener } from '../../../../../com/oracle/truffle/api/debug/DebugContextsListener.d.ts'
import type { DebugThreadsListener } from '../../../../../com/oracle/truffle/api/debug/DebugThreadsListener.d.ts'
import type { Debugger } from '../../../../../com/oracle/truffle/api/debug/Debugger.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { ContextsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { ThreadsListener } from '../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebuggerExecutionLifecycle extends Object implements ContextsListener, ThreadsListener {
    constructor(session: DebuggerSession)
    // private contextMap: Map<TruffleContext, DebugContext>;
    // private contextsBinding: EventBinding<ContextsListener>;
    // private contextsListener: DebugContextsListener;
    // private lifecycleInstrumenter: Instrumenter;
    // private session: DebuggerSession;
    // private threadsBinding: EventBinding<ThreadsListener>;
    // private threadsListener: DebugThreadsListener;
    getCachedDebugContext(context: TruffleContext): DebugContext;
    getDebugger(): Debugger;
    getSession(): DebuggerSession;
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
    onThreadDisposed(context: TruffleContext, thread: Thread): void;
    onThreadInitialized(context: TruffleContext, thread: Thread): void;
    setContextsListener(listener: DebugContextsListener, includeExistingContexts: boolean): void;
    setThreadsListener(listener: DebugThreadsListener, includeExistingThreads: boolean): void;
}