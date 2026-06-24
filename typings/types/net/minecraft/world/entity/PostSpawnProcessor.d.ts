import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export interface PostSpawnProcessor<T extends Entity> extends Object{
    andThen(after: PostSpawnProcessor<T>): PostSpawnProcessor<T>;
    apply(target: T): void;
}