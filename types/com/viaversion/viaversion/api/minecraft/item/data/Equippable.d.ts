import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { HolderSet } from '../../../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Equippable extends Record implements Rewritable {
    static TYPE1_21_2: Type<Equippable>;
    static TYPE1_21_5: Type<Equippable>;
    static TYPE1_21_6: Type<Equippable>;
    // private allowedEntities: HolderSet;
    // private cameraOverlay: string;
    // private canBeSheared: boolean;
    // private damageOnHurt: boolean;
    // private dispensable: boolean;
    // private equipOnInteract: boolean;
    // private equipmentSlot: number;
    // private model: string;
    // private shearingSound: Holder<SoundEvent>;
    // private soundEvent: Holder<SoundEvent>;
    // private swappable: boolean;
    allowedEntities(): HolderSet;
    cameraOverlay(): string;
    canBeSheared(): boolean;
    damageOnHurt(): boolean;
    dispensable(): boolean;
    equals(arg0: Object | null): boolean;
    equipOnInteract(): boolean;
    equipmentSlot(): number;
    hashCode(): number;
    model(): string;
    rewrite(arg0: UserConnection, arg1: Protocol<Object, Object, Object, Object>, arg2: boolean): Equippable;
    shearingSound(): Holder<SoundEvent>;
    soundEvent(): Holder<SoundEvent>;
    swappable(): boolean;
    toString(): string;
}