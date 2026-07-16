import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class StructureTemplateRequestOperation extends Enum<StructureTemplateRequestOperation> {
    static ExportFromLoadMode: StructureTemplateRequestOperation;
    static ExportFromSaveMode: StructureTemplateRequestOperation;
    static None: StructureTemplateRequestOperation;
    static QuerySavedStructure: StructureTemplateRequestOperation;
    static getByName(paramarg0: string): StructureTemplateRequestOperation;
    static getByName(paramarg0: string, paramarg1: StructureTemplateRequestOperation): StructureTemplateRequestOperation;
    static getByValue(paramarg0: number): StructureTemplateRequestOperation;
    static getByValue(paramarg0: number, paramarg1: StructureTemplateRequestOperation): StructureTemplateRequestOperation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StructureTemplateRequestOperation;
    static values(): StructureTemplateRequestOperation[];
    private constructor(arg2: number)
    private constructor(arg2: StructureTemplateRequestOperation)
    readonly value: number;
    getValue(): number;
    name(): "None" | "ExportFromSaveMode" | "ExportFromLoadMode" | "QuerySavedStructure";
}