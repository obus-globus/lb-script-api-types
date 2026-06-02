import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRenderPipeline } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderPipeline.d.ts'
export interface FabricRenderPipelineImpl extends Object, FabricRenderPipeline{
    fabric$setUsePipelineDrawModeForGuiSetter(arg0: boolean): void;
    usePipelineDrawModeForGui(): boolean;
}