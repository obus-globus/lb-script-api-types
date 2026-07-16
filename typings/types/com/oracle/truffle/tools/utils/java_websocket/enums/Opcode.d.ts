import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Opcode extends Enum<Opcode> {
    static BINARY: Opcode;
    static CLOSING: Opcode;
    static CONTINUOUS: Opcode;
    static PING: Opcode;
    static PONG: Opcode;
    static TEXT: Opcode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Opcode;
    static values(): Opcode[];
    private constructor()
    name(): "CONTINUOUS" | "TEXT" | "BINARY" | "PING" | "PONG" | "CLOSING";
}