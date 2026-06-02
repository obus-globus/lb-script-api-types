import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AuthenticationType extends Enum<AuthenticationType> {
    static Full: AuthenticationType;
    static Guest: AuthenticationType;
    static SelfSigned: AuthenticationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AuthenticationType;
    static values(): (Object | null)[];
    private constructor()
    name(): "Full" | "Guest" | "SelfSigned";
}