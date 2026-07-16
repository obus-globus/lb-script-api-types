import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksProtocolVersion extends Enum<SocksProtocolVersion> {
    static SOCKS4a: SocksProtocolVersion;
    static SOCKS5: SocksProtocolVersion;
    static UNKNOWN: SocksProtocolVersion;
    static fromByte(paramarg0: number): SocksProtocolVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): SocksProtocolVersion;
    static valueOf(paramarg0: string): SocksProtocolVersion;
    static values(): SocksProtocolVersion[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "SOCKS4a" | "SOCKS5" | "UNKNOWN";
}