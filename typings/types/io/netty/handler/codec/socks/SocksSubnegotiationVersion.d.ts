import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksSubnegotiationVersion extends Enum<SocksSubnegotiationVersion> {
    static AUTH_PASSWORD: SocksSubnegotiationVersion;
    static UNKNOWN: SocksSubnegotiationVersion;
    static fromByte(paramarg0: number): SocksSubnegotiationVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): SocksSubnegotiationVersion;
    static valueOf(paramarg0: string): SocksSubnegotiationVersion;
    static values(): SocksSubnegotiationVersion[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "AUTH_PASSWORD" | "UNKNOWN";
}