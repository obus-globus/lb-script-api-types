import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Widget } from '../../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/Widget.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class TextWidget extends Object implements Widget {
    constructor(arg0: Map$Entry<string, Tag>[])
    // private label: Tag;
    // private width: number;
    label(): Tag;
    width(): number;
}