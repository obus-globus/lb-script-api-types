import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IdentifierSearchTree } from '../../../../net/minecraft/client/searchtree/IdentifierSearchTree.d.ts'
import type { SearchTree } from '../../../../net/minecraft/client/searchtree/SearchTree.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class IdSearchTree<T extends unknown> extends Object implements SearchTree<T> {
    static empty<T extends unknown>(): (param0: string) => T[];
    static plainText<T extends unknown>(paramelements: T[], paramidGetter: (param0: T) => Stream<string>): (param0: string) => T[];
    constructor(idGetter: (param0: T) => Stream<Identifier>, contents: T[])
    // private additionOrder: (param0: T, param1: T) => number;
    // private identifierSearchTree: IdentifierSearchTree<T>;
    search(text: string): T[];
    searchIdentifier(namespace: string, path: string): T[];
    searchPlainText(text: string): T[];
}