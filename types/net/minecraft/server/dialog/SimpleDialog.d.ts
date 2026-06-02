import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActionButton } from '../../../../net/minecraft/server/dialog/ActionButton.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
export interface SimpleDialog extends Object, Dialog{
    codec(): MapCodec<SimpleDialog>;
    mainActions(): ActionButton[];
}