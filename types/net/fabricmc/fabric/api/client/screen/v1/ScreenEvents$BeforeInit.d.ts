import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export interface ScreenEvents$BeforeInit extends Object{
    beforeInit(arg0: Minecraft, arg1: Screen, arg2: number, arg3: number): void;
}