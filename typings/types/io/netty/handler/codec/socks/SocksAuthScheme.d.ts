import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksAuthScheme extends Enum<SocksAuthScheme> {
    static AUTH_GSSAPI: SocksAuthScheme;
    static AUTH_PASSWORD: SocksAuthScheme;
    static NO_AUTH: SocksAuthScheme;
    static UNKNOWN: SocksAuthScheme;
    static fromByte(paramarg0: number): SocksAuthScheme;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): SocksAuthScheme;
    static valueOf(paramarg0: string): SocksAuthScheme;
    static values(): SocksAuthScheme[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "NO_AUTH" | "AUTH_GSSAPI" | "AUTH_PASSWORD" | "UNKNOWN";
}