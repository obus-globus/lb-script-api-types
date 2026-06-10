import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
export class DialogTypes extends Object {
    static bootstrap(paramregistry: MapCodec<Dialog>[]): MapCodec<Dialog>;
    constructor()
}