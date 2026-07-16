import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
export class LoaderLibrary extends Enum<LoaderLibrary> {
    static ASM: LoaderLibrary;
    static ASM_ANALYSIS: LoaderLibrary;
    static ASM_COMMONS: LoaderLibrary;
    static ASM_TREE: LoaderLibrary;
    static ASM_UTIL: LoaderLibrary;
    static CLASS_TWEAKER: LoaderLibrary;
    static FABRIC_LOADER: LoaderLibrary;
    static FABRIC_LOADER_JUNIT: LoaderLibrary;
    static JUNIT_API: LoaderLibrary;
    static JUNIT_JUPITER: LoaderLibrary;
    static JUNIT_PLATFORM_ENGINE: LoaderLibrary;
    static JUNIT_PLATFORM_LAUNCHER: LoaderLibrary;
    static LOG4J_API: LoaderLibrary;
    static LOG4J_CONFIG: LoaderLibrary;
    static LOG4J_CORE: LoaderLibrary;
    static LOG4J_PLUGIN_3: LoaderLibrary;
    static MAPPING_IO: LoaderLibrary;
    static SAT4J_CORE: LoaderLibrary;
    static SAT4J_PB: LoaderLibrary;
    static SERVER_LAUNCH: LoaderLibrary;
    static SERVER_LAUNCHER: LoaderLibrary;
    static SLF4J_API: LoaderLibrary;
    static SPONGE_MIXIN: LoaderLibrary;
    static TINY_REMAPPER: LoaderLibrary;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LoaderLibrary;
    static values(): LoaderLibrary[];
    private constructor(arg2: Class<Object>)
    private constructor(arg2: Path)
    private constructor(arg2: string, arg3: boolean)
    private constructor(arg2: string, arg3: EnvType)
    private constructor(arg2: string, arg3: EnvType, arg4: boolean)
    // private env: EnvType;
    // private junitRunOnly: boolean;
    // private path: Path;
    isApplicable(arg0: EnvType, arg1: boolean): boolean;
    name(): "FABRIC_LOADER" | "MAPPING_IO" | "SPONGE_MIXIN" | "TINY_REMAPPER" | "CLASS_TWEAKER" | "ASM" | "ASM_ANALYSIS" | "ASM_COMMONS" | "ASM_TREE" | "ASM_UTIL" | "SAT4J_CORE" | "SAT4J_PB" | "SERVER_LAUNCH" | "SERVER_LAUNCHER" | "JUNIT_API" | "JUNIT_PLATFORM_ENGINE" | "JUNIT_PLATFORM_LAUNCHER" | "JUNIT_JUPITER" | "FABRIC_LOADER_JUNIT" | "LOG4J_API" | "LOG4J_CORE" | "LOG4J_CONFIG" | "LOG4J_PLUGIN_3" | "SLF4J_API";
}