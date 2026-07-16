import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StructureBlockEntity$UpdateType extends Enum<StructureBlockEntity$UpdateType> {
    static LOAD_AREA: StructureBlockEntity$UpdateType;
    static SAVE_AREA: StructureBlockEntity$UpdateType;
    static SCAN_AREA: StructureBlockEntity$UpdateType;
    static UPDATE_DATA: StructureBlockEntity$UpdateType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StructureBlockEntity$UpdateType;
    static values(): StructureBlockEntity$UpdateType[];
    private constructor()
    name(): "UPDATE_DATA" | "SAVE_AREA" | "LOAD_AREA" | "SCAN_AREA";
}