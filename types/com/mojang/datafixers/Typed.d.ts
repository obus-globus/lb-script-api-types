import type { OpticFinder } from '../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Dynamic } from '../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Typed<A extends Object | number | string | boolean> extends Object {
    static pair(paramarg0: Typed<Object>, paramarg1: Typed<Object>): Typed<Object>;
    constructor(arg0: Type<A>, arg1: DynamicOps<Object>, arg2: A)
    readonly ops: DynamicOps<Object>;
    readonly type: Type<A>;
    readonly value: A;
    get<FT extends Object | number | string | boolean>(arg0: OpticFinder<FT>): FT;
    getAll(arg0: TypedOptic<A, Object, FT, Object>): FT[];
    getAllTyped(arg0: OpticFinder<FT>): Typed<FT>[];
    getOps(): DynamicOps<Object>;
    getOptional(arg0: OpticFinder<FT>): Optional<FT>;
    getOptionalTyped(arg0: OpticFinder<FT>): Optional<Typed<FT>>;
    getOrCreate<FT extends Object | number | string | boolean>(arg0: OpticFinder<FT>): FT;
    getOrCreateTyped(arg0: OpticFinder<FT>): Typed<FT>;
    getOrDefault<FT extends Object | number | string | boolean>(arg0: OpticFinder<FT>, arg1: FT): FT;
    getType(): Type<A>;
    getTyped(arg0: OpticFinder<FT>): Typed<FT>;
    getValue(): A;
    inj1(arg0: Type<B>): Typed<Either<A, B>>;
    inj2(arg0: Type<B>): Typed<Either<B, A>>;
    out(): Typed<A>;
    set<FT extends Object | number | string | boolean>(arg0: OpticFinder<FT>, arg1: FT): Typed<Object>;
    set(arg0: OpticFinder<FT>, arg1: Typed<FR>): Typed<Object>;
    set<FR extends Object | number | string | boolean>(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: FR): Typed<Object>;
    // private setCap(arg0: TypedOptic<A, B, FT, FR>, arg1: Typed<FR>): Typed<B>;
    toString(): string;
    update(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: FT) => FR): Typed<Object>;
    update(arg0: OpticFinder<FT>, arg1: (param0: FT) => FT): Typed<Object>;
    // private updateCap(arg0: TypedOptic<A, B, FT, FR>, arg1: (param0: FT) => FR): Typed<B>;
    updateRecursive(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: FT) => FR): Typed<Object>;
    updateRecursive(arg0: OpticFinder<FT>, arg1: (param0: FT) => FT): Typed<Object>;
    updateRecursiveTyped(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    updateRecursiveTyped(arg0: OpticFinder<FT>, arg1: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    updateTyped(arg0: OpticFinder<FT>, arg1: Type<FR>, arg2: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    updateTyped(arg0: OpticFinder<FT>, arg1: (param0: Typed<Object>) => Typed<Object>): Typed<Object>;
    write(): DataResult<Dynamic<Object>>;
}