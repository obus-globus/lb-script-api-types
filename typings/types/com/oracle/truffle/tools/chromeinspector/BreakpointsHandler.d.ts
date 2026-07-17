import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { DebugValue } from '../../../../../com/oracle/truffle/api/debug/DebugValue.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { BreakpointsHandler$ResolvedHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/BreakpointsHandler$ResolvedHandler.d.ts'
import type { ScriptsHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler.d.ts'
import type { ScriptsHandler$LoadScriptListener } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler$LoadScriptListener.d.ts'
import type { Params } from '../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { EventHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/events/EventHandler.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Location.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BreakpointsHandler extends Object {
    constructor(ds: DebuggerSession, slh: ScriptsHandler, eventHandler: () => EventHandler)
    // private bpIDs: JavaMap<Breakpoint, number>;
    // private ds: DebuggerSession;
    // private exceptionBreakpoint: AtomicReference<Breakpoint>;
    // private lastID: number;
    // private resolvedBreakpoints: JavaMap<number, SourceSection>;
    // private resolvedHandler: BreakpointsHandler$ResolvedHandler;
    // private scriptListeners: JavaMap<number, ScriptsHandler$LoadScriptListener>;
    // private slh: ScriptsHandler;
    createBreakpoint(location: Location, condition: string): Params;
    createFunctionBreakpoint(functionValue: DebugValue, condition: string): Params;
    createOneShotBreakpoint(location: Location): void;
    createURLBreakpoint(url: Object, line: number, column: number, condition: string): Params;
    getId(bp: Breakpoint): string;
    removeBreakpoint(idStr: string): boolean;
    removeFunctionBreakpoint(functionValue: DebugValue): void;
    setExceptionBreakpoint(caught: boolean, uncaught: boolean): void;
}