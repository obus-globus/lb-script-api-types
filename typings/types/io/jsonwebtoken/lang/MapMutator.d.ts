import type { Object } from '../../../java/lang/Object.d.ts'
export interface MapMutator<K extends unknown, V extends unknown, T extends MapMutator<K, V, T>> extends Object{
    add(arg0: Map<K, V>): T;
    add(arg0: K, arg1: V): T;
    delete(arg0: K): T;
    empty(): T;
}