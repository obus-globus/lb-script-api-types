import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CriterionTrigger } from '../../../net/minecraft/advancements/CriterionTrigger.d.ts'
import type { CriterionTriggerInstance } from '../../../net/minecraft/advancements/CriterionTriggerInstance.d.ts'
export class Criterion<T extends CriterionTriggerInstance> extends Record {
    static CODEC: Codec<Object>;
    constructor(trigger: CriterionTrigger<T>, triggerInstance: T)
    // private trigger: CriterionTrigger<T>;
    // private triggerInstance: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    trigger(): CriterionTrigger<T>;
    triggerInstance(): T;
}