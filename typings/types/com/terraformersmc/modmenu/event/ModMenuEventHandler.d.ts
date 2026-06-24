import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { LayoutElement } from '../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class ModMenuEventHandler extends Object {
    static afterScreenInit(paramarg0: Minecraft, paramarg1: Screen, paramarg2: number, paramarg3: number): void;
    static buttonHasText(paramarg0: LayoutElement, paramarg1: (Object | null)[]): boolean;
    static register(): void;
    static shiftButtons(paramarg0: LayoutElement, paramarg1: boolean, paramarg2: number): void;
    constructor()
}