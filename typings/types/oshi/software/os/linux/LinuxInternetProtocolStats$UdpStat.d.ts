import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LinuxInternetProtocolStats$UdpStat extends Enum<LinuxInternetProtocolStats$UdpStat> {
    static IgnoredMulti: LinuxInternetProtocolStats$UdpStat;
    static InCsumErrors: LinuxInternetProtocolStats$UdpStat;
    static InDatagrams: LinuxInternetProtocolStats$UdpStat;
    static InErrors: LinuxInternetProtocolStats$UdpStat;
    static MemErrors: LinuxInternetProtocolStats$UdpStat;
    static NoPorts: LinuxInternetProtocolStats$UdpStat;
    static OutDatagrams: LinuxInternetProtocolStats$UdpStat;
    static RcvbufErrors: LinuxInternetProtocolStats$UdpStat;
    static SndbufErrors: LinuxInternetProtocolStats$UdpStat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LinuxInternetProtocolStats$UdpStat;
    static values(): LinuxInternetProtocolStats$UdpStat[];
    private constructor()
    name(): "OutDatagrams" | "InDatagrams" | "NoPorts" | "InErrors" | "RcvbufErrors" | "SndbufErrors" | "InCsumErrors" | "IgnoredMulti" | "MemErrors";
}