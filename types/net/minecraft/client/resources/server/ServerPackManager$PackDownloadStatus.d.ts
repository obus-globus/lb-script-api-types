import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerPackManager$PackDownloadStatus extends Enum<ServerPackManager$PackDownloadStatus> {
    static DONE: ServerPackManager$PackDownloadStatus;
    static PENDING: ServerPackManager$PackDownloadStatus;
    static REQUESTED: ServerPackManager$PackDownloadStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerPackManager$PackDownloadStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "REQUESTED" | "PENDING" | "DONE";
}