import type { ActionButton } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/ActionButton.d.ts'
import type { AfterAction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/AfterAction.d.ts'
import type { Dialog } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Dialog.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Input.d.ts'
import type { DialogBody } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { ButtonListDialog } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/types/ButtonListDialog.d.ts'
import type { TypedTagEntryList } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TypedTagEntryList.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DialogListDialog extends ButtonListDialog {
    constructor(arg0: TextComponent, arg1: TextComponent, arg2: boolean, arg3: boolean, arg4: AfterAction, arg5: DialogBody[], arg6: Input[], arg7: TypedTagEntryList<Dialog>, arg8: ActionButton, arg9: number, arg10: number)
    constructor(arg0: TextComponent, arg1: TextComponent, arg2: boolean, arg3: boolean, arg4: AfterAction, arg5: DialogBody[], arg6: Input[], arg7: TypedTagEntryList<Dialog>, arg8: number, arg9: number)
    constructor(arg0: TextComponent, arg1: boolean, arg2: boolean, arg3: AfterAction, arg4: DialogBody[], arg5: Input[], arg6: TypedTagEntryList<Dialog>, arg7: ActionButton, arg8: number, arg9: number)
    constructor(arg0: TextComponent, arg1: boolean, arg2: boolean, arg3: AfterAction, arg4: DialogBody[], arg5: Input[], arg6: TypedTagEntryList<Dialog>, arg7: number, arg8: number)
    readonly buttonWidth: number;
    readonly dialogs: TypedTagEntryList<Dialog>;
    readonly exitAction: ActionButton;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getButtonWidth(): number;
    getDialogs(): TypedTagEntryList<Dialog>;
    getExitAction(): ActionButton;
    hashCode(): number;
    setButtonWidth(arg0: number): void;
    setDialogs(arg0: TypedTagEntryList<Dialog>): void;
    setExitAction(arg0: ActionButton): void;
    toString(): string;
}