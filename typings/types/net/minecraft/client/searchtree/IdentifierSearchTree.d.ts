import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IdentifierSearchTree<T extends unknown> extends Object{
    searchNamespace(namespace: string): T[];
    searchPath(path: string): T[];
}