import type { Object } from '../../../java/lang/Object.d.ts'
export interface CollectionMutator<E extends unknown, M extends CollectionMutator<E, M>> extends Object{
    add(arg0: E[]): M;
    add(arg0: E): M;
    clear(): M;
    remove(arg0: E): M;
}