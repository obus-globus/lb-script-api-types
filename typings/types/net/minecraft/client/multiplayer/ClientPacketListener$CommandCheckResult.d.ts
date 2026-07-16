import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ClientPacketListener$CommandCheckResult extends Enum<ClientPacketListener$CommandCheckResult> {
    static NO_ISSUES: ClientPacketListener$CommandCheckResult;
    static PARSE_ERRORS: ClientPacketListener$CommandCheckResult;
    static PERMISSIONS_REQUIRED: ClientPacketListener$CommandCheckResult;
    static SIGNATURE_REQUIRED: ClientPacketListener$CommandCheckResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClientPacketListener$CommandCheckResult;
    static values(): ClientPacketListener$CommandCheckResult[];
    private constructor()
    name(): "NO_ISSUES" | "PARSE_ERRORS" | "SIGNATURE_REQUIRED" | "PERMISSIONS_REQUIRED";
}