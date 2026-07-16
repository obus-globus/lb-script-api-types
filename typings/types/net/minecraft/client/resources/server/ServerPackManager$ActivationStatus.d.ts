import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerPackManager$ActivationStatus extends Enum<ServerPackManager$ActivationStatus> {
    static ACTIVE: ServerPackManager$ActivationStatus;
    static INACTIVE: ServerPackManager$ActivationStatus;
    static PENDING: ServerPackManager$ActivationStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerPackManager$ActivationStatus;
    static values(): ServerPackManager$ActivationStatus[];
    private constructor()
    name(): "INACTIVE" | "PENDING" | "ACTIVE";
}