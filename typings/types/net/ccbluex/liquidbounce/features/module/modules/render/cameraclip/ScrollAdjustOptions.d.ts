import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
/**
 * A configurable for scroll-adjusting values.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustValueGroup.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustValueGroup.kt:34}
 */
export class ScrollAdjustOptions extends Object {
    constructor(modifierKeyDefault: number, sensitivityDefault: number, sensitivityRange: ClosedFloatingPointRange<number>)
    readonly modifierKeyDefault: number;
    readonly sensitivityDefault: number;
    readonly sensitivityRange: ClosedFloatingPointRange<number>;
    component1(): number;
    component2(): number;
    component3(): ClosedFloatingPointRange<number>;
    copy(modifierKeyDefault: number, sensitivityDefault: number, sensitivityRange: ClosedFloatingPointRange<number>): ScrollAdjustOptions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}