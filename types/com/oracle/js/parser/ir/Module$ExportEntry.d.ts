import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Module$ExportEntry extends Object {
    static exportDefault(paramlocalName: TruffleString): Module$ExportEntry;
    static exportIndirect(paramexportName: TruffleString, parammoduleRequest: Module$ModuleRequest, paramimportName: TruffleString): Module$ExportEntry;
    static exportSpecifier(paramexportName: TruffleString): Module$ExportEntry;
    static exportSpecifier(paramexportName: TruffleString, paramlocalName: TruffleString): Module$ExportEntry;
    static exportStarAsNamespaceFrom(paramexportName: TruffleString, parammoduleRequest: Module$ModuleRequest): Module$ExportEntry;
    static exportStarFrom(parammoduleRequest: Module$ModuleRequest): Module$ExportEntry;
    private constructor(exportName: TruffleString, moduleRequest: Module$ModuleRequest, importName: TruffleString, localName: TruffleString)
    readonly exportName: TruffleString;
    readonly importName: TruffleString;
    readonly localName: TruffleString;
    readonly moduleRequest: Module$ModuleRequest;
    getExportName(): TruffleString;
    getImportName(): TruffleString;
    getLocalName(): TruffleString;
    getModuleRequest(): Module$ModuleRequest;
    toString(): string;
    withFrom(moduleRequest: Module$ModuleRequest): Module$ExportEntry;
}