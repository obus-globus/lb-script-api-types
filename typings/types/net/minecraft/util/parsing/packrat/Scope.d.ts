import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Atom } from '../../../../../net/minecraft/util/parsing/packrat/Atom.d.ts'
export class Scope extends Object {
    constructor()
    // private stack: Object[];
    // private topEntryKeyIndex: number;
    // private topMarkerKeyIndex: number;
    clearFrameValues(): void;
    // private ensureCapacity(additionalEntryCount: number): void;
    get<T extends unknown>(name: Atom<T>): T;
    getAny<T extends unknown>(...names: Atom<T>[]): T;
    getAnyOrThrow<T extends unknown>(...names: Atom<T>[]): T;
    getOrDefault<T extends unknown>(name: Atom<T>, fallback: T): T;
    getOrThrow<T extends unknown>(name: Atom<T>): T;
    // private getPreviousMarkerIndex(markerKeyIndex: number): number;
    hasOnlySingleFrame(): boolean;
    lastFrame(): Map<Atom<Object>, Object | null>;
    mergeFrame(): void;
    popFrame(): void;
    pushFrame(): void;
    put<T extends unknown>(name: Atom<T>, value: T): void;
    // private setupNewFrame(): void;
    splitFrame(): void;
    toString(): string;
    // private validateStructure(): boolean;
    // private valueIndex(atom: Atom<Object>): number;
    valueIndexForAny(...atoms: Atom<Object>[]): number;
}