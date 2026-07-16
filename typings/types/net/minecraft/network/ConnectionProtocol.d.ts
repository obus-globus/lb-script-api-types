import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ConnectionProtocol extends Enum<ConnectionProtocol> {
    static CONFIGURATION: ConnectionProtocol;
    static HANDSHAKING: ConnectionProtocol;
    static LOGIN: ConnectionProtocol;
    static PLAY: ConnectionProtocol;
    static STATUS: ConnectionProtocol;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ConnectionProtocol;
    static values(): ConnectionProtocol[];
    private constructor(id: string)
    // private id: string;
    id(): string;
    name(): "HANDSHAKING" | "PLAY" | "STATUS" | "LOGIN" | "CONFIGURATION";
}