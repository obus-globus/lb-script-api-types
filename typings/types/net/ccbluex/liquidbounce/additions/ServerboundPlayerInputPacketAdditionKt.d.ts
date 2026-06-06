import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerboundPlayerInputPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerInputPacket.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
export class ServerboundPlayerInputPacketAdditionKt extends Object {
    /**
     * Changes the return value of record component {@link ServerboundPlayerInputPacket.input}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/additions/ServerboundPlayerInputPacketAddition.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/additions/ServerboundPlayerInputPacketAddition.kt:33}
     */
    static getForceSneak(paramarg0: ServerboundPlayerInputPacket): boolean;
    static getRawInput(paramarg0: ServerboundPlayerInputPacket): Input;
    static setForceSneak(paramarg0: ServerboundPlayerInputPacket, paramarg1: boolean): void;
}