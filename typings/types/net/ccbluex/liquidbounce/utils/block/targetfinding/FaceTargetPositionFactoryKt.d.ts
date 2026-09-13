import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
export class FaceTargetPositionFactoryKt extends Object {
    /**
     * Trims a face to be only as wide as the config allows it to be
     *
     * @param scale fraction of the face's width removed on each side
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:63}
     */
    static trimFace(face: AlignedFace, scale: number): AlignedFace;
}