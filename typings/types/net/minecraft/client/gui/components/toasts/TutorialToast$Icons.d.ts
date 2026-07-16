import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class TutorialToast$Icons extends Enum<TutorialToast$Icons> {
    static MOUSE: TutorialToast$Icons;
    static MOVEMENT_KEYS: TutorialToast$Icons;
    static RECIPE_BOOK: TutorialToast$Icons;
    static RIGHT_CLICK: TutorialToast$Icons;
    static SOCIAL_INTERACTIONS: TutorialToast$Icons;
    static TREE: TutorialToast$Icons;
    static WOODEN_PLANKS: TutorialToast$Icons;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TutorialToast$Icons;
    static values(): TutorialToast$Icons[];
    private constructor(sprite: Identifier)
    // private sprite: Identifier;
    extractRenderState(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    name(): "MOVEMENT_KEYS" | "MOUSE" | "TREE" | "RECIPE_BOOK" | "WOODEN_PLANKS" | "SOCIAL_INTERACTIONS" | "RIGHT_CLICK";
}