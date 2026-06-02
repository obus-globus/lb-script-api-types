import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VibrationSystem$Data } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$Data.d.ts'
import type { VibrationSystem$User } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$User.d.ts'
export interface VibrationSystem extends Object{
    getVibrationData(): VibrationSystem$Data;
    getVibrationUser(): VibrationSystem$User;
}