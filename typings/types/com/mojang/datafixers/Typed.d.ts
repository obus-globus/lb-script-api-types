import type { OpticFinder } from '../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Typed<A extends unknown> extends Object {
    static pair(paramarg0: Typed<Object>, paramarg1: Typed<Object>): Typed<Pair<Object, Object>>;
    constructor(arg0: Type<A>, arg1: DynamicOps<Object>, arg2: A)
    readonly ops: DynamicOps<Object>;
    readonly type: Type<A>;
    readonly value: A;
    get<FT extends unknown>(arg0: OpticFinder<FT>): FT;
    getAll<FT extends unknown>(arg0: TypedOptic<A, Object, FT, Object>): FT[];
    getAllTyped<FT extends unknown>(arg0: OpticFinder<FT>): Typed<FT>[];
    getOps(): DynamicOps<Object>;
    getOptional<FT extends unknown>(arg0: OpticFinder<FT>): Optional<FT>;
    getOptionalTyped<FT extends unknown>(arg0: OpticFinder<FT>): Optional<Typed<FT>>;
    getOrCreate<FT extends unknown>(arg0: OpticFinder<FT>): FT;
    getOrCreateTyped<FT extends unknown>(arg0: OpticFinder<FT>): Typed<FT>;
    getOrDefault<FT extends unknown>(arg0: OpticFinder<FT>, arg1: FT): FT;
    getType(): Type<A>;
    getTyped<FT extends unknown>(arg0: OpticFinder<FT>): Typed<FT>;
    getValue(): A;
    inj1<B extends unknown>(arg0: Type<B>): Typed<Either<A, B>>;
    inj2<B extends unknown>(arg0: Type<B>): Typed<Either<B, A>>;
    out(): Typed<A>;
    set<FT extends unknown>(arg0: OpticFinder<FT>, arg1: FT): Typed<Object>;
    set<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Typed<FR>): Typed<Object>;
    set<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: FR): Typed<Object>;
    // private setCap<B extends unknown, FT extends unknown, FR extends unknown>(arg0: TypedOptic<A, B, FT, FR>, arg1: Typed<FR>): Typed<B>;
    toString(): string;
    update<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: FT) => FR): Typed<Object>;
    update<FT extends unknown>(arg0: OpticFinder<FT>, arg1: (param0: FT) => FT): Typed<Object>;
    // private updateCap<B extends unknown, FT extends unknown, FR extends unknown>(arg0: TypedOptic<A, B, FT, FR>, arg1: (param0: FT) => FR): Typed<B>;
    updateRecursive<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: FT) => FR): Typed<Object>;
    updateRecursive<FT extends unknown>(arg0: OpticFinder<FT>, arg1: (param0: FT) => FT): Typed<Object>;
    updateRecursiveTyped<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    updateRecursiveTyped<FT extends unknown>(arg0: OpticFinder<FT>, arg1: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    updateTyped<FT extends unknown, FR extends unknown>(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    updateTyped<FT extends unknown>(arg0: OpticFinder<FT>, arg1: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    write(): DataResult<Dynamic<Object>>;
}