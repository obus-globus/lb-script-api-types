import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpObjectDecoder$State extends Enum<HttpObjectDecoder$State> {
    static BAD_MESSAGE: HttpObjectDecoder$State;
    static READ_CHUNKED_CONTENT: HttpObjectDecoder$State;
    static READ_CHUNK_DELIMITER: HttpObjectDecoder$State;
    static READ_CHUNK_FOOTER: HttpObjectDecoder$State;
    static READ_CHUNK_SIZE: HttpObjectDecoder$State;
    static READ_FIXED_LENGTH_CONTENT: HttpObjectDecoder$State;
    static READ_HEADER: HttpObjectDecoder$State;
    static READ_INITIAL: HttpObjectDecoder$State;
    static READ_VARIABLE_LENGTH_CONTENT: HttpObjectDecoder$State;
    static SKIP_CONTROL_CHARS: HttpObjectDecoder$State;
    static SKIP_INITIAL_LINE_CHARS: HttpObjectDecoder$State;
    static UPGRADED: HttpObjectDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HttpObjectDecoder$State;
    static values(): HttpObjectDecoder$State[];
    private constructor()
    name(): "SKIP_INITIAL_LINE_CHARS" | "SKIP_CONTROL_CHARS" | "READ_INITIAL" | "READ_HEADER" | "READ_VARIABLE_LENGTH_CONTENT" | "READ_FIXED_LENGTH_CONTENT" | "READ_CHUNK_SIZE" | "READ_CHUNKED_CONTENT" | "READ_CHUNK_DELIMITER" | "READ_CHUNK_FOOTER" | "BAD_MESSAGE" | "UPGRADED";
}