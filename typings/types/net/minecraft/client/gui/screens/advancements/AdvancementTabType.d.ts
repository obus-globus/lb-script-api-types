import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AdvancementTabType$Sprites } from '../../../../../../net/minecraft/client/gui/screens/advancements/AdvancementTabType$Sprites.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AdvancementTabType extends Enum<AdvancementTabType> {
    static ABOVE: AdvancementTabType;
    static BELOW: AdvancementTabType;
    static LEFT: AdvancementTabType;
    static RIGHT: AdvancementTabType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AdvancementTabType;
    static values(): AdvancementTabType[];
    private constructor(selectedSprites: AdvancementTabType$Sprites, unselectedSprites: AdvancementTabType$Sprites, width: number, height: number, max: number)
    readonly height: number;
    readonly max: number;
    // private selectedSprites: AdvancementTabType$Sprites;
    // private unselectedSprites: AdvancementTabType$Sprites;
    readonly width: number;
    extractIcon(graphics: GuiGraphicsExtractor, xo: number, yo: number, index: number, icon: ItemStack): void;
    extractRenderState(graphics: GuiGraphicsExtractor, tabX: number, tabY: number, selected: boolean, index: number): void;
    getHeight(): number;
    getMax(): number;
    getWidth(): number;
    getX(index: number): number;
    getY(index: number): number;
    isMouseOver(xo: number, yo: number, index: number, mx: number, my: number): boolean;
    name(): "ABOVE" | "BELOW" | "LEFT" | "RIGHT";
}