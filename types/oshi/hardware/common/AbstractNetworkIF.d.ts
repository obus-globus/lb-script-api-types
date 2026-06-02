import type { NetworkInterface } from '../../../java/net/NetworkInterface.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { NetworkIF } from '../../../oshi/hardware/NetworkIF.d.ts'
import type { NetworkIF$IfOperStatus } from '../../../oshi/hardware/NetworkIF$IfOperStatus.d.ts'
export abstract class AbstractNetworkIF extends Object implements NetworkIF {
    constructor(arg0: NetworkInterface)
    constructor(arg0: NetworkInterface, arg1: string)
    readonly displayName: string;
    readonly index: number;
    // private ipv4: string[];
    // private ipv6: string[];
    // private mac: string;
    // private mtu: number;
    readonly name: string;
    // private networkInterface: NetworkInterface;
    readonly prefixLengths: number[];
    readonly subnetMasks: number[];
    // private vmMacAddrProps: () => Properties;
    getDisplayName(): string;
    getIPv4addr(): string[];
    getIPv6addr(): string[];
    getIfAlias(): string;
    getIfOperStatus(): NetworkIF$IfOperStatus;
    getIfType(): number;
    getIndex(): number;
    getMTU(): number;
    getMacaddr(): string;
    getName(): string;
    getNdisPhysicalMediumType(): number;
    getPrefixLengths(): number[];
    getSubnetMasks(): number[];
    isConnectorPresent(): boolean;
    isKnownVmMacAddr(): boolean;
    queryNetworkInterface(): NetworkInterface;
    toString(): string;
}