import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { EnvType } from '../../../../../../net/fabricmc/api/EnvType.d.ts'
import type { LibClassifier$LibraryType } from '../../../../../../net/fabricmc/loader/impl/game/LibClassifier$LibraryType.d.ts'
export class McLibrary extends Enum<McLibrary> implements LibClassifier$LibraryType {
    static GSON: McLibrary;
    static LOG4J_API: McLibrary;
    static LOG4J_CONFIG: McLibrary;
    static LOG4J_CORE: McLibrary;
    static LOG4J_PLUGIN: McLibrary;
    static LOG4J_PLUGIN_2: McLibrary;
    static LOG4J_PLUGIN_3: McLibrary;
    static MC_ASSETS_ROOT: McLibrary;
    static MC_BUNDLER: McLibrary;
    static MC_CLIENT: McLibrary;
    static MC_COMMON: McLibrary;
    static MC_SERVER: McLibrary;
    static MODLOADER: McLibrary;
    static REALMS: McLibrary;
    static SLF4J_API: McLibrary;
    static SLF4J_CORE: McLibrary;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): McLibrary;
    static values(): (Object | null)[];
    private constructor(arg2: string[])
    private constructor(arg2: string)
    private constructor(arg2: EnvType, arg3: string[])
    // private env: EnvType;
    readonly paths: string[];
    getPaths(): string[];
    isApplicable(arg0: EnvType): boolean;
    name(): "MC_CLIENT" | "MC_SERVER" | "MC_COMMON" | "MC_ASSETS_ROOT" | "MC_BUNDLER" | "REALMS" | "MODLOADER" | "LOG4J_API" | "LOG4J_CORE" | "LOG4J_CONFIG" | "LOG4J_PLUGIN" | "LOG4J_PLUGIN_2" | "LOG4J_PLUGIN_3" | "GSON" | "SLF4J_API" | "SLF4J_CORE";
}