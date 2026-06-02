import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerPackManager$PackPromptStatus extends Enum<ServerPackManager$PackPromptStatus> {
    static ALLOWED: ServerPackManager$PackPromptStatus;
    static DECLINED: ServerPackManager$PackPromptStatus;
    static PENDING: ServerPackManager$PackPromptStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerPackManager$PackPromptStatus;
    static values(): (Object | null)[];
    private constructor()
    name(): "PENDING" | "ALLOWED" | "DECLINED";
}