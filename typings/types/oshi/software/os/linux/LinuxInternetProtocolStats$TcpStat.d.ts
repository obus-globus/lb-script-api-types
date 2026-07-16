import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LinuxInternetProtocolStats$TcpStat extends Enum<LinuxInternetProtocolStats$TcpStat> {
    static ActiveOpens: LinuxInternetProtocolStats$TcpStat;
    static AttemptFails: LinuxInternetProtocolStats$TcpStat;
    static CurrEstab: LinuxInternetProtocolStats$TcpStat;
    static EstabResets: LinuxInternetProtocolStats$TcpStat;
    static InCsumErrors: LinuxInternetProtocolStats$TcpStat;
    static InErrs: LinuxInternetProtocolStats$TcpStat;
    static InSegs: LinuxInternetProtocolStats$TcpStat;
    static MaxConn: LinuxInternetProtocolStats$TcpStat;
    static OutRsts: LinuxInternetProtocolStats$TcpStat;
    static OutSegs: LinuxInternetProtocolStats$TcpStat;
    static PassiveOpens: LinuxInternetProtocolStats$TcpStat;
    static RetransSegs: LinuxInternetProtocolStats$TcpStat;
    static RtoAlgorithm: LinuxInternetProtocolStats$TcpStat;
    static RtoMax: LinuxInternetProtocolStats$TcpStat;
    static RtoMin: LinuxInternetProtocolStats$TcpStat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LinuxInternetProtocolStats$TcpStat;
    static values(): LinuxInternetProtocolStats$TcpStat[];
    private constructor()
    name(): "RtoAlgorithm" | "RtoMin" | "RtoMax" | "MaxConn" | "ActiveOpens" | "PassiveOpens" | "AttemptFails" | "EstabResets" | "CurrEstab" | "InSegs" | "OutSegs" | "RetransSegs" | "InErrs" | "OutRsts" | "InCsumErrors";
}