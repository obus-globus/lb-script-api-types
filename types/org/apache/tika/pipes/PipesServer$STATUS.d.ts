import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PipesServer$STATUS extends Enum<PipesServer$STATUS> {
    static CALL: PipesServer$STATUS;
    static EMITTER_NOT_FOUND: PipesServer$STATUS;
    static EMIT_EXCEPTION: PipesServer$STATUS;
    static EMIT_SUCCESS: PipesServer$STATUS;
    static EMIT_SUCCESS_PARSE_EXCEPTION: PipesServer$STATUS;
    static EMPTY_OUTPUT: PipesServer$STATUS;
    static FAILED_TO_START: PipesServer$STATUS;
    static FETCHER_INITIALIZATION_EXCEPTION: PipesServer$STATUS;
    static FETCHER_NOT_FOUND: PipesServer$STATUS;
    static FETCH_EXCEPTION: PipesServer$STATUS;
    static INTERMEDIATE_RESULT: PipesServer$STATUS;
    static OOM: PipesServer$STATUS;
    static PARSE_EXCEPTION_NO_EMIT: PipesServer$STATUS;
    static PARSE_SUCCESS: PipesServer$STATUS;
    static PING: PipesServer$STATUS;
    static READY: PipesServer$STATUS;
    static TIMEOUT: PipesServer$STATUS;
    static lookup(paramarg0: number): PipesServer$STATUS;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PipesServer$STATUS;
    static values(): (Object | null)[];
    private constructor()
    getByte(): number;
    name(): "READY" | "CALL" | "PING" | "FAILED_TO_START" | "FETCHER_NOT_FOUND" | "EMITTER_NOT_FOUND" | "FETCHER_INITIALIZATION_EXCEPTION" | "FETCH_EXCEPTION" | "PARSE_SUCCESS" | "PARSE_EXCEPTION_NO_EMIT" | "EMIT_SUCCESS" | "EMIT_SUCCESS_PARSE_EXCEPTION" | "EMIT_EXCEPTION" | "OOM" | "TIMEOUT" | "EMPTY_OUTPUT" | "INTERMEDIATE_RESULT";
}