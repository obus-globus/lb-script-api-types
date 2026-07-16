import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BlockSetType$PressurePlateSensitivity extends Enum<BlockSetType$PressurePlateSensitivity> {
    static EVERYTHING: BlockSetType$PressurePlateSensitivity;
    static MOBS: BlockSetType$PressurePlateSensitivity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BlockSetType$PressurePlateSensitivity;
    static values(): BlockSetType$PressurePlateSensitivity[];
    private constructor()
    name(): "EVERYTHING" | "MOBS";
}