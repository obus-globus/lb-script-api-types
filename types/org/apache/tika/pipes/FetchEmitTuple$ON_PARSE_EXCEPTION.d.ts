import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FetchEmitTuple$ON_PARSE_EXCEPTION extends Enum<FetchEmitTuple$ON_PARSE_EXCEPTION> {
    static EMIT: FetchEmitTuple$ON_PARSE_EXCEPTION;
    static SKIP: FetchEmitTuple$ON_PARSE_EXCEPTION;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FetchEmitTuple$ON_PARSE_EXCEPTION;
    static values(): (Object | null)[];
    private constructor()
    name(): "SKIP" | "EMIT";
}