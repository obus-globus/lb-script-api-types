import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TCPPacket$TCPFlag extends Enum<TCPPacket$TCPFlag> {
    static ACK: TCPPacket$TCPFlag;
    static CWR: TCPPacket$TCPFlag;
    static ECE: TCPPacket$TCPFlag;
    static FIN: TCPPacket$TCPFlag;
    static PSH: TCPPacket$TCPFlag;
    static RST: TCPPacket$TCPFlag;
    static SYN: TCPPacket$TCPFlag;
    static URG: TCPPacket$TCPFlag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TCPPacket$TCPFlag;
    static values(): TCPPacket$TCPFlag[];
    private constructor(arg2: number)
    // private value: number;
    name(): "FIN" | "SYN" | "RST" | "PSH" | "ACK" | "URG" | "ECE" | "CWR";
}