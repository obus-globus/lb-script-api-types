import type { Reader } from '../../../../../../../../java/io/Reader.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Represents the locally available shop configurations
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt:81}
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ShopConfigPreset;
    static values(): ShopConfigPreset[];
    private constructor(tag: string, localFileName: string)
    // private localFileName: string;
    readonly tag: string;
    reader(): Reader;
    name(): "PIKA_NETWORK" | "BLOCKSMC" | "CUBECRAFT" | "TEAMHOLY" | "FUNNYMC" | "DEXLAND";
}