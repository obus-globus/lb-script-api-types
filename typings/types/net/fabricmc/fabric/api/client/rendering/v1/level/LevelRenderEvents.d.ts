import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelExtractionContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelExtractionContext.d.ts'
import type { LevelRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderContext.d.ts'
import type { LevelRenderEvents$AfterBlockOutlineExtraction } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$AfterBlockOutlineExtraction.d.ts'
import type { LevelRenderEvents$AfterOpaqueTerrain } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$AfterOpaqueTerrain.d.ts'
import type { LevelRenderEvents$AfterSolidFeatures } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$AfterSolidFeatures.d.ts'
import type { LevelRenderEvents$AfterTranslucentFeatures } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$AfterTranslucentFeatures.d.ts'
import type { LevelRenderEvents$AfterTranslucentTerrain } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$AfterTranslucentTerrain.d.ts'
import type { LevelRenderEvents$BeforeBlockOutline } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$BeforeBlockOutline.d.ts'
import type { LevelRenderEvents$BeforeGizmos } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$BeforeGizmos.d.ts'
import type { LevelRenderEvents$BeforeTranslucentTerrain } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$BeforeTranslucentTerrain.d.ts'
import type { LevelRenderEvents$CollectSubmits } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$CollectSubmits.d.ts'
import type { LevelRenderEvents$EndExtraction } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$EndExtraction.d.ts'
import type { LevelRenderEvents$EndMain } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$EndMain.d.ts'
import type { LevelRenderEvents$StartMain } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderEvents$StartMain.d.ts'
import type { LevelTerrainRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelTerrainRenderContext.d.ts'
import type { Event } from '../../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { BlockOutlineRenderState } from '../../../../../../../../net/minecraft/client/renderer/state/level/BlockOutlineRenderState.d.ts'
import type { HitResult } from '../../../../../../../../net/minecraft/world/phys/HitResult.d.ts'
export class LevelRenderEvents extends Object {
    static AFTER_BLOCK_OUTLINE_EXTRACTION: Event<(param0: LevelExtractionContext, param1: HitResult) => void>;
    static AFTER_OPAQUE_TERRAIN: Event<(param0: LevelTerrainRenderContext) => void>;
    static AFTER_SOLID_FEATURES: Event<(param0: LevelRenderContext) => void>;
    static AFTER_TRANSLUCENT_FEATURES: Event<(param0: LevelRenderContext) => void>;
    static AFTER_TRANSLUCENT_TERRAIN: Event<(param0: LevelRenderContext) => void>;
    static BEFORE_BLOCK_OUTLINE: Event<(param0: LevelRenderContext, param1: BlockOutlineRenderState) => kotlin.Boolean>;
    static BEFORE_GIZMOS: Event<(param0: LevelRenderContext) => void>;
    static BEFORE_TRANSLUCENT_TERRAIN: Event<(param0: LevelRenderContext) => void>;
    static COLLECT_SUBMITS: Event<(param0: LevelRenderContext) => void>;
    static END_EXTRACTION: Event<(param0: LevelExtractionContext) => void>;
    static END_MAIN: Event<(param0: LevelRenderContext) => void>;
    static START_MAIN: Event<(param0: LevelTerrainRenderContext) => void>;
    private constructor()
}