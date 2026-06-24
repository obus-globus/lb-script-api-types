import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CriterionTriggerInstance } from '../../../../net/minecraft/advancements/CriterionTriggerInstance.d.ts'
import type { ValidationContextSource } from '../../../../net/minecraft/world/level/storage/loot/ValidationContextSource.d.ts'
export class ImpossibleTrigger$TriggerInstance extends Record implements CriterionTriggerInstance {
    static CODEC: Codec<ImpossibleTrigger$TriggerInstance>;
    constructor()
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    validate(validator: ValidationContextSource): void;
}