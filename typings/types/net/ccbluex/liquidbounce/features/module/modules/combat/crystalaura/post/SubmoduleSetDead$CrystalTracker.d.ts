import type { CrystalPostAttackTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.d.ts'
import type { SubmoduleSetDead } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.d.ts'
import type { SubmoduleSetDead$CrystalTracker$RemovedCrystal } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead$CrystalTracker$RemovedCrystal.d.ts'
export class SubmoduleSetDead$CrystalTracker extends CrystalPostAttackTracker {
    static INSTANCE: SubmoduleSetDead$CrystalTracker;
    // private entities: Int2ObjectMap<SubmoduleSetDead$CrystalTracker$RemovedCrystal>;
    attacked(id: number): void;
    cleared(): void;
    confirmed(id: number): void;
    parent(): SubmoduleSetDead;
    timeOutAfter(): number;
    timedOut(id: number): void;
}