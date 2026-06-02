import type { AfterAction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/AfterAction.d.ts'
import type { Dialog } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Dialog.d.ts'
import type { DialogType } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/DialogType.d.ts'
import type { Input } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/Input.d.ts'
import type { DialogBody } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/dialog/body/DialogBody.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class ButtonListDialog extends Dialog {
    constructor(arg0: DialogType, arg1: TextComponent, arg2: TextComponent, arg3: boolean, arg4: boolean, arg5: AfterAction, arg6: DialogBody[], arg7: Input[], arg8: number)
    readonly columns: number;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getColumns(): number;
    hashCode(): number;
    setColumns(arg0: number): void;
    toString(): string;
}