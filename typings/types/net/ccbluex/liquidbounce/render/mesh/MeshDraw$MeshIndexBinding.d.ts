import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Describes how a {@link MeshDraw} resolves its index buffer when it is submitted.
 *
 * Some meshes own a dedicated uploaded index buffer, while others rely on
 * vanilla's shared sequential buffers and must resolve the current buffer
 * lazily at draw time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:59}
 */
export interface MeshDraw$MeshIndexBinding extends Object{
}