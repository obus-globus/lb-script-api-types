import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundResourcePackPacket$Action extends Enum<ServerboundResourcePackPacket$Action> {
    static ACCEPTED: ServerboundResourcePackPacket$Action;
    static DECLINED: ServerboundResourcePackPacket$Action;
    static DISCARDED: ServerboundResourcePackPacket$Action;
    static DOWNLOADED: ServerboundResourcePackPacket$Action;
    static FAILED_DOWNLOAD: ServerboundResourcePackPacket$Action;
    static FAILED_RELOAD: ServerboundResourcePackPacket$Action;
    static INVALID_URL: ServerboundResourcePackPacket$Action;
    static SUCCESSFULLY_LOADED: ServerboundResourcePackPacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerboundResourcePackPacket$Action;
    static values(): ServerboundResourcePackPacket$Action[];
    private constructor()
    isTerminal(): boolean;
    name(): "SUCCESSFULLY_LOADED" | "DECLINED" | "FAILED_DOWNLOAD" | "ACCEPTED" | "DOWNLOADED" | "INVALID_URL" | "FAILED_RELOAD" | "DISCARDED";
}