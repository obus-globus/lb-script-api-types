import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { DialogConnectionAccess } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { DialogScreen } from '../../../../../../net/minecraft/client/gui/screens/dialog/DialogScreen.d.ts'
import type { Dialog } from '../../../../../../net/minecraft/server/dialog/Dialog.d.ts'
export interface DialogScreens$Factory<T extends Dialog> extends Object{
    create(previousScreen: Screen, data: T, connectionAccess: DialogConnectionAccess): DialogScreen<T>;
}