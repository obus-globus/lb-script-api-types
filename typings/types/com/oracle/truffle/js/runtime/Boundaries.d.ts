import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class Boundaries extends Object {
    static arraySort<T extends unknown>(paramarray: T[], paramcomparator: (param0: Object, param1: Object) => number): void;
    static arraySort(paramarray: number[]): void;
    static byteBufferArray(parambuffer: ByteBuffer): number[];
    static byteBufferGet(paramsrc: ByteBuffer, paramsrcPos: number, paramdst: number[], paramdstPos: number, paramlength: number): void;
    static byteBufferPutArray(paramdst: ByteBuffer, paramdstPos: number, paramsrc: number[], paramsrcPos: number, paramsrcLength: number): void;
    static byteBufferPutSlice(paramdst: ByteBuffer, paramdstPos: number, paramsrc: ByteBuffer, paramsrcPos: number, paramsrcLimit: number): void;
    static byteBufferSlice(parambuf: ByteBuffer, parampos: number, paramlimit: number): ByteBuffer;
    static byteBufferWrap(paramarray: number[]): ByteBuffer;
    static characterIsUpperCase(paramch: string): boolean;
    static economicMapContainsKey<K extends unknown, V extends unknown>(parammap: EconomicMap<K, V>, paramkey: K): boolean;
    static economicMapCreate<K extends unknown, V extends unknown>(): EconomicMap<K, V>;
    static economicMapGet<K extends unknown, V extends unknown>(parammap: EconomicMap<K, V>, paramkey: K): V;
    static economicMapPut<K extends unknown, V extends unknown>(parammap: EconomicMap<K, V>, paramkey: K, paramvalue: V): V;
    static economicSetAdd<T extends unknown>(parameconomicSet: T[], paramelement: T): boolean;
    static economicSetContains<T extends unknown>(parameconomicSet: T[], paramelement: T): boolean;
    static economicSetCreate<T extends unknown>(): T[];
    static equals(parama: Object, paramb: Object): boolean;
    static integerToString(parami: number, paramradix: number): string;
    static listAdd<T extends unknown>(paramlist: T[], paramelement: T): void;
    static listAddAll<T extends unknown>(paramlist: T[], paramaddList: T[]): void;
    static listContains<T extends unknown>(paramlist: T[], paramelement: T): boolean;
    static listContainsUnchecked(paramlist: Object[], paramelement: Object): boolean;
    static listEditableCopy<T extends unknown>(paramlist: T[]): T[];
    static listGet<T extends unknown>(paramlist: T[], paramindex: number): T;
    static listSize<T extends unknown>(paramlist: T[]): number;
    static listToArray<T extends unknown>(paramlist: T[]): Object[];
    static listToEditable<T extends unknown>(paramlist: T[]): T[];
    static listToStringArray(paramlist: string[]): string[];
    static mapContainsKey<K extends unknown, V extends unknown>(parammap: Map<K, V>, paramkey: K): boolean;
    static mapEntry<K extends unknown, V extends unknown>(paramkey: K, paramvalue: V): Map$Entry<K, V>;
    static mapGet<K extends unknown, V extends unknown>(parammap: Map<K, V>, paramkey: K): V;
    static mapPut<K extends unknown, V extends unknown>(parammap: Map<K, V>, paramkey: K, paramvalue: V): V;
    static mapPutIfAbsent<K extends unknown, V extends unknown>(parammap: Map<K, V>, paramkey: K, paramvalue: V): V;
    static mapRemove<K extends unknown, V extends unknown>(parammap: Map<K, V>, paramkey: K): V;
    static queueAdd<T extends unknown>(paramqueue: Object[], paramrequest: T): void;
    static setContains(paramset: Object[], paramelement: Object): boolean;
    static stringFormat(paramformat: string, ...paramparams: Object[]): string;
    private constructor()
}