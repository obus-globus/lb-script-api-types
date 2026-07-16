import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class StructureTemplateResponseType extends Enum<StructureTemplateResponseType> {
    static Export: StructureTemplateResponseType;
    static None: StructureTemplateResponseType;
    static Query: StructureTemplateResponseType;
    static getByName(paramarg0: string): StructureTemplateResponseType;
    static getByName(paramarg0: string, paramarg1: StructureTemplateResponseType): StructureTemplateResponseType;
    static getByValue(paramarg0: number): StructureTemplateResponseType;
    static getByValue(paramarg0: number, paramarg1: StructureTemplateResponseType): StructureTemplateResponseType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StructureTemplateResponseType;
    static values(): StructureTemplateResponseType[];
    private constructor(arg2: number)
    private constructor(arg2: StructureTemplateResponseType)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Export" | "Query";
}