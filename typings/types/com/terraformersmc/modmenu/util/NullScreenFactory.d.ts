import type { ConfigScreenFactory } from '../../../../com/terraformersmc/modmenu/api/ConfigScreenFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class NullScreenFactory<S extends Screen> extends Object implements ConfigScreenFactory<S> {
    constructor()
    create(arg0: Screen): S;
}