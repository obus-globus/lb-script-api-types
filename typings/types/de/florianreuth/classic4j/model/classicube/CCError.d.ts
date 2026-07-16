import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CCError extends Enum<CCError> {
    static LOGIN_CODE: CCError;
    static PASSWORD: CCError;
    static TOKEN: CCError;
    static USERNAME: CCError;
    static VERIFICATION: CCError;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CCError;
    static values(): CCError[];
    private constructor(arg2: string)
    description: string;
    name(): "TOKEN" | "USERNAME" | "PASSWORD" | "VERIFICATION" | "LOGIN_CODE";
}