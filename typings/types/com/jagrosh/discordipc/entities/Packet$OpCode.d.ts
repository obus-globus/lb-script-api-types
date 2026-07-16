import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Packet$OpCode extends Enum<Packet$OpCode> {
    static CLOSE: Packet$OpCode;
    static FRAME: Packet$OpCode;
    static HANDSHAKE: Packet$OpCode;
    static PING: Packet$OpCode;
    static PONG: Packet$OpCode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Packet$OpCode;
    static values(): Packet$OpCode[];
    private constructor()
    name(): "HANDSHAKE" | "FRAME" | "CLOSE" | "PING" | "PONG";
}