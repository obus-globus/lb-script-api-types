import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { OcclusionCuller$GraphOcclusionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller$GraphOcclusionVisitor.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export abstract class AbstractSectionVisitor extends Object implements OcclusionCuller$GraphOcclusionVisitor {
    constructor(arg0: Viewport, arg1: number, arg2: boolean)
    // private baseOffsetX: number;
    // private baseOffsetY: number;
    // private baseOffsetZ: number;
    // private cameraX: number;
    // private cameraY: number;
    // private cameraZ: number;
    // private isFrustumTested: boolean;
    visit(arg0: RenderSection, arg1: boolean): void;
}