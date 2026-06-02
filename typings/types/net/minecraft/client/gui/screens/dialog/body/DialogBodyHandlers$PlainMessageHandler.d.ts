import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { DialogScreen } from '../../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { DialogBodyHandler } from '../../../../../../../net/minecraft/client/gui/screens/dialog/body/DialogBodyHandler.d.ts'
import type { PlainMessage } from '../../../../../../../net/minecraft/server/dialog/body/PlainMessage.d.ts'
export class DialogBodyHandlers$PlainMessageHandler extends Object implements DialogBodyHandler<PlainMessage> {
    private constructor()
    createControls(parent: DialogScreen<Object>, message: PlainMessage): LayoutElement;
}