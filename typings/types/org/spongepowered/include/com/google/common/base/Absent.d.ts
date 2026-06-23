import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Optional } from '../../../../../../../org/spongepowered/include/com/google/common/base/Optional.d.ts'
export class Absent<T extends unknown> extends Optional<T> {
    static absent(): Optional<Object>;
    private constructor()
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    or(arg0: T): T;
    toString(): string;
}