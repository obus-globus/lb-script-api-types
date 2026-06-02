import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { RenderSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/RenderSectionVisitor.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { DoubleBufferedQueue } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/DoubleBufferedQueue.d.ts'
import type { WriteQueue } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/WriteQueue.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class OcclusionCuller extends Object {
    static isWithinFrustum(paramarg0: Viewport, paramarg1: RenderSection): boolean;
    static isWithinNearbySectionFrustum(paramarg0: Viewport, paramarg1: RenderSection): boolean;
    constructor(arg0: Long2ReferenceMap<RenderSection>, arg1: Level)
    // private level: Level;
    // private outOfWorldDirection: number;
    // private outOfWorldHeight: number;
    // private outOfWorldRadius: number;
    // private queue: DoubleBufferedQueue<RenderSection>;
    // private sections: Long2ReferenceMap<RenderSection>;
    // private addNearbySections(arg0: RenderSectionVisitor, arg1: Viewport, arg2: number): void;
    findVisible(arg0: RenderSectionVisitor, arg1: Viewport, arg2: number, arg3: boolean, arg4: number): void;
    // private getRenderSection(arg0: number, arg1: number, arg2: number): RenderSection;
    // private init(arg0: RenderSectionVisitor, arg1: WriteQueue<RenderSection>, arg2: Viewport, arg3: boolean, arg4: number): void;
    // private initOutsideWorldHeight(arg0: WriteQueue<RenderSection>, arg1: Viewport, arg2: number, arg3: number): boolean;
    // private initWithinWorld(arg0: RenderSectionVisitor, arg1: WriteQueue<RenderSection>, arg2: Viewport, arg3: boolean, arg4: number): void;
    // private tryVisitNode(arg0: WriteQueue<RenderSection>, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Viewport): void;
}