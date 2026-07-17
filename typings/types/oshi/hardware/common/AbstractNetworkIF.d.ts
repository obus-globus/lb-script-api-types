import type { JavaMap } from '../../../JavaMap.d.ts'
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
    // private vmMacAddrProps: () => JavaMap<any, any>;
    getBytesRecv(): number;
    getBytesSent(): number;
    getCollisions(): number;
    getDisplayName(): string;
    getIPv4addr(): string[];
    getIPv6addr(): string[];
    getIfAlias(): string;
    getIfOperStatus(): NetworkIF$IfOperStatus;
    getIfType(): number;
    getInDrops(): number;
    getInErrors(): number;
    getIndex(): number;
    getMTU(): number;
    getMacaddr(): string;
    getName(): string;
    getNdisPhysicalMediumType(): number;
    getOutErrors(): number;
    getPacketsRecv(): number;
    getPacketsSent(): number;
    getPrefixLengths(): number[];
    getSpeed(): number;
    getSubnetMasks(): number[];
    getTimeStamp(): number;
    isConnectorPresent(): boolean;
    isKnownVmMacAddr(): boolean;
    queryNetworkInterface(): NetworkInterface;
    toString(): string;
    updateAttributes(): boolean;
}