import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BlockSetType$PressurePlateSensitivity extends Enum<BlockSetType$PressurePlateSensitivity> {
    static EVERYTHING: BlockSetType$PressurePlateSensitivity;
    static MOBS: BlockSetType$PressurePlateSensitivity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BlockSetType$PressurePlateSensitivity;
    static values(): BlockSetType$PressurePlateSensitivity[];
    private constructor()
    name(): "EVERYTHING" | "MOBS";
}