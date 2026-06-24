import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActiveArea } from '../../../../../net/minecraft/client/gui/font/ActiveArea.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export class EmptyArea extends Record implements ActiveArea {
    static DEFAULT_ASCENT: number;
    static DEFAULT_HEIGHT: number;
    constructor(x: number, y: number, advance: number, ascent: number, height: number, style: Style)
    // private advance: number;
    // private ascent: number;
    // private height: number;
    // private style: Style;
    // private x: number;
    // private y: number;
    activeBottom(): number;
    activeLeft(): number;
    activeRight(): number;
    activeTop(): number;
    advance(): number;
    ascent(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    style(): Style;
    toString(): string;
    x(): number;
    y(): number;
}