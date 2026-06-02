import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotations } from '../../../../../net/minecraft/core/Rotations.d.ts'
export class ArmorStand$ArmorStandPose extends Record {
    static CODEC: Codec<ArmorStand$ArmorStandPose>;
    static DEFAULT: ArmorStand$ArmorStandPose;
    constructor(head: Rotations, body: Rotations, leftArm: Rotations, rightArm: Rotations, leftLeg: Rotations, rightLeg: Rotations)
    // private body: Rotations;
    // private head: Rotations;
    // private leftArm: Rotations;
    // private leftLeg: Rotations;
    // private rightArm: Rotations;
    // private rightLeg: Rotations;
    body(): Rotations;
    equals(o: Object | null): boolean;
    hashCode(): number;
    head(): Rotations;
    leftArm(): Rotations;
    leftLeg(): Rotations;
    rightArm(): Rotations;
    rightLeg(): Rotations;
    toString(): string;
}