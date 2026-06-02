import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IdentifierSearchTree<T extends Object | number | string | boolean> extends Object{
    searchNamespace(namespace: string): T[];
    searchPath(path: string): T[];
}