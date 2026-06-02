import type { JsonObject } from '../../../../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { RangeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/range/RangeValueGroup.d.ts'
/**
 * Allows adjusting your attack range and scan range.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt:31}
 */
export class KillAuraRange extends RangeValueGroup implements MinecraftShortcuts {
    static INSTANCE: KillAuraRange;
    // private currentScanRangeAddition: number;
    /*not mapped: */ getScanRange$liquidbounce(): number;
    // private scanRangeIncrease: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getScanRangeIncrease(): ClosedFloatingPointRange<number>;
    /**
     * Migrates the old values from the config.
     *
     * todo: remove this when no one uses the format anymore
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/features/KillAuraRange.kt:53}
     */
    migrateFromValues(map: { [key: string]: JsonObject }): void;
    update(): void;
    // private withDummy<T extends Object | number | string | boolean>(name: string, jsonObject: JsonObject, value: T): T;
}