import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PiercingWeapon extends Record {
    static TYPE: Type<PiercingWeapon>;
    // private dealsKnockback: boolean;
    // private dismounts: boolean;
    // private hitSound: Holder<SoundEvent>;
    // private sound: Holder<SoundEvent>;
    dealsKnockback(): boolean;
    dismounts(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hitSound(): Holder<SoundEvent>;
    sound(): Holder<SoundEvent>;
    toString(): string;
}