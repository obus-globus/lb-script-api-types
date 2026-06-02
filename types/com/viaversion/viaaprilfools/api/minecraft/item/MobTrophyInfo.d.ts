import type { Holder } from '../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MobTrophyInfo extends Record {
    static TYPE: Type<MobTrophyInfo>;
    // private shiny: boolean;
    // private type: Holder<string>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    shiny(): boolean;
    toString(): string;
    type(): Holder<string>;
}