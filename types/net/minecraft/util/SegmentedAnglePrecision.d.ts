import type { Object } from '../../../java/lang/Object.d.ts'
import type { Direction } from '../../../net/minecraft/core/Direction.d.ts'
export class SegmentedAnglePrecision extends Object {
    constructor(bitPrecision: number)
    // private angleToDegree: number;
    // private degreeToAngle: number;
    readonly mask: number;
    // private precision: number;
    fromDegrees(degrees: number): number;
    fromDegreesWithTurns(degrees: number): number;
    fromDirection(direction: Direction): number;
    getMask(): number;
    isSameAxis(binaryAngleA: number, binaryAngleB: number): boolean;
    normalize(binaryAngle: number): number;
    toDegrees(binaryAngle: number): number;
    toDegreesWithTurns(binaryAngle: number): number;
}