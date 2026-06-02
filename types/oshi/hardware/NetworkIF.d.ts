import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { NetworkIF$IfOperStatus } from '../../oshi/hardware/NetworkIF$IfOperStatus.d.ts'
export interface NetworkIF extends Object{
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
    updateAttributes(): boolean;
}