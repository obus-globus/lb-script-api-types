import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SubmitRenderPhase } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/SubmitRenderPhase.d.ts'
import type { SubmitNode } from '../../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { TranslucentSubmit } from '../../../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
export class SubmitRenderPhases extends Object {
    static AFTER_TERRAIN: SubmitRenderPhase<SubmitNode>;
    static ALWAYS_ON_TOP: SubmitRenderPhase<SubmitNode>;
    static BREAKING_OVERLAY: SubmitRenderPhase<SubmitNode>;
    static GIZMOS: SubmitRenderPhase<SubmitNode>;
    static NAME_TAGS: SubmitRenderPhase<SubmitNode>;
    static OUTLINE: SubmitRenderPhase<SubmitNode>;
    static SEE_THROUGH_NAME_TAGS: SubmitRenderPhase<TranslucentSubmit>;
    static SHADOWS: SubmitRenderPhase<SubmitNode>;
    static SHAPE_OUTLINES: SubmitRenderPhase<SubmitNode>;
    static SOLID: SubmitRenderPhase<SubmitNode>;
    static TEXTS: SubmitRenderPhase<SubmitNode>;
    static TRANSLUCENT_BLOCKS_AND_ITEMS: SubmitRenderPhase<TranslucentSubmit>;
    static TRANSLUCENT_CUSTOM_GEOMETRY: SubmitRenderPhase<SubmitNode>;
    static TRANSLUCENT_MODELS: SubmitRenderPhase<TranslucentSubmit>;
    static WATER_MASK: SubmitRenderPhase<SubmitNode>;
    private constructor()
}