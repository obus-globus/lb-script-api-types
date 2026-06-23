import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IdentifierSearchTree } from '../../../../net/minecraft/client/searchtree/IdentifierSearchTree.d.ts'
import type { SearchTree } from '../../../../net/minecraft/client/searchtree/SearchTree.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class IdSearchTree<T extends unknown> extends Object implements SearchTree<T> {
    static empty(): (param0: string) => (Object | null)[];
    static plainText(paramelements: (Object | null)[], paramidGetter: (param0: Object | null) => Stream<string>): (param0: string) => (Object | null)[];
    constructor(idGetter: (param0: T) => Stream<Identifier>, contents: T[])
    // private additionOrder: (param0: Object) => boolean;
    // private identifierSearchTree: IdentifierSearchTree<T>;
    search(text: string): T[];
    searchIdentifier(namespace: string, path: string): T[];
    searchPlainText(text: string): T[];
}