import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Describes how a {@link MeshDraw} resolves its index buffer when it is submitted.
 *
 * Some meshes own a dedicated uploaded index buffer, while others rely on
 * vanilla's shared sequential buffers and must resolve the current buffer
 * lazily at draw time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:56}
 */
export interface MeshDraw$MeshIndexBinding extends Object{
}