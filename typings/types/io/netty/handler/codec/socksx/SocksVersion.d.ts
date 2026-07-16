import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksVersion extends Enum<SocksVersion> {
    static SOCKS4a: SocksVersion;
    static SOCKS5: SocksVersion;
    static UNKNOWN: SocksVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: number): SocksVersion;
    static valueOf(paramarg0: string): SocksVersion;
    static values(): SocksVersion[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "SOCKS4a" | "SOCKS5" | "UNKNOWN";
}