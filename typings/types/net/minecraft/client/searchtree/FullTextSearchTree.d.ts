import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IdSearchTree } from '../../../../net/minecraft/client/searchtree/IdSearchTree.d.ts'
import type { SearchTree } from '../../../../net/minecraft/client/searchtree/SearchTree.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class FullTextSearchTree<T extends Object | number | string | boolean> extends IdSearchTree<T> {
    constructor(nameGetter: (param0: T) => Stream<string>, idGetter: (param0: T) => Stream<Identifier>, contents: T[])
    // private plainTextSearchTree: (param0: string) => T[];
    searchIdentifier(namespace: string, path: string): T[];
    searchPlainText(text: string): T[];
}