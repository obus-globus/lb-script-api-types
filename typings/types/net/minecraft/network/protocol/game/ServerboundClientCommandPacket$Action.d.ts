import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundClientCommandPacket$Action extends Enum<ServerboundClientCommandPacket$Action> {
    static PERFORM_RESPAWN: ServerboundClientCommandPacket$Action;
    static REQUEST_GAMERULE_VALUES: ServerboundClientCommandPacket$Action;
    static REQUEST_STATS: ServerboundClientCommandPacket$Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServerboundClientCommandPacket$Action;
    static values(): ServerboundClientCommandPacket$Action[];
    private constructor()
    name(): "PERFORM_RESPAWN" | "REQUEST_STATS" | "REQUEST_GAMERULE_VALUES";
}