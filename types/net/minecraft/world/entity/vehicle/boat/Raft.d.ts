import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { AbstractBoat } from '../../../../../../net/minecraft/world/entity/vehicle/boat/AbstractBoat.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class Raft extends AbstractBoat {
    static AXIS_SPECIFIC_ELASTICITY: Vec3;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static BUBBLE_TIME: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static ENTITY_ATTACHMENT_POINT: Vec3[];
    static FREEZE_HURT_FREQUENCY: number;
    static LEASHER_ATTACHMENT_POINT: Vec3[];
    static LEASH_ELASTIC_DIST: number;
    static LEASH_TAG: string;
    static LEASH_TOO_FAR_DIST: number;
    static MAXIMUM_ALLOWED_LEASHED_DIST: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static NBT_ATTACHMENT_KEY: string;
    static PADDLE_LEFT: number;
    static PADDLE_RIGHT: number;
    static PADDLE_SOUND_TIME: number;
    static SHARED_QUAD_ATTACHMENT_POINTS: Vec3[];
    static SPRING_DAMPENING: number;
    static STIFFNESS: number;
    static TAG_AIR: string;
    static TAG_CUSTOM_NAME: string;
    static TAG_DATA: string;
    static TAG_FALL_DISTANCE: string;
    static TAG_FIRE: string;
    static TAG_GLOWING: string;
    static TAG_ID: string;
    static TAG_INVULNERABLE: string;
    static TAG_MOTION: string;
    static TAG_NO_GRAVITY: string;
    static TAG_ON_GROUND: string;
    static TAG_PASSENGERS: string;
    static TAG_PORTAL_COOLDOWN: string;
    static TAG_POS: string;
    static TAG_ROTATION: string;
    static TAG_SILENT: string;
    static TAG_UUID: string;
    static TORSIONAL_ELASTICITY: number;
    static TOTAL_AIR_SUPPLY: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static canVehicleCollide(paramvehicle: Entity, paramentity: Entity): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Raft>, level: Level, dropItem: () => Item)
    rideHeight(dimensions: EntityDimensions): number;
}