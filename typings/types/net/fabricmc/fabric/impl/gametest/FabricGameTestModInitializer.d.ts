import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModInitializer } from '../../../../../net/fabricmc/api/ModInitializer.d.ts'
import type { RegistryLoadTask } from '../../../../../net/minecraft/resources/RegistryLoadTask.d.ts'
export class FabricGameTestModInitializer extends Object implements ModInitializer {
    static registerDynamicEntries(paramarg0: RegistryLoadTask<Object>[]): void;
    constructor()
    onInitialize(): void;
}