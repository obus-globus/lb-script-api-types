import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { NumberFormat } from '../../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { NumberFormatType } from '../../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
export class StyledFormat extends Record implements NumberFormat {
    static NO_STYLE: StyledFormat;
    static PLAYER_LIST_DEFAULT: StyledFormat;
    static SIDEBAR_DEFAULT: StyledFormat;
    static TYPE: NumberFormatType<StyledFormat>;
    constructor(style: Style)
    // private style: Style;
    equals(o: Object | null): boolean;
    format(value: number): MutableComponent;
    hashCode(): number;
    style(): Style;
    toString(): string;
    type(): NumberFormatType<StyledFormat>;
}