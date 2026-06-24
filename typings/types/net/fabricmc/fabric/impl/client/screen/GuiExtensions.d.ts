import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface GuiExtensions extends Object{
    getTickingScreen(): Screen;
    setTickingScreen(arg0: Screen): void;
}