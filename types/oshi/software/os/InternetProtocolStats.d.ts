import type { Object } from '../../../java/lang/Object.d.ts'
import type { InternetProtocolStats$IPConnection } from '../../../oshi/software/os/InternetProtocolStats$IPConnection.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
export interface InternetProtocolStats extends Object{
    getConnections(): InternetProtocolStats$IPConnection[];
    getTCPv4Stats(): InternetProtocolStats$TcpStats;
    getTCPv6Stats(): InternetProtocolStats$TcpStats;
    getUDPv4Stats(): InternetProtocolStats$UdpStats;
    getUDPv6Stats(): InternetProtocolStats$UdpStats;
}