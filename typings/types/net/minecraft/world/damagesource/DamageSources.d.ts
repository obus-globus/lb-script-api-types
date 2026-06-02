import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { FireworkRocketEntity } from '../../../../net/minecraft/world/entity/projectile/FireworkRocketEntity.d.ts'
import type { AbstractArrow } from '../../../../net/minecraft/world/entity/projectile/arrow/AbstractArrow.d.ts'
import type { Fireball } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/Fireball.d.ts'
import type { WitherSkull } from '../../../../net/minecraft/world/entity/projectile/hurtingprojectile/WitherSkull.d.ts'
import type { Explosion } from '../../../../net/minecraft/world/level/Explosion.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DamageSources extends Object {
    constructor(registries: RegistryAccess)
    // private cactus: DamageSource;
    // private campfire: DamageSource;
    // private cramming: DamageSource;
    damageTypes: DamageType[];
    // private dragonBreath: DamageSource;
    // private drown: DamageSource;
    // private dryOut: DamageSource;
    // private enderPearl: DamageSource;
    // private fall: DamageSource;
    // private fellOutOfWorld: DamageSource;
    // private flyIntoWall: DamageSource;
    // private freeze: DamageSource;
    // private generic: DamageSource;
    // private genericKill: DamageSource;
    // private hotFloor: DamageSource;
    // private inFire: DamageSource;
    // private inWall: DamageSource;
    // private lava: DamageSource;
    // private lightningBolt: DamageSource;
    // private magic: DamageSource;
    // private onFire: DamageSource;
    // private outsideBorder: DamageSource;
    // private stalagmite: DamageSource;
    // private starve: DamageSource;
    // private sweetBerryBush: DamageSource;
    // private wither: DamageSource;
    anvil(entity: Entity): DamageSource;
    arrow(arrow: AbstractArrow, owner: Entity): DamageSource;
    badRespawnPointExplosion(boomPos: Vec3): DamageSource;
    cactus(): DamageSource;
    campfire(): DamageSource;
    cramming(): DamageSource;
    dragonBreath(): DamageSource;
    drown(): DamageSource;
    dryOut(): DamageSource;
    enderPearl(): DamageSource;
    explosion(entity: Entity, cause: Entity): DamageSource;
    explosion(explosion: Explosion): DamageSource;
    fall(): DamageSource;
    fallingBlock(entity: Entity): DamageSource;
    fallingStalactite(entity: Entity): DamageSource;
    fellOutOfWorld(): DamageSource;
    fireball(fireball: Fireball, owner: Entity): DamageSource;
    fireworks(rocket: FireworkRocketEntity, owner: Entity): DamageSource;
    flyIntoWall(): DamageSource;
    freeze(): DamageSource;
    generic(): DamageSource;
    genericKill(): DamageSource;
    hotFloor(): DamageSource;
    inFire(): DamageSource;
    inWall(): DamageSource;
    indirectMagic(entity: Entity, owner: Entity): DamageSource;
    lava(): DamageSource;
    lightningBolt(): DamageSource;
    mace(owner: Entity): DamageSource;
    magic(): DamageSource;
    mobAttack(mob: LivingEntity): DamageSource;
    mobProjectile(entity: Entity, mob: LivingEntity): DamageSource;
    noAggroMobAttack(mob: LivingEntity): DamageSource;
    onFire(): DamageSource;
    outOfBorder(): DamageSource;
    playerAttack(player: Player): DamageSource;
    sonicBoom(entity: Entity): DamageSource;
    source(key: ResourceKey<DamageType>): DamageSource;
    source(key: ResourceKey<DamageType>, cause: Entity): DamageSource;
    source(key: ResourceKey<DamageType>, directEntity: Entity, causingEntity: Entity): DamageSource;
    spit(entity: Entity, mob: LivingEntity): DamageSource;
    stalagmite(): DamageSource;
    starve(): DamageSource;
    sting(mob: LivingEntity): DamageSource;
    sweetBerryBush(): DamageSource;
    thorns(source: Entity): DamageSource;
    thrown(entity: Entity, owner: Entity): DamageSource;
    trident(trident: Entity, owner: Entity): DamageSource;
    windCharge(entity: Entity, mob: LivingEntity): DamageSource;
    wither(): DamageSource;
    witherSkull(witherSkull: WitherSkull, owner: Entity): DamageSource;
}