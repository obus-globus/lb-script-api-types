import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SSLEngineResult$HandshakeStatus extends Enum<SSLEngineResult$HandshakeStatus> {
    static FINISHED: SSLEngineResult$HandshakeStatus;
    static NEED_TASK: SSLEngineResult$HandshakeStatus;
    static NEED_UNWRAP: SSLEngineResult$HandshakeStatus;
    static NEED_UNWRAP_AGAIN: SSLEngineResult$HandshakeStatus;
    static NEED_WRAP: SSLEngineResult$HandshakeStatus;
    static NOT_HANDSHAKING: SSLEngineResult$HandshakeStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SSLEngineResult$HandshakeStatus;
    static values(): SSLEngineResult$HandshakeStatus[];
    private constructor()
    name(): "NOT_HANDSHAKING" | "FINISHED" | "NEED_TASK" | "NEED_WRAP" | "NEED_UNWRAP" | "NEED_UNWRAP_AGAIN";
}