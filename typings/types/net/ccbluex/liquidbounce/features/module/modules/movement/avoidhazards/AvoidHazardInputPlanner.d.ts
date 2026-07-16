import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AvoidHazardInputPlanner$Candidate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/AvoidHazardInputPlanner$Candidate.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
/**
 * Picks a safe replacement input that stays as close to the original movement
 * direction as possible.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/AvoidHazardInputPlanner.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/AvoidHazardInputPlanner.kt:31}
 */
export class AvoidHazardInputPlanner extends Object {
    static INSTANCE: AvoidHazardInputPlanner;
    // private candidates: AvoidHazardInputPlanner$Candidate[];
    // private angleOf(input: DirectionalInput): number | null;
    // private angularDifference(a: number, b: number): number;
    // private axis(positive: boolean, negative: boolean): number;
    chooseSafeInput(originalInput: DirectionalInput, isSafe: (param0: DirectionalInput) => boolean): DirectionalInput;
}