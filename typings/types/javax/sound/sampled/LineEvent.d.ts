import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { Line } from '../../../javax/sound/sampled/Line.d.ts'
import type { LineEvent$Type } from '../../../javax/sound/sampled/LineEvent$Type.d.ts'
export class LineEvent extends EventObject {
    constructor(arg0: Line, arg1: LineEvent$Type, arg2: number)
    // private position: number;
    readonly type: LineEvent$Type;
    getFramePosition(): number;
    getLine(): Line;
    getType(): LineEvent$Type;
    toString(): string;
}