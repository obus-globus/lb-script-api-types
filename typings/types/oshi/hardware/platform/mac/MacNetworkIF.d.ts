import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { NetStat$IFdata } from '../../../../oshi/driver/mac/net/NetStat$IFdata.d.ts'
import type { NetworkIF } from '../../../../oshi/hardware/NetworkIF.d.ts'
import type { AbstractNetworkIF } from '../../../../oshi/hardware/common/AbstractNetworkIF.d.ts'
export class MacNetworkIF extends AbstractNetworkIF {
    static getNetworks(paramarg0: boolean): NetworkIF[];
    constructor(arg0: NetworkInterface, arg1: { [key: number]: NetStat$IFdata })
    readonly bytesRecv: number;
    readonly bytesSent: number;
    readonly collisions: number;
    readonly ifType: number;
    readonly inDrops: number;
    readonly inErrors: number;
    readonly outErrors: number;
    readonly packetsRecv: number;
    readonly packetsSent: number;
    readonly speed: number;
    readonly timeStamp: number;
    getBytesRecv(): number;
    getBytesSent(): number;
    getCollisions(): number;
    getIfType(): number;
    getInDrops(): number;
    getInErrors(): number;
    getOutErrors(): number;
    getPacketsRecv(): number;
    getPacketsSent(): number;
    getSpeed(): number;
    getTimeStamp(): number;
    updateAttributes(): boolean;
    // private updateNetworkStats(arg0: { [key: number]: NetStat$IFdata }): boolean;
}