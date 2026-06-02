import type { AbstractParser } from '../../../../com/oracle/js/parser/AbstractParser.d.ts'
import type { ParserContextBaseNode } from '../../../../com/oracle/js/parser/ParserContextBaseNode.d.ts'
import type { ExportNode } from '../../../../com/oracle/js/parser/ir/ExportNode.d.ts'
import type { ImportNode } from '../../../../com/oracle/js/parser/ir/ImportNode.d.ts'
import type { Module } from '../../../../com/oracle/js/parser/ir/Module.d.ts'
import type { Module$ExportEntry } from '../../../../com/oracle/js/parser/ir/Module$ExportEntry.d.ts'
import type { Module$ImportEntry } from '../../../../com/oracle/js/parser/ir/Module$ImportEntry.d.ts'
import type { Module$ModuleRequest } from '../../../../com/oracle/js/parser/ir/Module$ModuleRequest.d.ts'
import type { Scope } from '../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { EconomicMap } from '../../../../org/graalvm/collections/EconomicMap.d.ts'
export class ParserContextModuleNode extends ParserContextBaseNode {
    constructor(name: string, moduleScope: Scope, parser: AbstractParser)
    // private exportedNames: string[];
    // private exports: ExportNode[];
    // private importEntries: Module$ImportEntry[];
    // private importedLocalNames: EconomicMap<string, Module$ImportEntry>;
    // private imports: ImportNode[];
    // private indirectExportEntries: Module$ExportEntry[];
    // private localExportEntries: Module$ExportEntry[];
    // private moduleScope: Scope;
    // private name: string;
    // private parser: AbstractParser;
    // private requestedModules: Module$ModuleRequest[];
    // private starExportEntries: Module$ExportEntry[];
    addExport(exportNode: ExportNode): void;
    // private addExportedName(exportToken: number, exportEntry: Module$ExportEntry): void;
    addImport(importNode: ImportNode): void;
    addImportEntry(importEntry: Module$ImportEntry): void;
    addIndirectExportEntry(exportToken: number, exportEntry: Module$ExportEntry): void;
    addLocalExportEntry(exportToken: number, exportEntry: Module$ExportEntry): void;
    addModuleRequest(moduleRequest: Module$ModuleRequest): void;
    addStarExportEntry(exportEntry: Module$ExportEntry): void;
    createModule(): Module;
    getModuleName(): string;
    // private resolveExports(): void;
}