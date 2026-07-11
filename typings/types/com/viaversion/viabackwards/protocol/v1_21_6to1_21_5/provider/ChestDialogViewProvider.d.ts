import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol1_21_6To1_21_5 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/Protocol1_21_6To1_21_5.d.ts'
import type { Button } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Button.d.ts'
import type { Dialog } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Dialog.d.ts'
import type { Dialog$AfterAction } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Dialog$AfterAction.d.ts'
import type { BooleanInput } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/BooleanInput.d.ts'
import type { NumberRangeInput } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/NumberRangeInput.d.ts'
import type { SingleOptionInput } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/SingleOptionInput.d.ts'
import type { TextInput } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/TextInput.d.ts'
import type { ItemWidget } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/ItemWidget.d.ts'
import type { Widget } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/widget/Widget.d.ts'
import type { ChestDialogViewProvider$MultiTextWidget } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/provider/ChestDialogViewProvider$MultiTextWidget.d.ts'
import type { DialogViewProvider } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/provider/DialogViewProvider.d.ts'
import type { ChestDialogStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/storage/ChestDialogStorage.d.ts'
import type { ChestDialogStorage$Phase } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/storage/ChestDialogStorage$Phase.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChestDialogViewProvider extends Object implements DialogViewProvider {
    constructor(arg0: Protocol1_21_6To1_21_5)
    // private protocol: Protocol1_21_6To1_21_5;
    clickBooleanInput(arg0: BooleanInput): void;
    clickButton(arg0: UserConnection, arg1: Dialog$AfterAction, arg2: Button): void;
    clickDialog(arg0: UserConnection, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    clickDialogButton(arg0: UserConnection, arg1: Dialog): void;
    clickNumberRangeInput(arg0: NumberRangeInput, arg1: number): void;
    clickSingleOptionInput(arg0: SingleOptionInput): void;
    clickTextInput(arg0: UserConnection, arg1: TextInput): void;
    closeDialog(arg0: UserConnection): void;
    createActionButtonItem(arg0: UserConnection, arg1: Button): Item;
    createCloseButtonItem(arg0: Tag): Item;
    createItem(arg0: string, arg1: Tag): Item;
    createItem(arg0: string, arg1: Tag, ...arg2: Tag[]): Item;
    createItem(arg0: string, arg1: Tag, ...arg2: string[]): Item;
    createPageNavigationItem(): Item;
    createTextCopyItem(arg0: string): Item;
    createTextInputItem(arg0: string): Item;
    getBooleanInput(arg0: UserConnection, arg1: BooleanInput): Item;
    getButton(arg0: UserConnection, arg1: Button): Item;
    getDialog(arg0: UserConnection, arg1: Dialog): Item;
    getItem(arg0: UserConnection, arg1: Widget): Item;
    getItemWidget(arg0: UserConnection, arg1: ItemWidget): Item;
    getItems(arg0: UserConnection, arg1: ChestDialogStorage, arg2: Dialog): Item[];
    getMultiTextWidget(arg0: UserConnection, arg1: ChestDialogViewProvider$MultiTextWidget): Item;
    getNumberRangeInput(arg0: UserConnection, arg1: NumberRangeInput): Item;
    getSingleOptionInput(arg0: UserConnection, arg1: SingleOptionInput): Item;
    getTextInput(arg0: UserConnection, arg1: TextInput): Item;
    handleTag(arg0: UserConnection, arg1: Tag): Tag;
    openAnvilView(arg0: UserConnection, arg1: ChestDialogStorage, arg2: Tag, arg3: string, arg4: TextInput): void;
    openChestView(arg0: UserConnection, arg1: ChestDialogStorage, arg2: ChestDialogStorage$Phase): void;
    openDialog(arg0: UserConnection, arg1: Dialog): void;
    updateAnvilText(arg0: UserConnection, arg1: string): void;
    updateDialog(arg0: UserConnection, arg1: Dialog): void;
}