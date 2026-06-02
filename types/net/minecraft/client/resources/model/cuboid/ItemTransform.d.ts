import type { PoseStack$Pose } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class ItemTransform extends Record {
    static NO_TRANSFORM: ItemTransform;
    constructor(rotation: Vector3fc, translation: Vector3fc, scale: Vector3fc)
    // private rotation: Vector3fc;
    // private scale: Vector3fc;
    // private translation: Vector3fc;
    apply(applyLeftHandFix: boolean, pose: PoseStack$Pose): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rotation(): Vector3fc;
    scale(): Vector3fc;
    toString(): string;
    translation(): Vector3fc;
}