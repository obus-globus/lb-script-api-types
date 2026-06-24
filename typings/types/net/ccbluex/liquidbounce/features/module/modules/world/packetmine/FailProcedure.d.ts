import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { MineTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
/**
 * Determines what PacketMine should do if we can't look at the target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:96}
 */
export class FailProcedure extends Enum<FailProcedure> {
    static ABORT: FailProcedure;
    static CONTINUE: FailProcedure;
    static PAUSE: FailProcedure;
    static getEntries(): FailProcedure[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FailProcedure;
    static values(): (Object | null)[];
    private constructor()
    /**
     * `true` when the actual logic should not be executed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L134 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:134}
     */
    execute(mineTarget: MineTarget): boolean;
    name(): "ABORT" | "PAUSE" | "CONTINUE";
}