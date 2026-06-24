import type { ViewArea } from '../../../../../../net/minecraft/client/renderer/ViewArea.d.ts'
import type { SectionRenderDispatcher } from '../../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../../net/minecraft/core/SectionPos.d.ts'
export class IgnoringViewArea extends ViewArea {
    constructor(arg0: SectionRenderDispatcher)
    // private ppos: SectionPos;
    getRenderSection(arg0: number): SectionRenderDispatcher$RenderSection;
    getRenderSectionAt(arg0: BlockPos): SectionRenderDispatcher$RenderSection;
    releaseAllBuffers(): void;
    repositionCamera(arg0: SectionPos): boolean;
}