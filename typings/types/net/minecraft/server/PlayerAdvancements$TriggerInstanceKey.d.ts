import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
export class PlayerAdvancements$TriggerInstanceKey extends Record {
    constructor(advancement: AdvancementHolder, criterion: string)
    // private advancement: AdvancementHolder;
    // private criterion: string;
    advancement(): AdvancementHolder;
    criterion(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}