import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
export class DodgePlan extends Object {
    constructor(directionalInput: DirectionalInput, shouldJump: boolean, yawChange: number | null, useTimer: boolean)
    readonly directionalInput: DirectionalInput;
    /**
     * Should the player jump at the next possible time?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlanner.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlanner.kt:42}
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