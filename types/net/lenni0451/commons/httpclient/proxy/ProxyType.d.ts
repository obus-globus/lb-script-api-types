import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Proxy$Type } from '../../../../../java/net/Proxy$Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ProxyType extends Enum<ProxyType> {
    static HTTP: ProxyType;
    static SOCKS4: ProxyType;
    static SOCKS5: ProxyType;
    static from(paramarg0: Proxy$Type): ProxyType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ProxyType;
    static values(): (Object | null)[];
    private constructor()
    name(): "HTTP" | "SOCKS4" | "SOCKS5";
}