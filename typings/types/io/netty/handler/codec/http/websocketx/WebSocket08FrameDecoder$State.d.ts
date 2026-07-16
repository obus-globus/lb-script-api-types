import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WebSocket08FrameDecoder$State extends Enum<WebSocket08FrameDecoder$State> {
    static CORRUPT: WebSocket08FrameDecoder$State;
    static MASKING_KEY: WebSocket08FrameDecoder$State;
    static PAYLOAD: WebSocket08FrameDecoder$State;
    static READING_FIRST: WebSocket08FrameDecoder$State;
    static READING_SECOND: WebSocket08FrameDecoder$State;
    static READING_SIZE: WebSocket08FrameDecoder$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): WebSocket08FrameDecoder$State;
    static values(): WebSocket08FrameDecoder$State[];
    private constructor()
    name(): "READING_FIRST" | "READING_SECOND" | "READING_SIZE" | "MASKING_KEY" | "PAYLOAD" | "CORRUPT";
}