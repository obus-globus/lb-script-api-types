import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteResourceLoader } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteResourceLoader.d.ts'
import type { SpriteSource } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource.d.ts'
import type { SpriteSource$Loader } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$Loader.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class SpriteSourceList extends Object {
    static load(paramresourceManager: ResourceManager, paramatlasId: Identifier): SpriteSourceList;
    private constructor(sources: SpriteSource[])
    // private sources: SpriteSource[];
    list(resourceManager: ResourceManager): (param0: (param0: Identifier, param1: Resource) => SpriteContents) => SpriteContents[];
}