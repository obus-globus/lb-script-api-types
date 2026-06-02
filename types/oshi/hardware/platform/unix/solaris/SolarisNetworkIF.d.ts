import type { NetworkInterface } from '../../../../../java/net/NetworkInterface.d.ts'
import type { NetworkIF } from '../../../../../oshi/hardware/NetworkIF.d.ts'
import type { AbstractNetworkIF } from '../../../../../oshi/hardware/common/AbstractNetworkIF.d.ts'
export class SolarisNetworkIF extends AbstractNetworkIF {
    static getNetworks(paramarg0: boolean): NetworkIF[];
    constructor(arg0: NetworkInterface)
    readonly bytesRecv: number;
    readonly bytesSent: number;
    readonly collisions: number;
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
    getInDrops(): number;
    getInErrors(): number;
    getOutErrors(): number;
    getPacketsRecv(): number;
    getPacketsSent(): number;
    getSpeed(): number;
    getTimeStamp(): number;
    updateAttributes(): boolean;
    // private updateAttributes2(): boolean;
}