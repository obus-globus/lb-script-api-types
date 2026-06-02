import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Opcode extends Enum<Opcode> {
    static BINARY: Opcode;
    static CLOSING: Opcode;
    static CONTINUOUS: Opcode;
    static PING: Opcode;
    static PONG: Opcode;
    static TEXT: Opcode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Opcode;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONTINUOUS" | "TEXT" | "BINARY" | "PING" | "PONG" | "CLOSING";
}