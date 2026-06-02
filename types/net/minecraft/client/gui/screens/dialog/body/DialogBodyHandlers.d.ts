import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { DialogScreen } from '../../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
export class DialogBodyHandlers extends Object {
    static bootstrap(): void;
    static createBodyElement(paramscreen: DialogScreen<Object>, parambody: Object | null): LayoutElement;
    constructor()
}