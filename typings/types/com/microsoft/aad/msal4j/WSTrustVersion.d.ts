import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class WSTrustVersion extends Enum<WSTrustVersion> {
    static UNDEFINED: WSTrustVersion;
    static WSTRUST13: WSTrustVersion;
    static WSTRUST2005: WSTrustVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): WSTrustVersion;
    static values(): WSTrustVersion[];
    private constructor(arg2: string, arg3: string)
    // private responseSecurityTokenPath: string;
    // private responseTokenTypePath: string;
    responseSecurityTokenPath(): string;
    responseTokenTypePath(): string;
    name(): "WSTRUST13" | "WSTRUST2005" | "UNDEFINED";
}