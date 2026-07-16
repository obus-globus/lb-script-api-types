import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { DialogConnectionAccess } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { DialogScreen } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { Dialog } from '../../../../../../net/minecraft/server/dialog/Dialog.d.ts'
export class DialogScreens extends Object {
    static bootstrap(): void;
    static createFromData<T extends Dialog>(paramdialog: T, parampreviousScreen: Screen, paramconnectionAccess: DialogConnectionAccess): DialogScreen<T>;
    constructor()
}