import type { ExportNode } from '../../../../../com/oracle/js/parser/ir/ExportNode.d.ts'
import type { ImportNode } from '../../../../../com/oracle/js/parser/ir/ImportNode.d.ts'
import type { Module$ExportEntry } from '../../../../../com/oracle/js/parser/ir/Module$ExportEntry.d.ts'
import type { Module$ImportEntry } from '../../../../../com/oracle/js/parser/ir/Module$ImportEntry.d.ts'
import type { Module$ModuleRequest } from '../../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Module extends Object {
    static DEFAULT_EXPORT_BINDING_NAME: TruffleString;
    static DEFAULT_NAME: TruffleString;
    static DEFERRED_NAMESPACE_EXPORT_BINDING_NAME: TruffleString;
    static NAMESPACE_EXPORT_BINDING_NAME: TruffleString;
    static SOURCE_IMPORT_NAME: TruffleString;
    static STAR_NAME: TruffleString;
    constructor(requestedModules: Module$ModuleRequest[], importEntries: Module$ImportEntry[], localExportEntries: Module$ExportEntry[], indirectExportEntries: Module$ExportEntry[], starExportEntries: Module$ExportEntry[], imports: ImportNode[], exports: ExportNode[])
    readonly exports: ExportNode[];
    readonly importEntries: Module$ImportEntry[];
    readonly imports: ImportNode[];
    readonly indirectExportEntries: Module$ExportEntry[];
    readonly localExportEntries: Module$ExportEntry[];
    readonly requestedModules: Module$ModuleRequest[];
    readonly starExportEntries: Module$ExportEntry[];
    getExports(): ExportNode[];
    getImportEntries(): Module$ImportEntry[];
    getImports(): ImportNode[];
    getIndirectExportEntries(): Module$ExportEntry[];
    getLocalExportEntries(): Module$ExportEntry[];
    getRequestedModules(): Module$ModuleRequest[];
    getStarExportEntries(): Module$ExportEntry[];
    toString(): string;
}