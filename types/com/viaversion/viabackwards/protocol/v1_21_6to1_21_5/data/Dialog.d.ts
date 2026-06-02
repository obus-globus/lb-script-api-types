import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Button } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Button.d.ts'
import type { Dialog$AfterAction } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Dialog$AfterAction.d.ts'
import type { Widget } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/Widget.d.ts'
import type { RegistryAndTags } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/storage/RegistryAndTags.d.ts'
import type { ServerLinks } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/storage/ServerLinks.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Dialog extends Object implements Widget {
    constructor(arg0: RegistryAndTags, arg1: ServerLinks, arg2: Map$Entry<string, Tag>[])
    // private actionButton: Button;
    // private afterAction: Dialog$AfterAction;
    // private buttonWidth: number;
    // private canCloseWithEscape: boolean;
    // private columns: number;
    // private externalTitle: Tag;
    // private noButton: Button;
    // private title: Tag;
    // private widgets: Widget[];
    // private yesButton: Button;
    actionButton(): Button;
    afterAction(): Dialog$AfterAction;
    buttonWidth(): number;
    canCloseWithEscape(): boolean;
    columns(): number;
    externalTitle(): Tag;
    // private fillBodyWidget(arg0: Map$Entry<string, Tag>[]): void;
    // private fillConfirmationDialog(arg0: Map$Entry<string, Tag>[]): void;
    // private fillDialogBase(arg0: Map$Entry<string, Tag>[]): void;
    // private fillDialogList(arg0: RegistryAndTags, arg1: ServerLinks, arg2: Map$Entry<string, Tag>[]): void;
    // private fillInputWidget(arg0: Map$Entry<string, Tag>[]): void;
    // private fillMultiActionDialog(arg0: Map$Entry<string, Tag>[]): void;
    // private fillNoticeDialog(arg0: Map$Entry<string, Tag>[]): void;
    // private fillServerLinksDialog(arg0: ServerLinks, arg1: Map$Entry<string, Tag>[]): void;
    noButton(): Button;
    title(): Tag;
    widgets(): Widget[];
    yesButton(): Button;
}