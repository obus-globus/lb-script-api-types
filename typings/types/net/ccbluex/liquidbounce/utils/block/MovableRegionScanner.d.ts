import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class MovableRegionScanner extends Object {
    constructor()
    readonly currentRegion: BoundingBox;
    clearRegion(): void;
    // private computeDifference(region: BoundingBox, lastRegion: BoundingBox): BoundingBox[];
    /**
     * Moves the current region; returns regions that have been newly covered
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/MovableRegionScanner.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/MovableRegionScanner.kt:34}
     */
    moveTo(region: BoundingBox): BoundingBox[];
}