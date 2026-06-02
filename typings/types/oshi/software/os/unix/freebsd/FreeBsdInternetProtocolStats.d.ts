import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { CLibrary$BsdTcpstat } from '../../../../../oshi/jna/platform/unix/CLibrary$BsdTcpstat.d.ts'
import type { CLibrary$BsdUdpstat } from '../../../../../oshi/jna/platform/unix/CLibrary$BsdUdpstat.d.ts'
import type { AbstractInternetProtocolStats } from '../../../../../oshi/software/common/AbstractInternetProtocolStats.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
import type { Pair } from '../../../../../oshi/util/tuples/Pair.d.ts'
export class FreeBsdInternetProtocolStats extends AbstractInternetProtocolStats {
    constructor()
    // private establishedv4v6: () => Pair<number, number>;
    // private tcpstat: () => CLibrary$BsdTcpstat;
    // private udpstat: () => CLibrary$BsdUdpstat;
    getTCPv4Stats(): InternetProtocolStats$TcpStats;
    getUDPv4Stats(): InternetProtocolStats$UdpStats;
    getUDPv6Stats(): InternetProtocolStats$UdpStats;
}