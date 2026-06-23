import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapMakerInternalMap$InternalEntry<K extends unknown, V extends unknown, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends Object{
    getHash(): number;
    getKey(): K;
    getNext(): E;
    getValue(): V;
}