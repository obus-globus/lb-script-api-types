import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class VibrationInfo extends Record {
    static CODEC: Codec<VibrationInfo>;
    // private distance: number;
    // private entity: Entity;
    // private gameEvent: Holder<GameEvent>;
    // private pos: Vec3;
    // private projectileOwnerUuid: UUID;
    // private uuid: UUID;
    distance(): number;
    entity(): Entity;
    equals(o: Object | null): boolean;
    gameEvent(): Holder<GameEvent>;
    getEntity(level: ServerLevel): Optional<Entity>;
    getProjectileOwner(level: ServerLevel): Optional<Entity>;
    hashCode(): number;
    pos(): Vec3;
    projectileOwnerUuid(): UUID;
    toString(): string;
    uuid(): UUID;
}