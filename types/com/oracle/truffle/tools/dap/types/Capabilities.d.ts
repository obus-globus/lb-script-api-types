import type { ColumnDescriptor } from '../../../../../../com/oracle/truffle/tools/dap/types/ColumnDescriptor.d.ts'
import type { ExceptionBreakpointsFilter } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionBreakpointsFilter.d.ts'
import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Capabilities extends JSONBase {
    static create(): Capabilities;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAdditionalModuleColumns(): ColumnDescriptor[];
    getCompletionTriggerCharacters(): string[];
    getExceptionBreakpointFilters(): ExceptionBreakpointsFilter[];
    getSupportTerminateDebuggee(): boolean;
    getSupportedChecksumAlgorithms(): string[];
    getSupportsBreakpointLocationsRequest(): boolean;
    getSupportsCancelRequest(): boolean;
    getSupportsClipboardContext(): boolean;
    getSupportsCompletionsRequest(): boolean;
    getSupportsConditionalBreakpoints(): boolean;
    getSupportsConfigurationDoneRequest(): boolean;
    getSupportsDataBreakpoints(): boolean;
    getSupportsDelayedStackTraceLoading(): boolean;
    getSupportsDisassembleRequest(): boolean;
    getSupportsEvaluateForHovers(): boolean;
    getSupportsExceptionInfoRequest(): boolean;
    getSupportsExceptionOptions(): boolean;
    getSupportsFunctionBreakpoints(): boolean;
    getSupportsGotoTargetsRequest(): boolean;
    getSupportsHitConditionalBreakpoints(): boolean;
    getSupportsLoadedSourcesRequest(): boolean;
    getSupportsLogPoints(): boolean;
    getSupportsModulesRequest(): boolean;
    getSupportsReadMemoryRequest(): boolean;
    getSupportsRestartFrame(): boolean;
    getSupportsRestartRequest(): boolean;
    getSupportsSetExpression(): boolean;
    getSupportsSetVariable(): boolean;
    getSupportsStepBack(): boolean;
    getSupportsStepInTargetsRequest(): boolean;
    getSupportsTerminateRequest(): boolean;
    getSupportsTerminateThreadsRequest(): boolean;
    getSupportsValueFormattingOptions(): boolean;
    hashCode(): number;
    setAdditionalModuleColumns(additionalModuleColumns: ColumnDescriptor[]): Capabilities;
    setCompletionTriggerCharacters(completionTriggerCharacters: string[]): Capabilities;
    setExceptionBreakpointFilters(exceptionBreakpointFilters: ExceptionBreakpointsFilter[]): Capabilities;
    setSupportTerminateDebuggee(supportTerminateDebuggee: boolean): Capabilities;
    setSupportedChecksumAlgorithms(supportedChecksumAlgorithms: string[]): Capabilities;
    setSupportsBreakpointLocationsRequest(supportsBreakpointLocationsRequest: boolean): Capabilities;
    setSupportsCancelRequest(supportsCancelRequest: boolean): Capabilities;
    setSupportsClipboardContext(supportsClipboardContext: boolean): Capabilities;
    setSupportsCompletionsRequest(supportsCompletionsRequest: boolean): Capabilities;
    setSupportsConditionalBreakpoints(supportsConditionalBreakpoints: boolean): Capabilities;
    setSupportsConfigurationDoneRequest(supportsConfigurationDoneRequest: boolean): Capabilities;
    setSupportsDataBreakpoints(supportsDataBreakpoints: boolean): Capabilities;
    setSupportsDelayedStackTraceLoading(supportsDelayedStackTraceLoading: boolean): Capabilities;
    setSupportsDisassembleRequest(supportsDisassembleRequest: boolean): Capabilities;
    setSupportsEvaluateForHovers(supportsEvaluateForHovers: boolean): Capabilities;
    setSupportsExceptionInfoRequest(supportsExceptionInfoRequest: boolean): Capabilities;
    setSupportsExceptionOptions(supportsExceptionOptions: boolean): Capabilities;
    setSupportsFunctionBreakpoints(supportsFunctionBreakpoints: boolean): Capabilities;
    setSupportsGotoTargetsRequest(supportsGotoTargetsRequest: boolean): Capabilities;
    setSupportsHitConditionalBreakpoints(supportsHitConditionalBreakpoints: boolean): Capabilities;
    setSupportsLoadedSourcesRequest(supportsLoadedSourcesRequest: boolean): Capabilities;
    setSupportsLogPoints(supportsLogPoints: boolean): Capabilities;
    setSupportsModulesRequest(supportsModulesRequest: boolean): Capabilities;
    setSupportsReadMemoryRequest(supportsReadMemoryRequest: boolean): Capabilities;
    setSupportsRestartFrame(supportsRestartFrame: boolean): Capabilities;
    setSupportsRestartRequest(supportsRestartRequest: boolean): Capabilities;
    setSupportsSetExpression(supportsSetExpression: boolean): Capabilities;
    setSupportsSetVariable(supportsSetVariable: boolean): Capabilities;
    setSupportsStepBack(supportsStepBack: boolean): Capabilities;
    setSupportsStepInTargetsRequest(supportsStepInTargetsRequest: boolean): Capabilities;
    setSupportsTerminateRequest(supportsTerminateRequest: boolean): Capabilities;
    setSupportsTerminateThreadsRequest(supportsTerminateThreadsRequest: boolean): Capabilities;
    setSupportsValueFormattingOptions(supportsValueFormattingOptions: boolean): Capabilities;
}