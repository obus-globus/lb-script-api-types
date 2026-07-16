import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class StructureBlockType extends Enum<StructureBlockType> {
    static Corner: StructureBlockType;
    static Data: StructureBlockType;
    static Export: StructureBlockType;
    static Invalid: StructureBlockType;
    static Load: StructureBlockType;
    static Save: StructureBlockType;
    static getByName(paramarg0: string): StructureBlockType;
    static getByName(paramarg0: string, paramarg1: StructureBlockType): StructureBlockType;
    static getByValue(paramarg0: number): StructureBlockType;
    static getByValue(paramarg0: number, paramarg1: StructureBlockType): StructureBlockType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StructureBlockType;
    static values(): StructureBlockType[];
    private constructor(arg2: number)
    private constructor(arg2: StructureBlockType)
    readonly value: number;
    getValue(): number;
    name(): "Data" | "Save" | "Load" | "Corner" | "Invalid" | "Export";
}