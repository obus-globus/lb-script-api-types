import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/EntityData.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Bee extends Record implements Copyable {
    static ARRAY_TYPE1_20_5: Type<(Object | null)[]>;
    static ARRAY_TYPE1_21_9: Type<(Object | null)[]>;
    static TYPE1_20_5: Type<Bee>;
    static TYPE1_21_9: Type<Bee>;
    static copy(paramarg0: Object | null): Object | null;
    // private entityData: EntityData;
    // private minTicksInHive: number;
    // private ticksInHive: number;
    copy(): Bee;
    entityData(): EntityData;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    minTicksInHive(): number;
    ticksInHive(): number;
    toString(): string;
}