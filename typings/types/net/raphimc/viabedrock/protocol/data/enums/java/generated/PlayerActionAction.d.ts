import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerActionAction extends Enum<PlayerActionAction> {
    static ABORT_DESTROY_BLOCK: PlayerActionAction;
    static DROP_ALL_ITEMS: PlayerActionAction;
    static DROP_ITEM: PlayerActionAction;
    static RELEASE_USE_ITEM: PlayerActionAction;
    static STAB: PlayerActionAction;
    static START_DESTROY_BLOCK: PlayerActionAction;
    static STOP_DESTROY_BLOCK: PlayerActionAction;
    static SWAP_ITEM_WITH_OFFHAND: PlayerActionAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerActionAction;
    static values(): PlayerActionAction[];
    private constructor()
    name(): "START_DESTROY_BLOCK" | "ABORT_DESTROY_BLOCK" | "STOP_DESTROY_BLOCK" | "DROP_ALL_ITEMS" | "DROP_ITEM" | "RELEASE_USE_ITEM" | "SWAP_ITEM_WITH_OFFHAND" | "STAB";
}