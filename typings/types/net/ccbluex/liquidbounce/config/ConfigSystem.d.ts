import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
import type { Config } from '../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Value } from '../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
/**
 * A hierarchy config system
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:40}
 */
export class ConfigSystem extends Object {
    static INSTANCE: ConfigSystem;
    static KEY_PREFIX: string;
    KEY_PREFIX: string;
    // private backupFolder: File;
    /*not mapped: */ getBackupFolder$liquidbounce(): File;
    readonly configs: Config[];
    // private isFirstLaunch: boolean;
    /*not mapped: */ isFirstLaunch(): boolean;
    // private logger: Logger;
    readonly rootFolder: File;
    readonly userConfigsFolder: File;
    /**
     * Create a ZIP file backup of configs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:139}
     */
    backup(fileName: string, groups: Config[]): void;
    /**
     * Deserialize a value from a json object
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L288 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:288}
     */
    deserializeValue(value: Value<Object>, jsonObject: JsonObject): void;
    /**
     * Deserialize a config from a reader, and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L248 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:248}
     */
    deserializeValueGroup(valueGroup: ValueGroup, jsonElement: JsonElement): void;
    deserializeValueGroup(valueGroup: ValueGroup, reader: Reader, gson: Gson): void;
    // private ensureRootKeys(): void;
    findValueByKey(key: string): Value<Object> | null;
    findValueGroupByKey(key: string): ValueGroup | null;
    load(config: Config): void;
    /**
     * Loads all registered configs.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L166 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:166}
     */
    loadAll(): void;
    // private normalizeKeyInput(key: string): string;
    /**
     * Restore a backup from a ZIP file to the configs
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:152}
     */
    restore(fileName: string): void;
    /**
     * Create an config based on an existing tree
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L122 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:122}
     */
    root(name: string, tree: E[]): Config;
    root(config: Config): Config;
    /**
     * Serialize a config to a writer and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:233}
     */
    serializeValueGroup(valueGroup: ValueGroup, gson: Gson): JsonObject;
    // private serializeValueGroup(valueGroup: ValueGroup, writer: Writer, gson: Gson): void;
    /**
     * Store config to a file (will be created if not exists).
     *
     * The config should be known to the config system.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L204 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:204}
     */
    store(config: Config): void;
    /**
     * All configs known to the config system should be stored now.
     * This will overwrite all existing files with the new values.
     *
     * These configs are root configs, which always create a new file with their name.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt#L194 | src/main/kotlin/net/ccbluex/liquidbounce/config/ConfigSystem.kt:194}
     */
    storeAll(): void;
    valueGroupsKeySequence(prefix: string): Sequence<string>;
    valueKeySequence(prefix: string): Sequence<string>;
}