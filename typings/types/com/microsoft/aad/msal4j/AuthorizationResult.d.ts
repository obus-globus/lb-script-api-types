import type { AuthorizationResult$AuthorizationStatus } from '../../../../com/microsoft/aad/msal4j/AuthorizationResult$AuthorizationStatus.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthorizationResult extends Object {
    private constructor()
    private constructor(arg0: AuthorizationResult$AuthorizationStatus, arg1: string, arg2: string)
    // private code: string;
    // private environment: string;
    // private error: string;
    // private errorDescription: string;
    // private state: string;
    // private status: AuthorizationResult$AuthorizationStatus;
    code(): string;
    code(arg0: string): void;
    environment(): string;
    environment(arg0: string): void;
    error(): string;
    error(arg0: string): void;
    errorDescription(): string;
    errorDescription(arg0: string): void;
    state(): string;
    state(arg0: string): void;
    status(): AuthorizationResult$AuthorizationStatus;
    status(arg0: AuthorizationResult$AuthorizationStatus): void;
}