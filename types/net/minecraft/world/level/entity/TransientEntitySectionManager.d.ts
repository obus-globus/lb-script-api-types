import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TransientEntitySectionManagerAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/TransientEntitySectionManagerAccessor.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { EntityAccess } from '../../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityLookup } from '../../../../../net/minecraft/world/level/entity/EntityLookup.d.ts'
import type { EntitySection } from '../../../../../net/minecraft/world/level/entity/EntitySection.d.ts'
import type { EntitySectionStorage } from '../../../../../net/minecraft/world/level/entity/EntitySectionStorage.d.ts'
import type { LevelCallback } from '../../../../../net/minecraft/world/level/entity/LevelCallback.d.ts'
import type { LevelEntityGetter } from '../../../../../net/minecraft/world/level/entity/LevelEntityGetter.d.ts'
export class TransientEntitySectionManager<T extends EntityAccess> extends Object implements TransientEntitySectionManagerAccessor<EntityAccess> {
    constructor(entityClass: Class<T>, callbacks: LevelCallback<T>)
    // private callbacks: LevelCallback<T>;
    readonly entityGetter: LevelEntityGetter<T>;
    // private entityStorage: EntityLookup<T>;
    // private sectionStorage: EntitySectionStorage<T>;
    // private tickingChunks: (Object | null)[];
    addEntity(entity: T): void;
    count(): number;
    gatherStats(): string;
    getEntityGetter(): LevelEntityGetter<T>;
    // private removeSectionIfEmpty(sectionPos: number, section: EntitySection<T>): void;
    startTicking(pos: ChunkPos): void;
    stopTicking(pos: ChunkPos): void;
}