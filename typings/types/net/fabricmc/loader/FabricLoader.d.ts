import type { File } from '../../../java/io/File.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../net/fabricmc/api/EnvType.d.ts'
import type { ModContainer } from '../../../net/fabricmc/loader/ModContainer.d.ts'
import type { FabricLoader as FabricLoader_2 } from '../../../net/fabricmc/loader/api/FabricLoader.d.ts'
import type { MappingResolver } from '../../../net/fabricmc/loader/api/MappingResolver.d.ts'
import type { ObjectShare } from '../../../net/fabricmc/loader/api/ObjectShare.d.ts'
export abstract class FabricLoader extends Object implements FabricLoader_2 {
    static INSTANCE: FabricLoader;
    static getInstance(): FabricLoader_2;
    constructor()
    getConfigDir(): Path[];
    getConfigDirectory(): File;
    getEntrypoints<T extends unknown>(arg0: string, arg1: Class<T>): T[];
    getEnvironmentType(): EnvType;
    getGameDir(): Path[];
    getGameDirectory(): File;
    getGameInstance(): Object;
    getMappingResolver(): MappingResolver;
    getModContainers(): ModContainer[];
    getMods(): ModContainer[];
    getModsDirectory(): File;
    getModsDirectory0(): Path[];
    getObjectShare(): ObjectShare;
    getRawGameVersion(): string;
    isDevelopmentEnvironment(): boolean;
    isModLoaded(arg0: string): boolean;
}