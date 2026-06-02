import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomScreenType } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class CustomScreenType$Companion extends Object {
    byName(name: string): CustomScreenType | null;
    recognize(screen: Screen): CustomScreenType | null;
}