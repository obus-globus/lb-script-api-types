import type { Identifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { StringKeyedIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/StringKeyedIndex.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class IdentifierIndex<S extends Identifier[], I extends { [key: string]: S }> extends StringKeyedIndex<Identifier, Identifier, S, I> {
    static withOnlyExact(paramarg0: () => Object | null): IdentifierIndex<Object, Object>;
    static withOnlyExact(): IdentifierIndex<Object, Object>;
    static withOnlyExactOrdered(): IdentifierIndex<Object, Object>;
    constructor(arg0: I, arg1: () => S)
    add(arg0: Identifier): void;
    getNode(arg0: Identifier): Identifier;
    remove(arg0: Identifier): void;
    rename(arg0: string, arg1: string): boolean;
}