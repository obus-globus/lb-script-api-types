import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { NamespacedId } from '../../../../net/irisshaders/iris/shaderpack/materialmap/NamespacedId.d.ts'
export class PipelineManager extends Object {
    constructor(arg0: (param0: NamespacedId) => WorldRenderingPipeline)
    readonly pipeline: WorldRenderingPipeline;
    // private pipelineFactory: (param0: NamespacedId) => WorldRenderingPipeline;
    // private pipelinesPerDimension: JavaMap<NamespacedId, WorldRenderingPipeline>;
    readonly versionCounterForSodiumShaderReload: number;
    destroyPipeline(): void;
    getPipeline(): Optional<WorldRenderingPipeline>;
    getPipelineNullable(): WorldRenderingPipeline;
    getVersionCounterForSodiumShaderReload(): number;
    preparePipeline(arg0: NamespacedId): WorldRenderingPipeline;
    // private resetTextureState(): void;
}