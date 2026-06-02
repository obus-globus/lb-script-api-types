import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WorldSelectionList$EntryType extends Enum<WorldSelectionList$EntryType> {
    static SINGLEPLAYER: WorldSelectionList$EntryType;
    static UPLOAD_WORLD: WorldSelectionList$EntryType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): WorldSelectionList$EntryType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SINGLEPLAYER" | "UPLOAD_WORLD";
}