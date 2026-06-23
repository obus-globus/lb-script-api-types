import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { DialogScreen } from '../../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { DialogBodyHandler } from '../../../../../../../net/minecraft/client/gui/screens/dialog/body/DialogBodyHandler.d.ts'
import type { ItemBody } from '../../../../../../../net/minecraft/server/dialog/body/ItemBody.d.ts'
export class DialogBodyHandlers$ItemHandler extends Object implements DialogBodyHandler<ItemBody> {
    private constructor()
    createControls(parent: DialogScreen<any>, item: ItemBody): LayoutElement;
}