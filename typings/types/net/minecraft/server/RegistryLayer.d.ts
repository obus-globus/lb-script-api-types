import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { LayeredRegistryAccess } from '../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
export class RegistryLayer extends Enum<RegistryLayer> {
    static DIMENSIONS: RegistryLayer;
    static RELOADABLE: RegistryLayer;
    static STATIC: RegistryLayer;
    static WORLDGEN: RegistryLayer;
    static createRegistryAccess(): LayeredRegistryAccess<RegistryLayer>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RegistryLayer;
    static values(): (Object | null)[];
    private constructor()
    name(): "STATIC" | "WORLDGEN" | "DIMENSIONS" | "RELOADABLE";
}