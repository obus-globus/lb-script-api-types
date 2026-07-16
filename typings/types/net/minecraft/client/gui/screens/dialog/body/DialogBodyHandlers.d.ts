import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { DialogScreen } from '../../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { DialogBody } from '../../../../../../../net/minecraft/server/dialog/body/DialogBody.d.ts'
export class DialogBodyHandlers extends Object {
    static bootstrap(): void;
    static createBodyElement<B extends DialogBody>(paramscreen: DialogScreen<any>, parambody: B): LayoutElement;
    constructor()
}