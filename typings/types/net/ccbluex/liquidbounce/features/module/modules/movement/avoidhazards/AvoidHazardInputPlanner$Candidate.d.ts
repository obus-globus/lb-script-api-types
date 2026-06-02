import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DirectionalInput } from '../../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
export class AvoidHazardInputPlanner$Candidate extends Object {
    constructor(input: DirectionalInput, angle: number)
    readonly angle: number;
    readonly input: DirectionalInput;
    component1(): DirectionalInput;
    component2(): number;
    copy(input: DirectionalInput, angle: number): AvoidHazardInputPlanner$Candidate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}