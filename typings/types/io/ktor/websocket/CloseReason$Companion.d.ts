import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { CloseReason$Codes } from '../../../io/ktor/websocket/CloseReason$Codes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CloseReason$Companion extends Object {
    truncated(code: CloseReason$Codes, message: string): CloseReason;
}