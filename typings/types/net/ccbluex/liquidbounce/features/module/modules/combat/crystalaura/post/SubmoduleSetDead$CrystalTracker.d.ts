import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { CrystalPostAttackTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.d.ts'
import type { SubmoduleSetDead } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/SubmoduleSetDead.d.ts'
export class SubmoduleSetDead$CrystalTracker extends CrystalPostAttackTracker {
    static INSTANCE: SubmoduleSetDead$CrystalTracker;
    // private entities: JavaMap<any, any>;
    attacked(id: number): void;
    cleared(): void;
    confirmed(id: number): void;
    parent(): SubmoduleSetDead;
    timeOutAfter(): number;
    timedOut(id: number): void;
}