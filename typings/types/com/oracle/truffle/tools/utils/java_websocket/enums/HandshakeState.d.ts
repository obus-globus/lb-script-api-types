import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class HandshakeState extends Enum<HandshakeState> {
    static MATCHED: HandshakeState;
    static NOT_MATCHED: HandshakeState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HandshakeState;
    static values(): HandshakeState[];
    private constructor()
    name(): "MATCHED" | "NOT_MATCHED";
}