import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Consumable1_21_2$ConsumeEffect } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Consumable1_21_2$ConsumeEffect.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Consumable1_21_2 extends Record implements Copyable, Rewritable {
    static EFFECT_TYPES: Object | null;
    static TYPE: Type<Consumable1_21_2>;
    // private animationType: number;
    // private consumeEffects: Consumable1_21_2$ConsumeEffect<Object>[];
    // private consumeSeconds: number;
    // private hasConsumeParticles: boolean;
    // private sound: Holder<SoundEvent>;
    animationType(): number;
    consumeEffects(): Consumable1_21_2$ConsumeEffect<Object>[];
    consumeSeconds(): number;
    copy(): Consumable1_21_2;
    equals(arg0: Object | null): boolean;
    hasConsumeParticles(): boolean;
    hashCode(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): Consumable1_21_2;
    sound(): Holder<SoundEvent>;
    toString(): string;
}