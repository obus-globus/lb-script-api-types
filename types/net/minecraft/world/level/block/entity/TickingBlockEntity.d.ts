import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export interface TickingBlockEntity extends Object{
    getPos(): BlockPos;
    getType(): string;
    isRemoved(): boolean;
    tick(): void;
}