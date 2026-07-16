import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WorldSelectionList$EntryType extends Enum<WorldSelectionList$EntryType> {
    static SINGLEPLAYER: WorldSelectionList$EntryType;
    static UPLOAD_WORLD: WorldSelectionList$EntryType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WorldSelectionList$EntryType;
    static values(): WorldSelectionList$EntryType[];
    private constructor()
    name(): "SINGLEPLAYER" | "UPLOAD_WORLD";
}