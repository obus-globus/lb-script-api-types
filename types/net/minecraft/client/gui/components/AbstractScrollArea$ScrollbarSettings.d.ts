import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class AbstractScrollArea$ScrollbarSettings extends Record {
    // private backgroundSprite: Identifier;
    // private disabledScrollerSprite: Identifier;
    // private resizingScrollbar: boolean;
    // private scrollRate: number;
    // private scrollbarMinHeight: number;
    // private scrollbarWidth: number;
    // private scrollerSprite: Identifier;
    backgroundSprite(): Identifier;
    disabledScrollerSprite(): Identifier;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resizingScrollbar(): boolean;
    scrollRate(): number;
    scrollbarMinHeight(): number;
    scrollbarWidth(): number;
    scrollerSprite(): Identifier;
    toString(): string;
}