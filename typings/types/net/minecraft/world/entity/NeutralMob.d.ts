import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { EntityReference } from '../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export interface NeutralMob extends Object{
    addPersistentAngerSaveData(output: ValueOutput): void;
    canAttack(target: LivingEntity): boolean;
    forgetCurrentTargetAndRefreshUniversalAnger(): void;
    getLastHurtByMob(): LivingEntity;
    getPersistentAngerEndTime(): number;
    getPersistentAngerTarget(): EntityReference<LivingEntity>;
    getTarget(): LivingEntity;
    getTargetUnchecked(): LivingEntity;
    isAngry(): boolean;
    isAngryAt(entity: LivingEntity, level: ServerLevel): boolean;
    isAngryAtAllPlayers(level: ServerLevel): boolean;
    level(): Level;
    playerDied(level: ServerLevel, player: Player): void;
    readPersistentAngerSaveData(level: Level, input: ValueInput): void;
    setLastHurtByMob(hurtBy: LivingEntity): void;
    setPersistentAngerEndTime(endTime: number): void;
    setPersistentAngerTarget(persistentAngerTarget: EntityReference<LivingEntity>): void;
    setTarget(target: LivingEntity): void;
    setTimeToRemainAngry(remainingTime: number): void;
    startPersistentAngerTimer(): void;
    stopBeingAngry(): void;
    updatePersistentAnger(level: ServerLevel, stayAngryIfTargetPresent: boolean): void;
}