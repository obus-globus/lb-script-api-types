import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { FrameType } from '../../../io/ktor/websocket/FrameType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Frame$Companion extends Object {
    // private Empty: number[];
    byType(fin: boolean, frameType: FrameType, data: number[], rsv1: boolean, rsv2: boolean, rsv3: boolean): Frame;
}