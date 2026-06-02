import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundSeenAdvancementsPacket$Action extends Enum<ServerboundSeenAdvancementsPacket$Action> {
    static CLOSED_SCREEN: ServerboundSeenAdvancementsPacket$Action;
    static OPENED_TAB: ServerboundSeenAdvancementsPacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerboundSeenAdvancementsPacket$Action;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPENED_TAB" | "CLOSED_SCREEN";
}