import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { InsideBlockEffectApplier } from '../../../../net/minecraft/world/entity/InsideBlockEffectApplier.d.ts'
import type { InsideBlockEffectType } from '../../../../net/minecraft/world/entity/InsideBlockEffectType.d.ts'
export class InsideBlockEffectApplier$StepBasedCollector extends Object implements InsideBlockEffectApplier {
    static NOOP: InsideBlockEffectApplier;
    constructor()
    // private afterEffectsInStep: JavaMap<InsideBlockEffectType, (param0: Entity) => void[]>;
    // private beforeEffectsInStep: JavaMap<InsideBlockEffectType, (param0: Entity) => void[]>;
    // private effectsInStep: InsideBlockEffectType[];
    // private finalEffects: (param0: Entity) => void[];
    // private lastStep: number;
    advanceStep(step: number): void;
    apply(type: InsideBlockEffectType): void;
    applyAndClear(entity: Entity): void;
    // private flushStep(): void;
    runAfter(type: InsideBlockEffectType, effect: (param0: Entity) => void): void;
    runBefore(type: InsideBlockEffectType, effect: (param0: Entity) => void): void;
}