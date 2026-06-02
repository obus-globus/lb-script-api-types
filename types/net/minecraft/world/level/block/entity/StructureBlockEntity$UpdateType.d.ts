import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StructureBlockEntity$UpdateType extends Enum<StructureBlockEntity$UpdateType> {
    static LOAD_AREA: StructureBlockEntity$UpdateType;
    static SAVE_AREA: StructureBlockEntity$UpdateType;
    static SCAN_AREA: StructureBlockEntity$UpdateType;
    static UPDATE_DATA: StructureBlockEntity$UpdateType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StructureBlockEntity$UpdateType;
    static values(): (Object | null)[];
    private constructor()
    name(): "UPDATE_DATA" | "SAVE_AREA" | "LOAD_AREA" | "SCAN_AREA";
}