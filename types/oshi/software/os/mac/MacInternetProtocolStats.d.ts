import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { CLibrary$BsdIp6stat } from '../../../../oshi/jna/platform/unix/CLibrary$BsdIp6stat.d.ts'
import type { CLibrary$BsdIpstat } from '../../../../oshi/jna/platform/unix/CLibrary$BsdIpstat.d.ts'
import type { CLibrary$BsdTcpstat } from '../../../../oshi/jna/platform/unix/CLibrary$BsdTcpstat.d.ts'
import type { CLibrary$BsdUdpstat } from '../../../../oshi/jna/platform/unix/CLibrary$BsdUdpstat.d.ts'
import type { AbstractInternetProtocolStats } from '../../../../oshi/software/common/AbstractInternetProtocolStats.d.ts'
import type { InternetProtocolStats$IPConnection } from '../../../../oshi/software/os/InternetProtocolStats$IPConnection.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class MacInternetProtocolStats extends AbstractInternetProtocolStats {
    static queryUdpstat(): CLibrary$BsdUdpstat;
    constructor(arg0: boolean)
    // private establishedv4v6: () => Pair<number, number>;
    // private ip6stat: () => CLibrary$BsdIp6stat;
    // private ipstat: () => CLibrary$BsdIpstat;
    // private isElevated: boolean;
    // private tcpstat: () => CLibrary$BsdTcpstat;
    // private udpstat: () => CLibrary$BsdUdpstat;
    getConnections(): InternetProtocolStats$IPConnection[];
    getTCPv4Stats(): InternetProtocolStats$TcpStats;
    getTCPv6Stats(): InternetProtocolStats$TcpStats;
    getUDPv4Stats(): InternetProtocolStats$UdpStats;
    getUDPv6Stats(): InternetProtocolStats$UdpStats;
}