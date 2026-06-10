import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { HitResult } from '../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AttackRange extends Record {
    static CODEC: Codec<AttackRange>;
    static STREAM_CODEC: StreamCodec<ByteBuf, AttackRange>;
    static defaultFor(paramlivingEntity: LivingEntity): AttackRange;
    // private hitboxMargin: number;
    // private maxCreativeReach: number;
    // private maxReach: number;
    // private minCreativeReach: number;
    // private minReach: number;
    // private mobFactor: number;
    effectiveMaxRange(entity: Entity): number;
    effectiveMinRange(entity: Entity): number;
    equals(o: Object | null): boolean;
    getClosesetHit(attacker: Entity, partial: number, matching: (param0: Entity) => boolean): HitResult;
    hashCode(): number;
    hitboxMargin(): number;
    // private isInRange(attacker: LivingEntity, distanceFunction: (param0: Vec3) => number, extraBuffer: number): boolean;
    isInRange(attacker: LivingEntity, boundingBox: AABB, extraBuffer: number): boolean;
    isInRange(attacker: LivingEntity, location: Vec3): boolean;
    maxCreativeReach(): number;
    maxReach(): number;
    minCreativeReach(): number;
    minReach(): number;
    mobFactor(): number;
    toString(): string;
}