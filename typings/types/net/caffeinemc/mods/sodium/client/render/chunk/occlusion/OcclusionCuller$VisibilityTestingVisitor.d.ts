import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { OcclusionCuller$GraphOcclusionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller$GraphOcclusionVisitor.d.ts'
export interface OcclusionCuller$VisibilityTestingVisitor extends Object, OcclusionCuller$GraphOcclusionVisitor{
    visit(arg0: RenderSection, arg1: boolean): void;
    visitTestVisible(arg0: RenderSection): boolean;
}