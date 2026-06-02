import type { AbstractInternetProtocolStats } from '../../../../oshi/software/common/AbstractInternetProtocolStats.d.ts'
import type { InternetProtocolStats$IPConnection } from '../../../../oshi/software/os/InternetProtocolStats$IPConnection.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
export class LinuxInternetProtocolStats extends AbstractInternetProtocolStats {
    constructor()
    // private tcpColon: string;
    // private udp6: string;
    // private udpColon: string;
    getConnections(): InternetProtocolStats$IPConnection[];
    getTCPv4Stats(): InternetProtocolStats$TcpStats;
    getUDPv4Stats(): InternetProtocolStats$UdpStats;
    getUDPv6Stats(): InternetProtocolStats$UdpStats;
}