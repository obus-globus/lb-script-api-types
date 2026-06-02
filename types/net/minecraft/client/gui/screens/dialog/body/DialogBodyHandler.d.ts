import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LayoutElement } from '../../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { DialogScreen } from '../../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { DialogBody } from '../../../../../../../net/minecraft/server/dialog/body/DialogBody.d.ts'
export interface DialogBodyHandler<T extends DialogBody> extends Object{
    createControls(parent: DialogScreen<Object>, body: T): LayoutElement;
}