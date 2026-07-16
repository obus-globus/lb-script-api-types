import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundSeenAdvancementsPacket$Action extends Enum<ServerboundSeenAdvancementsPacket$Action> {
    static CLOSED_SCREEN: ServerboundSeenAdvancementsPacket$Action;
    static OPENED_TAB: ServerboundSeenAdvancementsPacket$Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServerboundSeenAdvancementsPacket$Action;
    static values(): ServerboundSeenAdvancementsPacket$Action[];
    private constructor()
    name(): "OPENED_TAB" | "CLOSED_SCREEN";
}