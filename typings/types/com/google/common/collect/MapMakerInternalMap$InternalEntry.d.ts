import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapMakerInternalMap$InternalEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends Object{
    getHash(): number;
    getKey(): K;
    getNext(): E;
    getValue(): V;
}