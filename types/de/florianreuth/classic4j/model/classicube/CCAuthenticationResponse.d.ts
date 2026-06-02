import type { CCError } from '../../../../../de/florianreuth/classic4j/model/classicube/CCError.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CCAuthenticationResponse extends Object {
    static fromJson(paramarg0: string): CCAuthenticationResponse;
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: string[])
    authenticated: boolean;
    errors: string[];
    token: string;
    username: string;
    errors(): CCError[];
    getErrorDisplay(): string;
    mfaRequired(): boolean;
    shouldError(): boolean;
}