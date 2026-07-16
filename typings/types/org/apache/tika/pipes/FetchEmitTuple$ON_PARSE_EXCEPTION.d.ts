import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FetchEmitTuple$ON_PARSE_EXCEPTION extends Enum<FetchEmitTuple$ON_PARSE_EXCEPTION> {
    static EMIT: FetchEmitTuple$ON_PARSE_EXCEPTION;
    static SKIP: FetchEmitTuple$ON_PARSE_EXCEPTION;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FetchEmitTuple$ON_PARSE_EXCEPTION;
    static values(): FetchEmitTuple$ON_PARSE_EXCEPTION[];
    private constructor()
    name(): "SKIP" | "EMIT";
}