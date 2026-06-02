import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DamageImmunity extends Record {
    static CODEC: Codec<DamageImmunity>;
    static INSTANCE: DamageImmunity;
    constructor()
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}