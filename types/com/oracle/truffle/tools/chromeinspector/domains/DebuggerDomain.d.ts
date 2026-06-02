import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { Domain } from '../../../../../../com/oracle/truffle/tools/chromeinspector/domains/Domain.d.ts'
import type { InspectServerSession$CommandPostProcessor } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession$CommandPostProcessor.d.ts'
import type { CallArgument } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/CallArgument.d.ts'
import type { Location } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/Location.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
export abstract class DebuggerDomain extends Domain {
    constructor()
    continueToLocation(location: Location, postProcessor: InspectServerSession$CommandPostProcessor): void;
    evaluateOnCallFrame(callFrameId: string, expression: string, objectGroup: string, includeCommandLineAPI: boolean, silent: boolean, returnByValue: boolean, generatePreview: boolean, throwOnSideEffect: boolean): Params;
    getPossibleBreakpoints(start: Location, end: Location, restrictToFunction: boolean): Params;
    getScriptSource(scriptId: string): Params;
    getUniqueDebuggerId(): string;
    pause(): void;
    removeBreakpoint(id: string): void;
    restartFrame(cmdId: number, callFrameId: string, postProcessor: InspectServerSession$CommandPostProcessor): Params;
    resume(postProcessor: InspectServerSession$CommandPostProcessor): void;
    resumed(): void;
    searchInContent(scriptId: string, query: string, caseSensitive: boolean, isRegex: boolean): Params;
    setAsyncCallStackDepth(maxDepth: number): void;
    setBlackboxPatterns(patterns: string[]): void;
    setBreakpoint(location: Location, condition: string): Params;
    setBreakpointByUrl(url: string, urlRegex: string, line: number, column: number, condition: string): Params;
    setBreakpointOnFunctionCall(functionObjectId: string, condition: string): Params;
    setBreakpointsActive(breakpointsActive: Optional<boolean>): void;
    setPauseOnExceptions(state: string): void;
    setReturnValue(newValue: CallArgument): void;
    setSkipAllPauses(skip: Optional<boolean>): void;
    setVariableValue(scopeNumber: number, variableName: string, newValue: CallArgument, callFrameId: string): void;
    stepInto(postProcessor: InspectServerSession$CommandPostProcessor): void;
    stepOut(postProcessor: InspectServerSession$CommandPostProcessor): void;
    stepOver(postProcessor: InspectServerSession$CommandPostProcessor): void;
}