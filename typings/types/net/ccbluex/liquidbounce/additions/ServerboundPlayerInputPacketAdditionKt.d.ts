import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerboundPlayerInputPacket } from '../../../../net/minecraft/network/protocol/game/ServerboundPlayerInputPacket.d.ts'
import type { Input } from '../../../../net/minecraft/world/entity/player/Input.d.ts'
export class ServerboundPlayerInputPacketAdditionKt extends Object {
    /**
     * Changes the return value of record component {@link ServerboundPlayerInputPacket.input}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/additions/ServerboundPlayerInputPacketAddition.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/additions/ServerboundPlayerInputPacketAddition.kt:36}
     */
    static getForceSneak(paramarg0: ServerboundPlayerInputPacket): boolean;
    static getRawInput(paramarg0: ServerboundPlayerInputPacket): Input;
    static setForceSneak(paramarg0: ServerboundPlayerInputPacket, paramarg1: boolean): void;
}