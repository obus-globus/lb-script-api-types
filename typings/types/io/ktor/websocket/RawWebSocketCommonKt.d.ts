import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RawWebSocketCommonKt extends Object {
    static readFrame(self: ByteReadChannel, maxFrameSize: number, lastOpcode: number): Frame;
    static writeFrame(self: ByteWriteChannel, frame: Frame, masking: boolean): void;
}