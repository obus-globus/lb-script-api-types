import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Either } from '../../../../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DamageType extends Record {
    static TYPE1_21_11: Type<DamageType>;
    constructor(id: Either<number, string>)
    // private id: Either<number, string>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): Either<number, string>;
    toString(): string;
}