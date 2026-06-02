import type { ActionButton } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/ActionButton.d.ts'
import type { AfterAction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/AfterAction.d.ts'
import type { Dialog } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Dialog.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Input.d.ts'
import type { DialogBody } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NoticeDialog extends Dialog {
    static defaultAction(): ActionButton;
    static isDefaultAction(paramarg0: ActionButton): boolean;
    constructor(arg0: TextComponent, arg1: TextComponent, arg2: boolean, arg3: boolean, arg4: AfterAction, arg5: DialogBody[], arg6: Input[], arg7: ActionButton)
    constructor(arg0: TextComponent, arg1: boolean, arg2: boolean, arg3: AfterAction, arg4: DialogBody[], arg5: Input[], arg6: ActionButton)
    readonly action: ActionButton;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getAction(): ActionButton;
    hashCode(): number;
    setAction(arg0: ActionButton): void;
    toString(): string;
}