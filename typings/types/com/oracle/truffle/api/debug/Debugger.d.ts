import type { TruffleLanguage$Env } from '../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { SuspendedCallback } from '../../../../../com/oracle/truffle/api/debug/SuspendedCallback.d.ts'
import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Engine } from '../../../../../org/graalvm/polyglot/Engine.d.ts'
export class Debugger extends Object {
    static find(paramenv: TruffleLanguage$Env): Debugger;
    static find(paramenv: TruffleInstrument$Env): Debugger;
    static find(paramengine: Engine): Debugger;
    constructor(env: TruffleInstrument$Env)
    // private alwaysHaltBreakpoint: Breakpoint;
    // private breakpointAddedListeners: (param0: Breakpoint) => void[];
    // private breakpointRemovedListeners: (param0: Breakpoint) => void[];
    readonly breakpoints: Breakpoint[];
    // private disabledSteppingCount: ThreadLocal<number>;
    // private env: TruffleInstrument$Env;
    // private propSupport: Object[];
    // private sessions: DebuggerSession[];
    addBreakpointAddedListener(listener: (param0: Breakpoint) => void): void;
    addBreakpointRemovedListener(listener: (param0: Breakpoint) => void): void;
    disableStepping(): void;
    disposeBreakpoint(breakpoint: Breakpoint): void;
    disposedSession(session: DebuggerSession): void;
    getBreakpoints(): Breakpoint[];
    getEnv(): TruffleInstrument$Env;
    getInstrumenter(): Instrumenter;
    getRawBreakpoints(): Breakpoint[];
    getSessionCount(): number;
    getSteppingDisabledCount(): number;
    install(breakpoint: Breakpoint): Breakpoint;
    removeBreakpointAddedListener(listener: (param0: Breakpoint) => void): void;
    removeBreakpointRemovedListener(listener: (param0: Breakpoint) => void): void;
    restoreStepping(): void;
    startSession(callback: SuspendedCallback): DebuggerSession;
    startSession(callback: SuspendedCallback, ...defaultSourceElements: SourceElement[]): DebuggerSession;
}