import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { HolderSet } from '../../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { BlocksAttacks$DamageReduction } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlocksAttacks$DamageReduction.d.ts'
import type { BlocksAttacks$ItemDamageFunction } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlocksAttacks$ItemDamageFunction.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BlocksAttacks extends Record implements Rewritable {
    static TYPE1_21_5: Type<BlocksAttacks>;
    static TYPE26_1: Type<BlocksAttacks>;
    constructor(blockDelaySeconds: number, disableCooldownScale: number, damageReductions: BlocksAttacks$DamageReduction[], itemDamage: BlocksAttacks$ItemDamageFunction, bypassedBy: HolderSet, blockSound: Holder<SoundEvent>, disableSound: Holder<SoundEvent>)
    // private blockDelaySeconds: number;
    // private blockSound: Holder<SoundEvent>;
    // private bypassedBy: HolderSet;
    // private damageReductions: BlocksAttacks$DamageReduction[];
    // private disableCooldownScale: number;
    // private disableSound: Holder<SoundEvent>;
    // private itemDamage: BlocksAttacks$ItemDamageFunction;
    blockDelaySeconds(): number;
    blockSound(): Holder<SoundEvent>;
    bypassedBy(): HolderSet;
    damageReductions(): BlocksAttacks$DamageReduction[];
    disableCooldownScale(): number;
    disableSound(): Holder<SoundEvent>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    itemDamage(): BlocksAttacks$ItemDamageFunction;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): BlocksAttacks;
    toString(): string;
}