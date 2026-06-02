import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { CriterionTriggerInstance } from '../../../net/minecraft/advancements/CriterionTriggerInstance.d.ts'
import type { PlayerAdvancements } from '../../../net/minecraft/server/PlayerAdvancements.d.ts'
export class CriterionTrigger$Listener<T extends CriterionTriggerInstance> extends Record {
    constructor(trigger: T, advancement: AdvancementHolder, criterion: string)
    // private advancement: AdvancementHolder;
    // private criterion: string;
    // private trigger: T;
    advancement(): AdvancementHolder;
    criterion(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    run(player: PlayerAdvancements): void;
    toString(): string;
    trigger(): T;
}