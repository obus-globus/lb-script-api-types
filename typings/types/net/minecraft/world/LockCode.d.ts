import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ItemPredicate } from '../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { Player } from '../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ValueInput } from '../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class LockCode extends Record {
    static CODEC: Codec<LockCode>;
    static NO_LOCK: LockCode;
    static TAG_LOCK: string;
    static fromTag(paramparent: ValueInput): LockCode;
    constructor(predicate: ItemPredicate)
    // private predicate: ItemPredicate;
    addToTag(parent: ValueOutput): void;
    canUnlock(player: Player): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    predicate(): ItemPredicate;
    toString(): string;
    unlocksWith(itemStack: ItemStack): boolean;
}