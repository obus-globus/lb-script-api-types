import type { FrameType$Companion } from '../../../io/ktor/websocket/FrameType$Companion.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FrameType extends Enum<FrameType> {
    static BINARY: FrameType;
    static CLOSE: FrameType;
    static Companion: FrameType$Companion;
    static PING: FrameType;
    static PONG: FrameType;
    static TEXT: FrameType;
    static getEntries(): FrameType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): FrameType;
    static values(): FrameType[];
    private constructor(controlFrame: boolean, opcode: number)
    readonly controlFrame: boolean;
    readonly opcode: number;
    name(): "TEXT" | "BINARY" | "CLOSE" | "PING" | "PONG";
}