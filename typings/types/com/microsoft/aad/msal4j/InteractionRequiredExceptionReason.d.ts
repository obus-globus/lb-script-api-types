import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InteractionRequiredExceptionReason extends Enum<InteractionRequiredExceptionReason> {
    static ADDITIONAL_ACTION: InteractionRequiredExceptionReason;
    static BASIC_ACTION: InteractionRequiredExceptionReason;
    static CONSENT_REQUIRED: InteractionRequiredExceptionReason;
    static MESSAGE_ONLY: InteractionRequiredExceptionReason;
    static NONE: InteractionRequiredExceptionReason;
    static USER_PASSWORD_EXPIRED: InteractionRequiredExceptionReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InteractionRequiredExceptionReason;
    static values(): InteractionRequiredExceptionReason[];
    private constructor(arg2: string)
    // private error: string;
    name(): "NONE" | "MESSAGE_ONLY" | "BASIC_ACTION" | "ADDITIONAL_ACTION" | "CONSENT_REQUIRED" | "USER_PASSWORD_EXPIRED";
}