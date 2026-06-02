import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BrowserAccelerationFlags$Companion } from '../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags$Companion.d.ts'
/**
 * Determines if acceleration is supported on the current system.
 * Is In Beta is a flag to prevent it from being used by default on a supported
 * but not tested system.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.kt#L22 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.kt:22}
 */
export class BrowserAccelerationFlags extends Object {
    static Companion: BrowserAccelerationFlags$Companion;
    static UNSUPPORTED: BrowserAccelerationFlags;
    constructor(isSupported: boolean, isBeta: boolean)
    // private isBeta: boolean;
    /*not mapped: */ isBeta(): boolean;
    // private isSupported: boolean;
    /*not mapped: */ isSupported(): boolean;
    component1(): boolean;
    component2(): boolean;
    copy(isSupported: boolean, isBeta: boolean): BrowserAccelerationFlags;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}