import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PlayerSkinRenderCache$RenderInfo } from '../../../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache$RenderInfo.d.ts'
import type { TooltipComponent } from '../../../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
export class ClientActivePlayersTooltip$ActivePlayersTooltip extends Record implements TooltipComponent {
    constructor(profiles: PlayerSkinRenderCache$RenderInfo[])
    // private profiles: PlayerSkinRenderCache$RenderInfo[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    profiles(): PlayerSkinRenderCache$RenderInfo[];
    toString(): string;
}