import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { DialogConnectionAccess } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { DialogScreen } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
export class DialogScreens extends Object {
    static bootstrap(): void;
    static createFromData(paramdialog: Object | null, parampreviousScreen: Screen, paramconnectionAccess: DialogConnectionAccess): DialogScreen<Object>;
    constructor()
}