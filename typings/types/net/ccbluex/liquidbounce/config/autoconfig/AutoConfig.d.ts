import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { AutoSettings } from '../../../../../net/ccbluex/liquidbounce/api/models/client/AutoSettings.d.ts'
import type { AutoSettingsStatusType } from '../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsStatusType.d.ts'
import type { AutoSettingsType } from '../../../../../net/ccbluex/liquidbounce/api/types/enums/AutoSettingsType.d.ts'
import type { IncludeConfiguration } from '../../../../../net/ccbluex/liquidbounce/config/autoconfig/IncludeConfiguration.d.ts'
export class AutoConfig extends Object {
    static INSTANCE: AutoConfig;
    readonly configs: AutoSettings[] | null;
    includeConfiguration: IncludeConfiguration;
    loadingNow: boolean;
    // private deserializeModuleValueGroup(jsonObject: JsonObject, modules: E[]): void;
    // private formatAutoConfigProtocolInfo(pVersion: number, pName: string): void;
    /**
     * Deserialize module configurable from a reader
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:106}
     */
    loadAutoConfig(jsonObject: JsonObject, modules: E[]): void;
    loadAutoConfig(reader: Reader, modules: E[]): void;
    loadAutoConfig(autoConfig: AutoSettings): void;
    // private printOutMetadata(jsonObject: JsonObject): void;
    /**
     * Reloads auto settings list.
     *
     * @returns successfully reloaded or not
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:80}
     */
    reloadConfigs(): boolean;
    /**
     * Created an auto config, which stores the moduleConfigur
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt#L254 | src/main/kotlin/net/ccbluex/liquidbounce/config/autoconfig/AutoConfig.kt:254}
     */
    serializeAutoConfig(writer: Writer, includeConfiguration: IncludeConfiguration, autoSettingsType: AutoSettingsType, statusType: AutoSettingsStatusType): void;
    withLoading(block: Function0<void>): void;
}