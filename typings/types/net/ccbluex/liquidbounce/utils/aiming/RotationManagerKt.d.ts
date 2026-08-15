import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MovementCorrection } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/features/MovementCorrection.d.ts'
export class RotationManagerKt extends Object {
    static resolveMovementYaw(playerYaw: number, managedYaw: number, movementCorrection: MovementCorrection | null): number;
}