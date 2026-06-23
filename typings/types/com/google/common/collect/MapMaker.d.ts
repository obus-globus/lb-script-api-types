import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { MapMakerInternalMap$Strength } from '../../../../com/google/common/collect/MapMakerInternalMap$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMaker extends Object {
    constructor()
    // private concurrencyLevel: number;
    // private initialCapacity: number;
    // private keyEquivalence: Equivalence<Object>;
    // private keyStrength: MapMakerInternalMap$Strength;
    // private useCustomMap: boolean;
    // private valueStrength: MapMakerInternalMap$Strength;
    concurrencyLevel(concurrencyLevel: number): MapMaker;
    getConcurrencyLevel(): number;
    getInitialCapacity(): number;
    getKeyEquivalence(): Equivalence<Object>;
    getKeyStrength(): MapMakerInternalMap$Strength;
    getValueStrength(): MapMakerInternalMap$Strength;
    initialCapacity(initialCapacity: number): MapMaker;
    keyEquivalence(equivalence: Equivalence<Object>): MapMaker;
    makeMap<K extends unknown, V extends unknown>(): Map<K, V>;
    setKeyStrength(strength: MapMakerInternalMap$Strength): MapMaker;
    setValueStrength(strength: MapMakerInternalMap$Strength): MapMaker;
    toString(): string;
    weakKeys(): MapMaker;
    weakValues(): MapMaker;
}