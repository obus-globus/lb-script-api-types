import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Scoped vertex writing target owned by {@link BatchCollector}.
 *
 * Close the scope after writing vertices so collector-specific draw finalization can run.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshBuildScope.kt:29}
 */
export interface MeshBuildScope extends AutoCloseable, Object{
    readonly consumer: VertexConsumer;
    close(): void;
}