import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SpdyHeaderBlockRawDecoder$State extends Enum<SpdyHeaderBlockRawDecoder$State> {
    static END_HEADER_BLOCK: SpdyHeaderBlockRawDecoder$State;
    static ERROR: SpdyHeaderBlockRawDecoder$State;
    static READ_NAME: SpdyHeaderBlockRawDecoder$State;
    static READ_NAME_LENGTH: SpdyHeaderBlockRawDecoder$State;
    static READ_NUM_HEADERS: SpdyHeaderBlockRawDecoder$State;
    static READ_VALUE: SpdyHeaderBlockRawDecoder$State;
    static READ_VALUE_LENGTH: SpdyHeaderBlockRawDecoder$State;
    static SKIP_NAME: SpdyHeaderBlockRawDecoder$State;
    static SKIP_VALUE: SpdyHeaderBlockRawDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SpdyHeaderBlockRawDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "READ_NUM_HEADERS" | "READ_NAME_LENGTH" | "READ_NAME" | "SKIP_NAME" | "READ_VALUE_LENGTH" | "READ_VALUE" | "SKIP_VALUE" | "END_HEADER_BLOCK" | "ERROR";
}