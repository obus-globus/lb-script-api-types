import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { MineTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
/**
 * Determines what PacketMine should do if we can't look at the target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L99 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:99}
 */
export class FailProcedure extends Enum<FailProcedure> {
    static ABORT: FailProcedure;
    static CONTINUE: FailProcedure;
    static PAUSE: FailProcedure;
    static getEntries(): FailProcedure[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): FailProcedure;
    static values(): FailProcedure[];
    private constructor()
    /**
     * `true` when the actual logic should not be executed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:137}
     */
    execute(mineTarget: MineTarget): boolean;
    name(): "ABORT" | "PAUSE" | "CONTINUE";
}