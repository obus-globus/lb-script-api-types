import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SectionedBlockChangeTracker } from '../../../../../../net/caffeinemc/mods/lithium/common/tracking/block/SectionedBlockChangeTracker.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class VicinityCache extends Object {
    constructor()
    readonly cachedIsSuffocating: number;
    readonly cachedSupportingBlock: BlockState;
    readonly cachedTouchingFireLava: number;
    // private fluidType2FluidHeightMap: { [key: string]: any };
    // private initDelay: number;
    // private trackedPos: AABB;
    // private tracker: SectionedBlockChangeTracker;
    // private trackingSince: number;
    cacheSupportingBlockState(arg0: BlockState): void;
    canSkipBlockTouching(): boolean;
    canSkipSupportingBlockSearch(): boolean;
    getCachedSupportingBlock(): BlockState;
    getIsSuffocating(): number;
    getIsTouchingFireLava(): number;
    getStationaryFluidHeightOrDefault(arg0: TagKey<Fluid>, arg1: number): number;
    initTracking(arg0: Entity): void;
    isTracking(): boolean;
    remove(): void;
    resetCachedInfo(): void;
    resetTrackedPos(arg0: AABB): void;
    setCachedFluidHeight(arg0: TagKey<Fluid>, arg1: number): void;
    setCachedIsSuffocating(arg0: boolean): void;
    setCachedTouchingFireLava(arg0: boolean): void;
    setCanSkipBlockTouching(arg0: boolean): void;
    setCanSkipSupportingBlockSearch(arg0: boolean): void;
    updateCache(arg0: Entity): void;
}