import type { JavaMap } from '../../../JavaMap.d.ts'
import type { CloseReason$Codes } from '../../../io/ktor/websocket/CloseReason$Codes.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CloseReason$Codes$Companion extends Object {
    UNEXPECTED_CONDITION: CloseReason$Codes;
    // private byCodeMap: JavaMap<number, CloseReason$Codes>;
    byCode(code: number): CloseReason$Codes | null;
}