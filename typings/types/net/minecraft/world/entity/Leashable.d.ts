import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Leashable$LeashData } from '../../../../net/minecraft/world/entity/Leashable$LeashData.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface Leashable extends Object{
    canBeLeashed(): boolean;
    canHaveALeashAttachedTo(entity: Entity): boolean;
    checkElasticInteractions(leashHolder: Entity, leashData: Leashable$LeashData): boolean;
    closeRangeLeashBehaviour(leashHolder: Entity): void;
    dropLeash(): void;
    getLeashData(): Leashable$LeashData;
    getLeashHolder(): Entity;
    getLeashOffset(): Vec3;
    getLeashOffset(partialTicks: number): Vec3;
    getQuadLeashOffsets(): Vec3[];
    isLeashed(): boolean;
    leashDistanceTo(entity: Entity): number;
    leashElasticDistance(): number;
    leashSnapDistance(): number;
    leashTooFarBehaviour(): void;
    mayBeLeashed(): boolean;
    onElasticLeashPull(): void;
    onLeashRemoved(): void;
    readLeashData(input: ValueInput): void;
    removeLeash(): void;
    setDelayedLeashHolderId(entityId: number): void;
    setLeashData(leashData: Leashable$LeashData): void;
    setLeashedTo(holder: Entity, synch: boolean): void;
    supportQuadLeash(): boolean;
    whenLeashedTo(leashHolder: Entity): void;
    writeLeashData(output: ValueOutput, leashData: Leashable$LeashData): void;
}