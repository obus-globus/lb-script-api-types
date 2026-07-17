import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Multimap } from '../../../com/google/common/collect/Multimap.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DependencySorter$Entry } from '../../../net/minecraft/util/DependencySorter$Entry.d.ts'
export class DependencySorter<K extends unknown, V extends DependencySorter$Entry<K>> extends Object {
    constructor()
    // private contents: JavaMap<K, V>;
    addEntry(id: K, value: V): DependencySorter<K, V>;
    orderByDependencies(output: (param0: K, param1: V) => void): void;
    // private visitDependenciesAndElement(dependencies: Multimap<K, K>, alreadyVisited: K[], id: K, output: (param0: K, param1: V) => void): void;
}