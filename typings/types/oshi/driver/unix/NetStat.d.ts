import type { Object } from '../../../java/lang/Object.d.ts'
import type { InternetProtocolStats$IPConnection } from '../../../oshi/software/os/InternetProtocolStats$IPConnection.d.ts'
import type { InternetProtocolStats$TcpStats } from '../../../oshi/software/os/InternetProtocolStats$TcpStats.d.ts'
import type { InternetProtocolStats$UdpStats } from '../../../oshi/software/os/InternetProtocolStats$UdpStats.d.ts'
import type { Pair } from '../../../oshi/util/tuples/Pair.d.ts'
export class NetStat extends Object {
    static queryNetstat(): InternetProtocolStats$IPConnection[];
    static queryTcpStats(paramarg0: string): InternetProtocolStats$TcpStats;
    static queryTcpnetstat(): Pair<number, number>;
    static queryUdpStats(paramarg0: string): InternetProtocolStats$UdpStats;
    private constructor()
}