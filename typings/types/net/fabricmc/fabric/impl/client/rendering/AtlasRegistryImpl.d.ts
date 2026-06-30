import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AtlasManager$AtlasConfig } from '../../../../../../net/minecraft/client/resources/model/sprite/AtlasManager$AtlasConfig.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AtlasRegistryImpl extends Object {
    static finalizeConfigs(): AtlasManager$AtlasConfig[];
    static generateTextureLocation(paramarg0: Identifier): Identifier;
    static getAtlases(): AtlasManager$AtlasConfig[];
    static register(paramarg0: AtlasManager$AtlasConfig): void;
    private constructor()
}