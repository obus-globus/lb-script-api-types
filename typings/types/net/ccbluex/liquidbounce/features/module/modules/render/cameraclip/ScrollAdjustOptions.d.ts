import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
/**
 * A configurable for scroll-adjusting values.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustValueGroup.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ScrollAdjustValueGroup.kt:31}
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