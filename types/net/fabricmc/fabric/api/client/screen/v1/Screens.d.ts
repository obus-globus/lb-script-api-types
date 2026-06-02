import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { AbstractWidget } from '../../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class Screens extends Object {
    static getFont(paramarg0: Screen): Font;
    static getMinecraft(paramarg0: Screen): Minecraft;
    static getWidgets(paramarg0: Screen): AbstractWidget[];
    private constructor()
}