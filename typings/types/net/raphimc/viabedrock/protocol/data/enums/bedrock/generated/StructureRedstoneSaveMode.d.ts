import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class StructureRedstoneSaveMode extends Enum<StructureRedstoneSaveMode> {
    static SavesToDisk: StructureRedstoneSaveMode;
    static SavesToMemory: StructureRedstoneSaveMode;
    static getByName(paramarg0: string): StructureRedstoneSaveMode;
    static getByName(paramarg0: string, paramarg1: StructureRedstoneSaveMode): StructureRedstoneSaveMode;
    static getByValue(paramarg0: number): StructureRedstoneSaveMode;
    static getByValue(paramarg0: number, paramarg1: StructureRedstoneSaveMode): StructureRedstoneSaveMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StructureRedstoneSaveMode;
    static values(): StructureRedstoneSaveMode[];
    private constructor(arg2: number)
    private constructor(arg2: StructureRedstoneSaveMode)
    readonly value: number;
    getValue(): number;
    name(): "SavesToMemory" | "SavesToDisk";
}