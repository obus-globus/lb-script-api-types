import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { CullType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/CullType.d.ts'
import type { OcclusionCuller$VisibilityTestingVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller$VisibilityTestingVisitor.d.ts'
import type { RayOcclusionSectionTree$FlatTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/RayOcclusionSectionTree$FlatTree.d.ts'
import type { SectionTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/SectionTree.d.ts'
import type { Forest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Forest.d.ts'
import type { CameraTransform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class RayOcclusionSectionTree extends SectionTree implements OcclusionCuller$VisibilityTestingVisitor {
    constructor(arg0: Viewport, arg1: number, arg2: number, arg3: CullType, arg4: Level)
    // private maxSection: number;
    // private minSection: number;
    // private portalTree: Forest<RayOcclusionSectionTree$FlatTree>;
    // private transform: CameraTransform;
    // private blockHasObstruction(arg0: number, arg1: number, arg2: number): number;
    // private isRayBlockedStepped(arg0: RenderSection): boolean;
    visit(arg0: RenderSection, arg1: boolean): void;
    visitTestVisible(arg0: RenderSection): boolean;
}