import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { OcclusionCuller$GraphOcclusionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller$GraphOcclusionVisitor.d.ts'
import type { OcclusionCuller$VisibilityTestingVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller$VisibilityTestingVisitor.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { DoubleBufferedQueue } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/DoubleBufferedQueue.d.ts'
import type { ReadQueue } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/ReadQueue.d.ts'
import type { WriteQueue } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/collections/WriteQueue.d.ts'
import type { CancellationToken } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
import type { SectionPos } from '../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class OcclusionCuller extends Object {
    static isWithinNearbySectionFrustum(paramarg0: Viewport, paramarg1: RenderSection): boolean;
    constructor(arg0: JavaMap<any, any>, arg1: Level)
    // private inBoundsOrigin: SectionPos;
    // private level: Level;
    // private origin: SectionPos;
    // private outOfWorldDirection: number;
    // private outOfWorldHeight: number;
    // private outOfWorldRadius: number;
    // private queue: DoubleBufferedQueue<RenderSection>;
    // private searchDistanceLocal: number;
    // private searchDistanceRegular: number;
    // private sections: JavaMap<any, any>;
    // private token: number;
    // private tokenSource: number;
    // private useOcclusionCulling: boolean;
    // private viewport: Viewport;
    // private visitorLocal: OcclusionCuller$VisibilityTestingVisitor;
    // private visitorRegular: OcclusionCuller$GraphOcclusionVisitor;
    // private visitorWide: OcclusionCuller$GraphOcclusionVisitor;
    // private addNearbySections(arg0: Viewport): void;
    findVisible(arg0: OcclusionCuller$GraphOcclusionVisitor, arg1: OcclusionCuller$GraphOcclusionVisitor, arg2: OcclusionCuller$VisibilityTestingVisitor, arg3: Viewport, arg4: number, arg5: number, arg6: boolean, arg7: CancellationToken): void;
    // private getRenderSection(arg0: number, arg1: number, arg2: number): RenderSection;
    // private getRenderSection(arg0: SectionPos): RenderSection;
    // private init(arg0: WriteQueue<RenderSection>): void;
    // private initOutsideWorldHeight(arg0: WriteQueue<RenderSection>): boolean;
    // private initWithinWorld(arg0: WriteQueue<RenderSection>): void;
    // private joinVisibilityData(arg0: number[], arg1: RenderSection, arg2: Viewport, arg3: number): number;
    // private processQueue(arg0: ReadQueue<RenderSection>, arg1: WriteQueue<RenderSection>): void;
    // private tryInitNode(arg0: WriteQueue<RenderSection>, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private tryVisitNode(arg0: WriteQueue<RenderSection>, arg1: RenderSection, arg2: number, arg3: number, arg4: number, arg5: RenderSection, arg6: number): void;
    // private visitAll(arg0: RenderSection): void;
    // private visitNeighbors(arg0: WriteQueue<RenderSection>, arg1: RenderSection, arg2: number, arg3: number, arg4: number, arg5: SectionPos): void;
    // private visitNode(arg0: WriteQueue<RenderSection>, arg1: RenderSection, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean): void;
}