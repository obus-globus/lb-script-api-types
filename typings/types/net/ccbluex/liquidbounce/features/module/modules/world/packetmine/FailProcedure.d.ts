import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { MineTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
/**
 * Determines what PacketMine should do if we can't look at the target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L99 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:99}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:137}
     */
    execute(mineTarget: MineTarget): boolean;
    name(): "ABORT" | "PAUSE" | "CONTINUE";
}