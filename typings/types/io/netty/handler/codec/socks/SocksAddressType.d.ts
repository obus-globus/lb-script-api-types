import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksAddressType extends Enum<SocksAddressType> {
    static DOMAIN: SocksAddressType;
    static IPv4: SocksAddressType;
    static IPv6: SocksAddressType;
    static UNKNOWN: SocksAddressType;
    static fromByte(paramarg0: number): SocksAddressType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): SocksAddressType;
    static valueOf(paramarg0: string): SocksAddressType;
    static values(): SocksAddressType[];
    private constructor(arg2: number)
    // private b: number;
    byteValue(): number;
    name(): "IPv4" | "DOMAIN" | "IPv6" | "UNKNOWN";
}