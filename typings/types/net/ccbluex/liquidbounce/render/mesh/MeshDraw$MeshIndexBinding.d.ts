import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Describes how a {@link MeshDraw} resolves its index buffer when it is submitted.
 *
 * Some meshes own a dedicated uploaded index buffer, while others rely on
 * vanilla's shared sequential buffers and must resolve the current buffer
 * lazily at draw time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:56}
 */
export interface MeshDraw$MeshIndexBinding extends Object{
}