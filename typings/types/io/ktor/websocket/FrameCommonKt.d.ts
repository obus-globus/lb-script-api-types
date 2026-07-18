import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Frame$Close } from '../../../io/ktor/websocket/Frame$Close.d.ts'
import type { Frame$Text } from '../../../io/ktor/websocket/Frame$Text.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FrameCommonKt extends Object {
    static readBytes(self: Frame): number[];
    static readReason(self: Frame$Close): CloseReason | null;
    static readText(self: Frame$Text): string;
}