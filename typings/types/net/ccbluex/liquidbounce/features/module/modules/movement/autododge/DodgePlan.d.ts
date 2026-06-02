import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
export class DodgePlan extends Object {
    constructor(directionalInput: DirectionalInput, shouldJump: boolean, yawChange: number | null, useTimer: boolean)
    readonly directionalInput: DirectionalInput;
    /**
     * Should the player jump at the next possible time?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlanner.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlanner.kt:39}
     */
    readonly shouldJump: boolean;
    readonly useTimer: boolean;
    readonly yawChange: number | null;
    component1(): DirectionalInput;
    component2(): boolean;
    component3(): number | null;
    component4(): boolean;
    copy(directionalInput: DirectionalInput, shouldJump: boolean, yawChange: number | null, useTimer: boolean): DodgePlan;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}