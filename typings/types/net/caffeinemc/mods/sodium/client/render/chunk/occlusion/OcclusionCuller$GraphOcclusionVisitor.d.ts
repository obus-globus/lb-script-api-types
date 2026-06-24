import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
export interface OcclusionCuller$GraphOcclusionVisitor extends Object{
    visit(arg0: RenderSection, arg1: boolean): void;
}