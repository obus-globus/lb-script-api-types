import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ConfigScreenFactory<S extends Screen> extends Object{
    create(arg0: Screen): S;
}