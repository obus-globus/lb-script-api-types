import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class RotationUtilKt extends Object {
    static setRotation(self: LocalPlayer, rotation: Rotation): void;
    static withFixedYaw(self: LocalPlayer, rotation: Rotation): number;
}