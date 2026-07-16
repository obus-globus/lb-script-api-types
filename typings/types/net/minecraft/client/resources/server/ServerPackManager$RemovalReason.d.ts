import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { PackLoadFeedback$FinalResult } from '../../../../../net/minecraft/client/resources/server/PackLoadFeedback$FinalResult.d.ts'
export class ServerPackManager$RemovalReason extends Enum<ServerPackManager$RemovalReason> {
    static ACTIVATION_FAILED: ServerPackManager$RemovalReason;
    static DECLINED: ServerPackManager$RemovalReason;
    static DISCARDED: ServerPackManager$RemovalReason;
    static DOWNLOAD_FAILED: ServerPackManager$RemovalReason;
    static SERVER_REMOVED: ServerPackManager$RemovalReason;
    static SERVER_REPLACED: ServerPackManager$RemovalReason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerPackManager$RemovalReason;
    static values(): ServerPackManager$RemovalReason[];
    private constructor(serverResponse: PackLoadFeedback$FinalResult)
    // private serverResponse: PackLoadFeedback$FinalResult;
    name(): "DOWNLOAD_FAILED" | "ACTIVATION_FAILED" | "DECLINED" | "DISCARDED" | "SERVER_REMOVED" | "SERVER_REPLACED";
}