import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Identifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { StringKeyedIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/StringKeyedIndex.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
export class IdentifierIndex<S extends Identifier[], I extends JavaMap<string, S>> extends StringKeyedIndex<Identifier, Identifier, S, I> {
    static withOnlyExact<R extends Identifier[]>(paramarg0: () => R): IdentifierIndex<R, JavaMap<string, R>>;
    static withOnlyExact(): IdentifierIndex<Identifier[], JavaMap<string, Identifier[]>>;
    static withOnlyExactOrdered(): IdentifierIndex<Identifier[], JavaMap<string, Identifier[]>>;
    constructor(arg0: I, arg1: () => S)
    add(arg0: Identifier): void;
    getNode(arg0: Identifier): Identifier;
    remove(arg0: Identifier): void;
    rename(arg0: string, arg1: string): boolean;
}