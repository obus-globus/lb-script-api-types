import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Scoped vertex writing target owned by {@link BatchCollector}.
 *
 * Close the scope after writing vertices so collector-specific draw finalization can run.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.kt:29}
 */
export interface MeshBuildScope extends AutoCloseable, Object{
    readonly consumer: VertexConsumer;
    close(): void;
}