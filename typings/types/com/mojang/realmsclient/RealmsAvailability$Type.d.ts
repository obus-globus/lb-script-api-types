import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RealmsAvailability$Type extends Enum<RealmsAvailability$Type> {
    static AUTHENTICATION_ERROR: RealmsAvailability$Type;
    static INCOMPATIBLE_CLIENT: RealmsAvailability$Type;
    static NEEDS_PARENTAL_CONSENT: RealmsAvailability$Type;
    static SUCCESS: RealmsAvailability$Type;
    static UNEXPECTED_ERROR: RealmsAvailability$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RealmsAvailability$Type;
    static values(): RealmsAvailability$Type[];
    private constructor()
    name(): "SUCCESS" | "INCOMPATIBLE_CLIENT" | "NEEDS_PARENTAL_CONSENT" | "AUTHENTICATION_ERROR" | "UNEXPECTED_ERROR";
}