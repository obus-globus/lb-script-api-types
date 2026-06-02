import type { JSONBase } from '../../../../../../com/oracle/truffle/tools/dap/types/JSONBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InitializeRequestArguments extends JSONBase {
    static create(paramadapterID: string): InitializeRequestArguments;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getAdapterID(): string;
    getClientID(): string;
    getClientName(): string;
    getColumnsStartAt1(): boolean;
    getLinesStartAt1(): boolean;
    getLocale(): string;
    getPathFormat(): string;
    getSupportsMemoryReferences(): boolean;
    getSupportsProgressReporting(): boolean;
    getSupportsRunInTerminalRequest(): boolean;
    getSupportsVariablePaging(): boolean;
    getSupportsVariableType(): boolean;
    hashCode(): number;
    setAdapterID(adapterID: string): InitializeRequestArguments;
    setClientID(clientID: string): InitializeRequestArguments;
    setClientName(clientName: string): InitializeRequestArguments;
    setColumnsStartAt1(columnsStartAt1: boolean): InitializeRequestArguments;
    setLinesStartAt1(linesStartAt1: boolean): InitializeRequestArguments;
    setLocale(locale: string): InitializeRequestArguments;
    setPathFormat(pathFormat: string): InitializeRequestArguments;
    setSupportsMemoryReferences(supportsMemoryReferences: boolean): InitializeRequestArguments;
    setSupportsProgressReporting(supportsProgressReporting: boolean): InitializeRequestArguments;
    setSupportsRunInTerminalRequest(supportsRunInTerminalRequest: boolean): InitializeRequestArguments;
    setSupportsVariablePaging(supportsVariablePaging: boolean): InitializeRequestArguments;
    setSupportsVariableType(supportsVariableType: boolean): InitializeRequestArguments;
}