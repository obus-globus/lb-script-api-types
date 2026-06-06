import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Dialog } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/Dialog.d.ts'
import type { TextInput } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/data/input/TextInput.d.ts'
import type { ChestDialogViewProvider } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/provider/ChestDialogViewProvider.d.ts'
import type { ChestDialogStorage$Phase } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/storage/ChestDialogStorage$Phase.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChestDialogStorage extends Object implements StorableObject {
    constructor(arg0: ChestDialogViewProvider, arg1: Dialog)
    // private actionIndex: number;
    // private closeButtonEnabled: boolean;
    // private closeButtonLabel: Tag;
    // private confirmationNoIndex: number;
    // private confirmationYesIndex: number;
    // private containerId: number;
    // private dialog: Dialog;
    // private items: Item[];
    page: number;
    // private phase: ChestDialogStorage$Phase;
    // private provider: ChestDialogViewProvider;
    // private ticksWaitingForResponse: number;
    actionIndex(): number;
    allowClosing(): boolean;
    closeButtonEnabled(): boolean;
    closeButtonLabel(): Tag;
    confirmationNoIndex(): number;
    confirmationYesIndex(): number;
    containerId(): number;
    currentTextInput(): TextInput;
    dialog(): Dialog;
    items(): Item[];
    onRemove(): void;
    phase(): ChestDialogStorage$Phase;
    previousDialog(): Dialog;
    setAllowClosing(arg0: boolean): void;
    setCurrentTextInput(arg0: TextInput): void;
    setItems(arg0: Item[], arg1: number, arg2: number, arg3: number): void;
    setPhase(arg0: UserConnection, arg1: ChestDialogStorage$Phase): void;
    setPreviousDialog(arg0: Dialog): void;
    tick(arg0: UserConnection): void;
}