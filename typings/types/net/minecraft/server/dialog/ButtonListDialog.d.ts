import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActionButton } from '../../../../net/minecraft/server/dialog/ActionButton.d.ts'
import type { CommonDialogData } from '../../../../net/minecraft/server/dialog/CommonDialogData.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { Action } from '../../../../net/minecraft/server/dialog/action/Action.d.ts'
export interface ButtonListDialog extends Object, Dialog{
    codec(): MapCodec<ButtonListDialog>;
    columns(): number;
    common(): CommonDialogData;
    exitAction(): Optional<ActionButton>;
    onCancel(): Optional<Action>;
}