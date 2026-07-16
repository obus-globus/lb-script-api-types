import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundPlayerActionPacket$Action extends Enum<ServerboundPlayerActionPacket$Action> {
    static ABORT_DESTROY_BLOCK: ServerboundPlayerActionPacket$Action;
    static DROP_ALL_ITEMS: ServerboundPlayerActionPacket$Action;
    static DROP_ITEM: ServerboundPlayerActionPacket$Action;
    static RELEASE_USE_ITEM: ServerboundPlayerActionPacket$Action;
    static STAB: ServerboundPlayerActionPacket$Action;
    static START_DESTROY_BLOCK: ServerboundPlayerActionPacket$Action;
    static STOP_DESTROY_BLOCK: ServerboundPlayerActionPacket$Action;
    static SWAP_ITEM_WITH_OFFHAND: ServerboundPlayerActionPacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerboundPlayerActionPacket$Action;
    static values(): ServerboundPlayerActionPacket$Action[];
    private constructor()
    name(): "START_DESTROY_BLOCK" | "ABORT_DESTROY_BLOCK" | "STOP_DESTROY_BLOCK" | "DROP_ALL_ITEMS" | "DROP_ITEM" | "RELEASE_USE_ITEM" | "SWAP_ITEM_WITH_OFFHAND" | "STAB";
}