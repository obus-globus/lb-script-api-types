import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_21$Display extends Object implements Copyable {
    static DEFAULT: AttributeModifiers1_21$Display;
    static DISPLAY_TYPES: string[];
    constructor(arg0: number)
    // private id: number;
    copy(): AttributeModifiers1_21$Display;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    write(arg0: ByteBuf): void;
}