import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
export interface ServerboundPlayerInputPacketAddition extends Object{
    liquidBounce$forceSneak: boolean;
    liquidBounce$getRawInput(): Input;
}