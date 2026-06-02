import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { ModuleFucker$DestroyAction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$DestroyAction.d.ts'
import type { ModuleFucker$SurroundingInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/fucker/ModuleFucker$SurroundingInfo.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ModuleFucker$DestroyerTarget extends Record implements Comparable<ModuleFucker$DestroyerTarget> {
    constructor(pos: BlockPos, action: ModuleFucker$DestroyAction, surroundingInfo: ModuleFucker$SurroundingInfo | null, isTarget: boolean)
    // private action: ModuleFucker$DestroyAction;
    /*not mapped: */ action(): ModuleFucker$DestroyAction;
    // private isTarget: boolean;
    /*not mapped: */ isTarget(): boolean;
    // private pos: BlockPos;
    /*not mapped: */ pos(): BlockPos;
    // private surroundingInfo: ModuleFucker$SurroundingInfo | null;
    /*not mapped: */ surroundingInfo(): ModuleFucker$SurroundingInfo | null;
    compareTo(other: ModuleFucker$DestroyerTarget): number;
    component1(): BlockPos;
    component2(): ModuleFucker$DestroyAction;
    component3(): ModuleFucker$SurroundingInfo | null;
    component4(): boolean;
    copy(pos: BlockPos, action: ModuleFucker$DestroyAction, surroundingInfo: ModuleFucker$SurroundingInfo | null, isTarget: boolean): ModuleFucker$DestroyerTarget;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}