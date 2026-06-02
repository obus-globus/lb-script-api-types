import type { Perfstat$perfstat_protocol_t } from '../../../../../com/sun/jna/platform/unix/aix/Perfstat$perfstat_protocol_t.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { AbstractInternetProtocolStats } from '../../../../../oshi/software/common/AbstractInternetProtocolStats.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
export class AixInternetProtocolStats extends AbstractInternetProtocolStats {
    constructor()
    // private ipstats: () => Perfstat$perfstat_protocol_t[];
    getTCPv4Stats(): InternetProtocolStats$TcpStats;
    getUDPv4Stats(): InternetProtocolStats$UdpStats;
}