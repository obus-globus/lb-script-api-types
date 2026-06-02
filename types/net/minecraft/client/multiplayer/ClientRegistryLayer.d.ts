import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { LayeredRegistryAccess } from '../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
export class ClientRegistryLayer extends Enum<ClientRegistryLayer> {
    static REMOTE: ClientRegistryLayer;
    static STATIC: ClientRegistryLayer;
    static createRegistryAccess(): LayeredRegistryAccess<ClientRegistryLayer>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientRegistryLayer;
    static values(): (Object | null)[];
    private constructor()
    name(): "STATIC" | "REMOTE";
}