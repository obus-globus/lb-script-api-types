import type { Breakpoint } from '../../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { DebugStackFrame } from '../../../../../../com/oracle/truffle/api/debug/DebugStackFrame.d.ts'
import type { DebuggerSession } from '../../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { BreakpointsHandler$ResolvedHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/BreakpointsHandler$ResolvedHandler.d.ts'
import type { BreakpointsHandler$SectionsCollector } from '../../../../../../com/oracle/truffle/tools/dap/server/BreakpointsHandler$SectionsCollector.d.ts'
import type { ExecutionContext } from '../../../../../../com/oracle/truffle/tools/dap/server/ExecutionContext.d.ts'
import type { Breakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/Breakpoint.d.ts'
import type { BreakpointLocation } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocation.d.ts'
import type { BreakpointLocationsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocationsArguments.d.ts'
import type { FunctionBreakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/FunctionBreakpoint.d.ts'
import type { SetBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetBreakpointsArguments.d.ts'
import type { SetFunctionBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetFunctionBreakpointsArguments.d.ts'
import type { SourceBreakpoint } from '../../../../../../com/oracle/truffle/tools/dap/types/SourceBreakpoint.d.ts'
import type { AtomicReference } from '../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BreakpointsHandler extends Object {
    constructor(context: ExecutionContext, debuggerSession: DebuggerSession)
    // private bp2IDs: Map<Breakpoint, number>;
    // private context: ExecutionContext;
    // private debuggerSession: DebuggerSession;
    // private exceptionBreakpoint: AtomicReference<Breakpoint>;
    // private functionBreakpoints: AtomicReference<Map<FunctionBreakpoint, number>>;
    // private functionNames: Map<Breakpoint, string>;
    // private hitConditions: Map<Breakpoint, string[]>;
    // private id2Bps: { [key: number]: Breakpoint };
    // private lastId: number;
    // private logMessages: Map<Breakpoint, string>;
    // private resolvedBreakpoints: Map<Breakpoint, SourceSection>;
    // private resolvedHandler: BreakpointsHandler$ResolvedHandler;
    // private sourceBreakpoints: { [key: string]: Map<SourceBreakpoint, number> };
    breakpointLocations(args: BreakpointLocationsArguments): BreakpointLocation[];
    checkConditions(bp: Breakpoint, topStackFrame: DebugStackFrame): boolean;
    // private collectSuspendableLocations(source: Source, startIndex: number, endIndex: number): BreakpointsHandler$SectionsCollector;
    // private findSuspendableLocations(range: SourceSection): SourceSection[];
    getLogMessage(bp: Breakpoint): string;
    setBreakpoints(args: SetBreakpointsArguments): Breakpoint[];
    setExceptionBreakpoint(caught: boolean, uncaught: boolean): void;
    setFunctionBreakpoints(args: SetFunctionBreakpointsArguments): Breakpoint[];
}