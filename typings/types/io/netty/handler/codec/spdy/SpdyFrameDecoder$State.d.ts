import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SpdyFrameDecoder$State extends Enum<SpdyFrameDecoder$State> {
    static DISCARD_FRAME: SpdyFrameDecoder$State;
    static FRAME_ERROR: SpdyFrameDecoder$State;
    static READ_COMMON_HEADER: SpdyFrameDecoder$State;
    static READ_DATA_FRAME: SpdyFrameDecoder$State;
    static READ_GOAWAY_FRAME: SpdyFrameDecoder$State;
    static READ_HEADERS_FRAME: SpdyFrameDecoder$State;
    static READ_HEADER_BLOCK: SpdyFrameDecoder$State;
    static READ_PING_FRAME: SpdyFrameDecoder$State;
    static READ_RST_STREAM_FRAME: SpdyFrameDecoder$State;
    static READ_SETTING: SpdyFrameDecoder$State;
    static READ_SETTINGS_FRAME: SpdyFrameDecoder$State;
    static READ_SYN_REPLY_FRAME: SpdyFrameDecoder$State;
    static READ_SYN_STREAM_FRAME: SpdyFrameDecoder$State;
    static READ_UNKNOWN_FRAME: SpdyFrameDecoder$State;
    static READ_WINDOW_UPDATE_FRAME: SpdyFrameDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SpdyFrameDecoder$State;
    static values(): SpdyFrameDecoder$State[];
    private constructor()
    name(): "READ_COMMON_HEADER" | "READ_DATA_FRAME" | "READ_SYN_STREAM_FRAME" | "READ_SYN_REPLY_FRAME" | "READ_RST_STREAM_FRAME" | "READ_SETTINGS_FRAME" | "READ_SETTING" | "READ_PING_FRAME" | "READ_GOAWAY_FRAME" | "READ_HEADERS_FRAME" | "READ_WINDOW_UPDATE_FRAME" | "READ_UNKNOWN_FRAME" | "READ_HEADER_BLOCK" | "DISCARD_FRAME" | "FRAME_ERROR";
}