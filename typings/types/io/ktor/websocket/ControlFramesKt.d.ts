import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ControlFramesKt extends Object {
    static MAX_CLOSE_REASON_MESSAGE_SIZE: number;
    static MAX_CONTROL_FRAME_PAYLOAD_SIZE: number;
    static utf8Size(self: string): number;
    static utf8Truncate(self: string, maxSize: number): string;
    static validateSize(self: Frame): void;
}