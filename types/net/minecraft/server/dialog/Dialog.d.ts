import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommonDialogData } from '../../../../net/minecraft/server/dialog/CommonDialogData.d.ts'
import type { Action } from '../../../../net/minecraft/server/dialog/action/Action.d.ts'
export interface Dialog extends Object{
    codec(): MapCodec<Dialog>;
    common(): CommonDialogData;
    onCancel(): Optional<Action>;
}