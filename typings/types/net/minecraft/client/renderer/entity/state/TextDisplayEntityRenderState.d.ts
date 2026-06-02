import type { DisplayEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DisplayEntityRenderState.d.ts'
import type { Display$TextDisplay$CachedInfo } from '../../../../../../net/minecraft/world/entity/Display$TextDisplay$CachedInfo.d.ts'
import type { Display$TextDisplay$TextRenderState } from '../../../../../../net/minecraft/world/entity/Display$TextDisplay$TextRenderState.d.ts'
export class TextDisplayEntityRenderState extends DisplayEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    cachedInfo: Display$TextDisplay$CachedInfo;
    textRenderState: Display$TextDisplay$TextRenderState;
    hasSubState(): boolean;
}