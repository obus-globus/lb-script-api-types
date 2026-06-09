import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteSource$DiscardableLoader } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteSource$DiscardableLoader.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export interface SpriteSource$Output extends Object {
    add(id: Identifier, sprite: SpriteSource$DiscardableLoader): void;
    add(id: Identifier, resource: Resource): void;
    removeAll(predicate: (param0: Identifier) => kotlin.Boolean): void;
}