import type { FrameType } from '../../../io/ktor/websocket/FrameType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class FrameType$Companion extends Object {
    // private byOpcodeArray: (FrameType | null)[];
    // private maxOpcode: number;
    get(opcode: number): FrameType | null;
}