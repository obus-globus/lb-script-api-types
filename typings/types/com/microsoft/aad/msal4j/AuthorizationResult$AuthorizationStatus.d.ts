import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AuthorizationResult$AuthorizationStatus extends Enum<AuthorizationResult$AuthorizationStatus> {
    static ProtocolError: AuthorizationResult$AuthorizationStatus;
    static Success: AuthorizationResult$AuthorizationStatus;
    static UnknownError: AuthorizationResult$AuthorizationStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AuthorizationResult$AuthorizationStatus;
    static values(): AuthorizationResult$AuthorizationStatus[];
    private constructor()
    name(): "Success" | "ProtocolError" | "UnknownError";
}