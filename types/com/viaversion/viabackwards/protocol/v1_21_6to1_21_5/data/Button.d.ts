import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Dialog } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Dialog.d.ts'
import type { Template } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Template.d.ts'
import type { Widget } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/Widget.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Button extends Object implements Widget {
    static DEFAULT: Button;
    static openUrl(paramarg0: Tag, paramarg1: string): Button;
    constructor(arg0: Dialog, arg1: Map$Entry<string, Tag>[])
    // private additions: Map$Entry<string, Tag>[];
    // private clickEvent: Map$Entry<string, Tag>[];
    // private dialog: Dialog;
    // private id: string;
    // private label: Tag;
    // private template: Template;
    // private tooltip: Tag;
    // private width: number;
    clickEvent(): Map$Entry<string, Tag>[];
    label(): Tag;
    tooltip(): Tag;
    width(): number;
}