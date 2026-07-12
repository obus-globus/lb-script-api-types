import type { Reader } from '../../../../../../../../java/io/Reader.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Represents the locally available shop configurations
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt:81}
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ShopConfigPreset;
    static values(): (Object | null)[];
    private constructor(tag: string, localFileName: string)
    // private localFileName: string;
    readonly tag: string;
    reader(): Reader;
    name(): "PIKA_NETWORK" | "BLOCKSMC" | "CUBECRAFT" | "TEAMHOLY" | "FUNNYMC" | "DEXLAND";
}