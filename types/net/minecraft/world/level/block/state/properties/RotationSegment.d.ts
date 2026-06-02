import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
export class RotationSegment extends Object {
    static convertToDegrees(paramsegment: number): number;
    static convertToDirection(paramsegment: number): Optional<Direction>;
    static convertToSegment(paramrotDegrees: number): number;
    static convertToSegment(paramdirection: Direction): number;
    static getMaxSegmentIndex(): number;
    constructor()
}