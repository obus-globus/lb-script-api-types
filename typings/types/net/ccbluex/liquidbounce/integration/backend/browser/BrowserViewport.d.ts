import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserViewport$Companion } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport$Companion.d.ts'
import type { Vector2dc } from '../../../../../../org/joml/Vector2dc.d.ts'
import type { Vector2ic } from '../../../../../../org/joml/Vector2ic.d.ts'
/**
 * Represents a browser viewport with position, dimensions and rendering quality utilities
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:32}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:52}
     */
    getScaledDimensions(quality: number): Vector2ic;
    /**
     * Calculate zoom level based on quality factor
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:61}
     */
    getZoomLevel(quality: number): number;
    hashCode(): number;
    toString(): string;
    /**
     * Transform global coordinates to viewport-relative coordinates
     *
     * @returns Pair of (transformedX, transformedY) coordinates
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:45}
     */
    transform(globalX: number, globalY: number): Vector2dc;
    /**
     * Transform mouse coordinates according to quality scaling
     *
     * @returns Pair of (scaledX, scaledY) coordinates
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.kt:67}
     */
    transformMouse(mouseX: number, mouseY: number, quality: number): Vector2ic;
}