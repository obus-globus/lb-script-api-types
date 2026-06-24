import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { AsyncRenderTask } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/async/AsyncRenderTask.d.ts'
import type { CullResult } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/async/CullResult.d.ts'
import type { OcclusionCuller } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/OcclusionCuller.d.ts'
import type { SectionTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/SectionTree.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { CancellationToken } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class CullTask extends AsyncRenderTask<CullResult> {
    static NEVER_CANCELLED: CancellationToken;
    constructor(arg0: Viewport, arg1: number, arg2: number, arg3: number, arg4: OcclusionCuller, arg5: boolean, arg6: Level)
    readonly elapsedNanos: number;
    // private level: Level;
    // private occlusionCuller: OcclusionCuller;
    // private presentPatches: RenderSection[][];
    // private searchDistanceLocal: number;
    // private searchDistanceRegular: number;
    // private useOcclusionCulling: boolean;
    applyPresentPatches(arg0: SectionTree): void;
    getElapsedNanos(): number;
    registerPresentPatches(arg0: RenderSection[]): void;
    runTask(): CullResult;
}