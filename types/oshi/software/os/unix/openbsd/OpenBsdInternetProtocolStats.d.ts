import type { AbstractInternetProtocolStats } from '../../../../../oshi/software/common/AbstractInternetProtocolStats.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
export class OpenBsdInternetProtocolStats extends AbstractInternetProtocolStats {
    constructor()
    getTCPv4Stats(): InternetProtocolStats$TcpStats;
    getUDPv4Stats(): InternetProtocolStats$UdpStats;
}