import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
export class ItemInHandRenderer$HandRenderSelection extends Enum<ItemInHandRenderer$HandRenderSelection> {
    static RENDER_BOTH_HANDS: ItemInHandRenderer$HandRenderSelection;
    static RENDER_MAIN_HAND_ONLY: ItemInHandRenderer$HandRenderSelection;
    static RENDER_OFF_HAND_ONLY: ItemInHandRenderer$HandRenderSelection;
    static onlyForHand(paramhand: InteractionHand): ItemInHandRenderer$HandRenderSelection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ItemInHandRenderer$HandRenderSelection;
    static values(): ItemInHandRenderer$HandRenderSelection[];
    private constructor(renderMainHand: boolean, renderOffHand: boolean)
    renderMainHand: boolean;
    renderOffHand: boolean;
    name(): "RENDER_BOTH_HANDS" | "RENDER_MAIN_HAND_ONLY" | "RENDER_OFF_HAND_ONLY";
}