import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ShaderMap } from '../../../../net/irisshaders/iris/pipeline/programs/ShaderMap.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
export interface ShaderRenderingPipeline extends Object, WorldRenderingPipeline{
    getFrameUpdateNotifier(): FrameUpdateNotifier;
    getShaderMap(): ShaderMap;
    shouldOverrideShaders(): boolean;
}