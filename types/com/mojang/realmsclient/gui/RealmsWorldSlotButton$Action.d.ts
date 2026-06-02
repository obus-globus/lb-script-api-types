import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsWorldSlotButton$Action extends Enum<RealmsWorldSlotButton$Action> {
    static NOTHING: RealmsWorldSlotButton$Action;
    static SWITCH_SLOT: RealmsWorldSlotButton$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RealmsWorldSlotButton$Action;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOTHING" | "SWITCH_SLOT";
}