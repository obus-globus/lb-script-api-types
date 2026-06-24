import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { TickingBlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
export class SleepUntilTimeBlockEntityTickInvoker extends Record implements TickingBlockEntity {
    constructor(sleepingBlockEntity: BlockEntity, sleepUntilTickExclusive: number, delegate: TickingBlockEntity)
    // private delegate: TickingBlockEntity;
    // private sleepUntilTickExclusive: number;
    // private sleepingBlockEntity: BlockEntity;
    delegate(): TickingBlockEntity;
    equals(arg0: Object | null): boolean;
    getPos(): BlockPos;
    getType(): string;
    hashCode(): number;
    isRemoved(): boolean;
    sleepUntilTickExclusive(): number;
    sleepingBlockEntity(): BlockEntity;
    tick(): void;
    toString(): string;
}