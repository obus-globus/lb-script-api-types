import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Inet6Address$Inet6AddressHolder extends Object {
    private constructor()
    private constructor(arg0: number[], arg1: number, arg2: boolean, arg3: NetworkInterface, arg4: boolean)
    // private ipaddress: number[];
    // private scope_id: number;
    // private scope_id_set: boolean;
    // private scope_ifname: NetworkInterface;
    // private scope_ifname_set: boolean;
    equals(arg0: Object | null): boolean;
    getHostAddress(): string;
    hashCode(): number;
    init(arg0: number[], arg1: NetworkInterface): void;
    init(arg0: number[], arg1: number): void;
    isAnyLocalAddress(): boolean;
    isIPv4CompatibleAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isLoopbackAddress(): boolean;
    isMCGlobal(): boolean;
    isMCLinkLocal(): boolean;
    isMCNodeLocal(): boolean;
    isMCOrgLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMulticastAddress(): boolean;
    isSiteLocalAddress(): boolean;
    setAddr(arg0: number[]): void;
}