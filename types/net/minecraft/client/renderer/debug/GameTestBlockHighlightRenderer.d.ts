import type { IGameTestBlockHighlightRenderer } from '../../../../../com/viaversion/viafabricplus/injection/access/networking/packet_handling/IGameTestBlockHighlightRenderer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameTestBlockHighlightRenderer$Marker } from '../../../../../net/minecraft/client/renderer/debug/GameTestBlockHighlightRenderer$Marker.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class GameTestBlockHighlightRenderer extends Object implements IGameTestBlockHighlightRenderer {
    constructor()
    // private markers: Map<BlockPos, GameTestBlockHighlightRenderer$Marker>;
    clear(): void;
    emitGizmos(): void;
    highlightPos(absolutePos: BlockPos, relativePos: BlockPos): void;
    // private renderMarker(pos: BlockPos, marker: GameTestBlockHighlightRenderer$Marker): void;
    viaFabricPlus$addMarker(arg0: BlockPos, arg1: number, arg2: string, arg3: number): void;
}