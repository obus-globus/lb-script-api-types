import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerPackManager$PackDownloadStatus extends Enum<ServerPackManager$PackDownloadStatus> {
    static DONE: ServerPackManager$PackDownloadStatus;
    static PENDING: ServerPackManager$PackDownloadStatus;
    static REQUESTED: ServerPackManager$PackDownloadStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServerPackManager$PackDownloadStatus;
    static values(): ServerPackManager$PackDownloadStatus[];
    private constructor()
    name(): "REQUESTED" | "PENDING" | "DONE";
}