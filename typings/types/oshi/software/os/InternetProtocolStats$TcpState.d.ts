import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class InternetProtocolStats$TcpState extends Enum<InternetProtocolStats$TcpState> {
    static CLOSED: InternetProtocolStats$TcpState;
    static CLOSE_WAIT: InternetProtocolStats$TcpState;
    static CLOSING: InternetProtocolStats$TcpState;
    static ESTABLISHED: InternetProtocolStats$TcpState;
    static FIN_WAIT_1: InternetProtocolStats$TcpState;
    static FIN_WAIT_2: InternetProtocolStats$TcpState;
    static LAST_ACK: InternetProtocolStats$TcpState;
    static LISTEN: InternetProtocolStats$TcpState;
    static NONE: InternetProtocolStats$TcpState;
    static SYN_RECV: InternetProtocolStats$TcpState;
    static SYN_SENT: InternetProtocolStats$TcpState;
    static TIME_WAIT: InternetProtocolStats$TcpState;
    static UNKNOWN: InternetProtocolStats$TcpState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InternetProtocolStats$TcpState;
    static values(): InternetProtocolStats$TcpState[];
    private constructor()
    name(): "UNKNOWN" | "CLOSED" | "LISTEN" | "SYN_SENT" | "SYN_RECV" | "ESTABLISHED" | "FIN_WAIT_1" | "FIN_WAIT_2" | "CLOSE_WAIT" | "CLOSING" | "LAST_ACK" | "TIME_WAIT" | "NONE";
}