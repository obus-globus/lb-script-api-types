import type { CloseReason$Codes$Companion } from '../../../io/ktor/websocket/CloseReason$Codes$Companion.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CloseReason$Codes extends Enum<CloseReason$Codes> {
    static CANNOT_ACCEPT: CloseReason$Codes;
    static CLOSED_ABNORMALLY: CloseReason$Codes;
    static Companion: CloseReason$Codes$Companion;
    static GOING_AWAY: CloseReason$Codes;
    static INTERNAL_ERROR: CloseReason$Codes;
    static NORMAL: CloseReason$Codes;
    static NOT_CONSISTENT: CloseReason$Codes;
    static NO_EXTENSION: CloseReason$Codes;
    static PROTOCOL_ERROR: CloseReason$Codes;
    static SERVICE_RESTART: CloseReason$Codes;
    static TOO_BIG: CloseReason$Codes;
    static TRY_AGAIN_LATER: CloseReason$Codes;
    static UNEXPECTED_CONDITION: CloseReason$Codes;
    static VIOLATED_POLICY: CloseReason$Codes;
    static getEntries(): CloseReason$Codes[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CloseReason$Codes;
    static values(): CloseReason$Codes[];
    private constructor(code: number)
    readonly code: number;
    name(): "NORMAL" | "GOING_AWAY" | "PROTOCOL_ERROR" | "CANNOT_ACCEPT" | "CLOSED_ABNORMALLY" | "NOT_CONSISTENT" | "VIOLATED_POLICY" | "TOO_BIG" | "NO_EXTENSION" | "INTERNAL_ERROR" | "SERVICE_RESTART" | "TRY_AGAIN_LATER";
}