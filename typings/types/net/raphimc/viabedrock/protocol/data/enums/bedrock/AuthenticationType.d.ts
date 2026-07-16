import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AuthenticationType extends Enum<AuthenticationType> {
    static Full: AuthenticationType;
    static Guest: AuthenticationType;
    static SelfSigned: AuthenticationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AuthenticationType;
    static values(): AuthenticationType[];
    private constructor()
    name(): "Full" | "Guest" | "SelfSigned";
}