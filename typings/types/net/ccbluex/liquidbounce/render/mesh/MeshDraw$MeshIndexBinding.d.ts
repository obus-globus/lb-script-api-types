import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Describes how a {@link MeshDraw} resolves its index buffer when it is submitted.
 *
 * Some meshes own a dedicated uploaded index buffer, while others rely on
 * vanilla's shared sequential buffers and must resolve the current buffer
 * lazily at draw time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/render/mesh/MeshDraw.kt:56}
 */
export interface MeshDraw$MeshIndexBinding extends Object{
}