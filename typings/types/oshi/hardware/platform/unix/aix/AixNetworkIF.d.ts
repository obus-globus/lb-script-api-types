import type { Perfstat$perfstat_netinterface_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_netinterface_t.d.ts'
import type { NetworkInterface } from '../../../../../java/net/NetworkInterface.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { NetworkIF } from '../../../../../oshi/hardware/NetworkIF.d.ts'
import type { AbstractNetworkIF } from '../../../../../oshi/hardware/common/AbstractNetworkIF.d.ts'
export class AixNetworkIF extends AbstractNetworkIF {
    static getNetworks(paramarg0: boolean): NetworkIF[];
    constructor(arg0: NetworkInterface, arg1: () => Perfstat$perfstat_netinterface_t[])
    readonly bytesRecv: number;
    readonly bytesSent: number;
    readonly collisions: number;
    readonly inDrops: number;
    readonly inErrors: number;
    // private netstats: () => Perfstat$perfstat_netinterface_t[];
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
}