import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SSLEngineResult$Status extends Enum<SSLEngineResult$Status> {
    static BUFFER_OVERFLOW: SSLEngineResult$Status;
    static BUFFER_UNDERFLOW: SSLEngineResult$Status;
    static CLOSED: SSLEngineResult$Status;
    static OK: SSLEngineResult$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SSLEngineResult$Status;
    static values(): (Object | null)[];
    private constructor()
    name(): "BUFFER_UNDERFLOW" | "BUFFER_OVERFLOW" | "OK" | "CLOSED";
}