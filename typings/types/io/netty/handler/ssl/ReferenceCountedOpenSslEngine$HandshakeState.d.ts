import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ReferenceCountedOpenSslEngine$HandshakeState extends Enum<ReferenceCountedOpenSslEngine$HandshakeState> {
    static FINISHED: ReferenceCountedOpenSslEngine$HandshakeState;
    static NOT_STARTED: ReferenceCountedOpenSslEngine$HandshakeState;
    static STARTED_EXPLICITLY: ReferenceCountedOpenSslEngine$HandshakeState;
    static STARTED_IMPLICITLY: ReferenceCountedOpenSslEngine$HandshakeState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ReferenceCountedOpenSslEngine$HandshakeState;
    static values(): ReferenceCountedOpenSslEngine$HandshakeState[];
    private constructor()
    name(): "NOT_STARTED" | "STARTED_IMPLICITLY" | "STARTED_EXPLICITLY" | "FINISHED";
}