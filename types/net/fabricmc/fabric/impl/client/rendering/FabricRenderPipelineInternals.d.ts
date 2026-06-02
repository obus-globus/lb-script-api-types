import type { RenderPipeline$Snippet } from '../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline$Snippet.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FabricRenderPipelineInternals extends Object {
    static getScopedUsePipelineVertexFormatForGui(): Optional<boolean>;
    static withSnippetUsePipelineVertexFormatForGui(paramarg0: () => RenderPipeline$Snippet, paramarg1: Optional<boolean>): RenderPipeline$Snippet;
    private constructor()
}