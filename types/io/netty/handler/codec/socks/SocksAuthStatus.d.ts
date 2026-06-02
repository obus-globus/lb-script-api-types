import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksAuthStatus extends Enum<SocksAuthStatus> {
    static FAILURE: SocksAuthStatus;
    static SUCCESS: SocksAuthStatus;
    static fromByte(paramarg0: number): SocksAuthStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): SocksAuthStatus;
    static valueOf(paramarg0: string): SocksAuthStatus;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "SUCCESS" | "FAILURE";
}