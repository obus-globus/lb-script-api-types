import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsWorldSlotButton$Action extends Enum<RealmsWorldSlotButton$Action> {
    static NOTHING: RealmsWorldSlotButton$Action;
    static SWITCH_SLOT: RealmsWorldSlotButton$Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsWorldSlotButton$Action;
    static values(): RealmsWorldSlotButton$Action[];
    private constructor()
    name(): "NOTHING" | "SWITCH_SLOT";
}