import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
export class ItemInHandRenderer$HandRenderSelection extends Enum<ItemInHandRenderer$HandRenderSelection> {
    static RENDER_BOTH_HANDS: ItemInHandRenderer$HandRenderSelection;
    static RENDER_MAIN_HAND_ONLY: ItemInHandRenderer$HandRenderSelection;
    static RENDER_OFF_HAND_ONLY: ItemInHandRenderer$HandRenderSelection;
    static onlyForHand(paramhand: InteractionHand): ItemInHandRenderer$HandRenderSelection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ItemInHandRenderer$HandRenderSelection;
    static values(): (Object | null)[];
    private constructor(renderMainHand: boolean, renderOffHand: boolean)
    renderMainHand: boolean;
    renderOffHand: boolean;
    name(): "RENDER_BOTH_HANDS" | "RENDER_MAIN_HAND_ONLY" | "RENDER_OFF_HAND_ONLY";
}