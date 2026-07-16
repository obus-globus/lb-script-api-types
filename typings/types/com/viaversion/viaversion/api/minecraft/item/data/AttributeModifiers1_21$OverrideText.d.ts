import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { AttributeModifiers1_21$Display } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_21$Display.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_21$OverrideText extends AttributeModifiers1_21$Display {
    static DEFAULT: AttributeModifiers1_21$Display;
    static DISPLAY_TYPES: string[];
    static ID: number;
    constructor(arg0: Tag)
    // private component: Tag;
    component(): Tag;
    copy(): AttributeModifiers1_21$OverrideText;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    write(arg0: ByteBuf): void;
}