import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Widget } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/Widget.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChestDialogViewProvider$MultiTextWidget extends Record implements Widget {
    constructor(labels: Tag[])
    // private labels: Tag[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    labels(): Tag[];
    toString(): string;
}