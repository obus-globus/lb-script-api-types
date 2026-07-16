import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SSLEngineResult$Status extends Enum<SSLEngineResult$Status> {
    static BUFFER_OVERFLOW: SSLEngineResult$Status;
    static BUFFER_UNDERFLOW: SSLEngineResult$Status;
    static CLOSED: SSLEngineResult$Status;
    static OK: SSLEngineResult$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SSLEngineResult$Status;
    static values(): SSLEngineResult$Status[];
    private constructor()
    name(): "BUFFER_UNDERFLOW" | "BUFFER_OVERFLOW" | "OK" | "CLOSED";
}