import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BrowserAccelerationFlags$Companion } from '../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags$Companion.d.ts'
/**
 * Determines if acceleration is supported on the current system.
 * Is In Beta is a flag to prevent it from being used by default on a supported
 * but not tested system.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.kt:27}
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