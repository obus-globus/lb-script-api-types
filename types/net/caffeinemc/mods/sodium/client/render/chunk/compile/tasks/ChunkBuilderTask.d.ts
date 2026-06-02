import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { JobDurationEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/JobDurationEstimator.d.ts'
import type { MeshTaskSizeEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/MeshTaskSizeEstimator.d.ts'
import type { UploadDurationEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/UploadDurationEstimator.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { CancellationToken } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/task/CancellationToken.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export abstract class ChunkBuilderTask<OUTPUT extends BuilderTaskOutput> extends Object implements CombinedCameraPos {
    constructor(arg0: RenderSection, arg1: number, arg2: Vector3dc)
    readonly absoluteCameraPos: Vector3dc;
    // private cameraPos: Vector3fc;
    readonly estimatedDuration: number;
    readonly estimatedSize: number;
    readonly estimatedUploadDuration: number;
    // private render: RenderSection;
    // private submitTime: number;
    calculateEstimations(arg0: JobDurationEstimator, arg1: MeshTaskSizeEstimator, arg2: UploadDurationEstimator): void;
    estimateTaskSizeWith(arg0: MeshTaskSizeEstimator): number;
    execute(arg0: ChunkBuildContext, arg1: CancellationToken): OUTPUT;
    getAbsoluteCameraPos(): Vector3dc;
    getEstimatedDuration(): number;
    getEstimatedSize(): number;
    getEstimatedUploadDuration(): number;
    getRelativeCameraPos(): Vector3fc;
}