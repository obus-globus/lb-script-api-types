import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Represents the locally available shop configurations
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt:78}
 */
export class ShopConfigPreset extends Enum<ShopConfigPreset> implements Tagged {
    static BLOCKSMC: ShopConfigPreset;
    static CUBECRAFT: ShopConfigPreset;
    static Companion: Tagged$Companion;
    static DEXLAND: ShopConfigPreset;
    static FUNNYMC: ShopConfigPreset;
    static PIKA_NETWORK: ShopConfigPreset;
    static TEAMHOLY: ShopConfigPreset;
    static getEntries(): ShopConfigPreset[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShopConfigPreset;
    static values(): (Object | null)[];
    private constructor(tag: string, localFileName: string)
    readonly internalPath: string;
    readonly tag: string;
    name(): "PIKA_NETWORK" | "BLOCKSMC" | "CUBECRAFT" | "TEAMHOLY" | "FUNNYMC" | "DEXLAND";
}