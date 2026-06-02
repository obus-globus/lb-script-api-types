import type { DebugScope } from '../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebugStackFrame } from '../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { DebugStackTraceElement } from '../../../../../com/oracle/truffle/api/debug/DebugStackTraceElement.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { BreakpointsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/BreakpointsHandler.d.ts'
import type { DebuggerSuspendedInfo } from '../../../../../com/oracle/truffle/tools/chromeinspector/DebuggerSuspendedInfo.d.ts'
import type { InspectorDebugger$CommandLazyResponse } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorDebugger$CommandLazyResponse.d.ts'
import type { InspectorDebugger$SuspendedCallbackImpl } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorDebugger$SuspendedCallbackImpl.d.ts'
import type { InspectorExecutionContext } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { InspectorExecutionContext$CancellableRunnable } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext$CancellableRunnable.d.ts'
import type { ScriptsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler.d.ts'
import type { Params } from '../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { DebuggerDomain } from '../../../../../com/oracle/truffle/tools/chromeinspector/domains/DebuggerDomain.d.ts'
import type { InspectServerSession$CommandPostProcessor } from '../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession$CommandPostProcessor.d.ts'
import type { CallArgument } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/CallArgument.d.ts'
import type { CallFrame } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/CallFrame.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Location.d.ts'
import type { Scope } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Scope.d.ts'
import type { Script } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Script.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Phaser } from '../../../../../java/util/concurrent/Phaser.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { JSONObject } from '../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InspectorDebugger extends DebuggerDomain {
    constructor(context: InspectorExecutionContext, suspend: boolean, domainLock: ReadWriteLock, sessionDisposal: () => void)
    // private breakpointsHandler: BreakpointsHandler;
    // private commandLazyResponse: InspectorDebugger$CommandLazyResponse;
    // private context: InspectorExecutionContext;
    // private debuggerSession: DebuggerSession;
    // private delayUnlock: AtomicBoolean;
    // private domainLock: ReadWriteLock;
    // private onSuspendPhaser: Phaser;
    // private running: boolean;
    // private runningUnwind: boolean;
    // private scriptsHandler: ScriptsHandler;
    // private sessionDisposal: () => void;
    // private silentResume: boolean;
    // private suspendLock: Lock;
    // private suspendLockCondition: Condition;
    // private suspendThreadExecutables: InspectorExecutionContext$CancellableRunnable[];
    // private suspendedCallback: InspectorDebugger$SuspendedCallbackImpl;
    // private suspendedInfo: DebuggerSuspendedInfo;
    // private uniqueId: number;
    // private addScope(scopes: Scope[], dscope: DebugScope, scopeType: string, scopeIndex: number, oldScopes: Scope[]): boolean;
    continueToLocation(location: Location, postProcessor: InspectServerSession$CommandPostProcessor): void;
    // private createCallFrames(frames: DebugStackFrame[], topAnchor: SuspendAnchor, returnValue: DebugValue): CallFrame[];
    // private createCallFrames(frames: DebugStackFrame[], topAnchor: SuspendAnchor, returnValue: DebugValue, oldFrames: CallFrame[]): CallFrame[];
    // private createScope(scopeType: string, dscope: DebugScope, index: number, lastId: string): Scope;
    doDisable(): void;
    doEnable(): void;
    // private doResume(): void;
    evaluateOnCallFrame(callFrameId: string, expressionOrig: string, objectGroup: string, includeCommandLineAPI: boolean, silent: boolean, returnByValue: boolean, generatePreview: boolean, throwOnSideEffect: boolean): Params;
    // private findAsyncStackTrace(asyncStacks: DebugStackTraceElement[][]): JSONObject;
    // private getParent(dscope: DebugScope): DebugScope;
    getPossibleBreakpoints(start: Location, end: Location, restrictToFunction: boolean): Params;
    // private getScript(scriptId: string): Script;
    getScriptSource(scriptId: string): Params;
    getUniqueDebuggerId(): string;
    notifyDisabled(): void;
    pause(): void;
    refreshCallFrames(frames: DebugStackFrame[], topAnchor: SuspendAnchor, oldFrames: CallFrame[]): CallFrame[];
    removeBreakpoint(id: string): void;
    restartFrame(cmdId: number, callFrameId: string, postProcessor: InspectServerSession$CommandPostProcessor): Params;
    resume(postProcessor: InspectServerSession$CommandPostProcessor): void;
    // private runSpecialFunctions(expression: string, cf: CallFrame, json: JSONObject): boolean;
    searchInContent(scriptId: string, query: string, caseSensitive: boolean, isRegex: boolean): Params;
    setAsyncCallStackDepth(maxDepth: number): void;
    setBlackboxPatterns(patterns: string[]): void;
    setBreakpoint(location: Location, condition: string): Params;
    setBreakpointByUrl(url: string, urlRegex: string, line: number, column: number, condition: string): Params;
    setBreakpointOnFunctionCall(functionObjectId: string, condition: string): Params;
    setBreakpointsActive(active: Optional<boolean>): void;
    setPauseOnExceptions(state: string): void;
    setReturnValue(newValue: CallArgument): void;
    setSkipAllPauses(skip: Optional<boolean>): void;
    setVariableValue(scopeNumber: number, variableName: string, newValue: CallArgument, callFrameId: string): void;
    sourceMatchesBlackboxPatterns(source: Source, patterns: Pattern[]): boolean;
    // private startSession(): void;
    stepInto(postProcessor: InspectServerSession$CommandPostProcessor): void;
    stepOut(postProcessor: InspectServerSession$CommandPostProcessor): void;
    stepOver(postProcessor: InspectServerSession$CommandPostProcessor): void;
}