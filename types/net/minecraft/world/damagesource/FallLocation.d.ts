import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FallLocation extends Record {
    static GENERIC: FallLocation;
    static LADDER: FallLocation;
    static OTHER_CLIMBABLE: FallLocation;
    static SCAFFOLDING: FallLocation;
    static TWISTING_VINES: FallLocation;
    static VINES: FallLocation;
    static WATER: FallLocation;
    static WEEPING_VINES: FallLocation;
    static blockToFallLocation(paramblockState: BlockState): FallLocation;
    static getCurrentFallLocation(parammob: LivingEntity): FallLocation;
    constructor(id: string)
    // private id: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    languageKey(): string;
    toString(): string;
}