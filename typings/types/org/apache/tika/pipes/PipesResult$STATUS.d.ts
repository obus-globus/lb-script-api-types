import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PipesResult$STATUS extends Enum<PipesResult$STATUS> {
    static CLIENT_UNAVAILABLE_WITHIN_MS: PipesResult$STATUS;
    static EMIT_EXCEPTION: PipesResult$STATUS;
    static EMIT_SUCCESS: PipesResult$STATUS;
    static EMIT_SUCCESS_PARSE_EXCEPTION: PipesResult$STATUS;
    static EMPTY_OUTPUT: PipesResult$STATUS;
    static FETCHER_INITIALIZATION_EXCEPTION: PipesResult$STATUS;
    static FETCH_EXCEPTION: PipesResult$STATUS;
    static INTERMEDIATE_RESULT: PipesResult$STATUS;
    static INTERRUPTED_EXCEPTION: PipesResult$STATUS;
    static NO_EMITTER_FOUND: PipesResult$STATUS;
    static NO_FETCHER_FOUND: PipesResult$STATUS;
    static OOM: PipesResult$STATUS;
    static PARSE_EXCEPTION_EMIT: PipesResult$STATUS;
    static PARSE_EXCEPTION_NO_EMIT: PipesResult$STATUS;
    static PARSE_SUCCESS: PipesResult$STATUS;
    static PARSE_SUCCESS_WITH_EXCEPTION: PipesResult$STATUS;
    static TIMEOUT: PipesResult$STATUS;
    static UNSPECIFIED_CRASH: PipesResult$STATUS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PipesResult$STATUS;
    static values(): PipesResult$STATUS[];
    private constructor()
    name(): "CLIENT_UNAVAILABLE_WITHIN_MS" | "FETCHER_INITIALIZATION_EXCEPTION" | "FETCH_EXCEPTION" | "EMPTY_OUTPUT" | "PARSE_EXCEPTION_NO_EMIT" | "PARSE_EXCEPTION_EMIT" | "PARSE_SUCCESS" | "PARSE_SUCCESS_WITH_EXCEPTION" | "OOM" | "TIMEOUT" | "UNSPECIFIED_CRASH" | "NO_EMITTER_FOUND" | "EMIT_SUCCESS" | "EMIT_SUCCESS_PARSE_EXCEPTION" | "EMIT_EXCEPTION" | "INTERRUPTED_EXCEPTION" | "NO_FETCHER_FOUND" | "INTERMEDIATE_RESULT";
}