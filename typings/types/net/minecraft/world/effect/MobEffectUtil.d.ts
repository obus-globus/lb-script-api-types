import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class MobEffectUtil extends Object {
    static addEffectToPlayersAround(paramlevel: ServerLevel, paramsource: Entity, paramposition: Vec3, paramradius: number, parameffectInstance: MobEffectInstance, paramdisplayEffectLimit: number): ServerPlayer[];
    static formatDuration(paraminstance: MobEffectInstance, paramscale: number, paramtickrate: number): Component;
    static getDigSpeedAmplification(parammob: LivingEntity): number;
    static hasDigSpeed(parammob: LivingEntity): boolean;
    static hasWaterBreathing(parammob: LivingEntity): boolean;
    static shouldEffectsRefillAirsupply(parammob: LivingEntity): boolean;
    constructor()
}