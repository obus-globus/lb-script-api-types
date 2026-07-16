import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
export class RegistryLayer extends Enum<RegistryLayer> {
    static DIMENSIONS: RegistryLayer;
    static RELOADABLE: RegistryLayer;
    static STATIC: RegistryLayer;
    static WORLDGEN: RegistryLayer;
    static createRegistryAccess(): LayeredRegistryAccess<RegistryLayer>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RegistryLayer;
    static values(): RegistryLayer[];
    private constructor()
    name(): "STATIC" | "WORLDGEN" | "DIMENSIONS" | "RELOADABLE";
}