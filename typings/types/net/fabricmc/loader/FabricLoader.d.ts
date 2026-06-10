import type { File } from '../../../java/io/File.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ModContainer } from '../../../net/fabricmc/loader/ModContainer.d.ts'
import type { FabricLoader as FabricLoader_2 } from '../../../net/fabricmc/loader/api/FabricLoader.d.ts'
export abstract class FabricLoader extends Object implements FabricLoader_2 {
    static INSTANCE: FabricLoader;
    static getInstance(): FabricLoader_2;
    constructor()
    getEntrypoints<T extends Object | number | string | boolean>(arg0: string, arg1: Class<T>): T[];
    getModContainers(): ModContainer[];
    getMods(): ModContainer[];
    getModsDirectory(): File;
    getModsDirectory0(): Path[];
}