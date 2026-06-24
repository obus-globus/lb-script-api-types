import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserViewport$Companion } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport$Companion.d.ts'
import type { Vector2dc } from '../../../../../../org/joml/Vector2dc.d.ts'
import type { Vector2ic } from '../../../../../../org/joml/Vector2ic.d.ts'
/**
 * Represents a browser viewport with position, dimensions and rendering quality utilities
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:29}
 */
export class BrowserViewport extends Record {
    static Companion: BrowserViewport$Companion;
    constructor(x: number, y: number, width: number, height: number, fullScreen: boolean)
    // private fullScreen: boolean;
    /*not mapped: */ fullScreen(): boolean;
    // private height: number;
    /*not mapped: */ height(): number;
    // private width: number;
    /*not mapped: */ width(): number;
    // private x: number;
    /*not mapped: */ x(): number;
    // private y: number;
    /*not mapped: */ y(): number;
    component1(): number;
    component2(): number;
    component3(): number;
    component4(): number;
    component5(): boolean;
    copy(x: number, y: number, width: number, height: number, fullScreen: boolean): BrowserViewport;
    equals(other: Object | null): boolean;
    /**
     * Get the scaled dimensions for rendering based on quality setting
     *
     * @returns Pair of (scaledWidth, scaledHeight)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:48}
     */
    getScaledDimensions(quality: number): Vector2ic;
    /**
     * Calculate zoom level based on quality factor
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:58}
     */
    getZoomLevel(quality: number): number;
    hashCode(): number;
    toString(): string;
    /**
     * Transform global coordinates to viewport-relative coordinates
     *
     * @returns Pair of (transformedX, transformedY) coordinates
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:41}
     */
    transform(globalX: number, globalY: number): Vector2dc;
    /**
     * Transform mouse coordinates according to quality scaling
     *
     * @returns Pair of (scaledX, scaledY) coordinates
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:63}
     */
    transformMouse(mouseX: number, mouseY: number, quality: number): Vector2ic;
}