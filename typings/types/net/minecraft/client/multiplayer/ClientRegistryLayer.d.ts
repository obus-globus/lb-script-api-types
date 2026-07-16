import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { LayeredRegistryAccess } from '../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
export class ClientRegistryLayer extends Enum<ClientRegistryLayer> {
    static REMOTE: ClientRegistryLayer;
    static STATIC: ClientRegistryLayer;
    static createRegistryAccess(): LayeredRegistryAccess<ClientRegistryLayer>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClientRegistryLayer;
    static values(): ClientRegistryLayer[];
    private constructor()
    name(): "STATIC" | "REMOTE";
}