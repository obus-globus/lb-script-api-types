import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AvoidHazardInputPlanner$Candidate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/AvoidHazardInputPlanner$Candidate.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
/**
 * Picks a safe replacement input that stays as close to the original movement
 * direction as possible.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/AvoidHazardInputPlanner.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/avoidhazards/AvoidHazardInputPlanner.kt:27}
 */
export class AvoidHazardInputPlanner extends Object {
    static INSTANCE: AvoidHazardInputPlanner;
    // private candidates: AvoidHazardInputPlanner$Candidate[];
    // private angleOf(input: DirectionalInput): number | null;
    // private angularDifference(a: number, b: number): number;
    // private axis(positive: boolean, negative: boolean): number;
    chooseSafeInput(originalInput: DirectionalInput, isSafe: (param0: DirectionalInput) => boolean): DirectionalInput;
}