import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class Boundaries extends Object {
    static arraySort(paramarray: Object | null, paramcomparator: (param0: Object | null) => kotlin.Boolean): void;
    static arraySort(paramarray: number[]): void;
    static arraySort(paramarray: number[]): void;
    static arraySort(paramarray: number[]): void;
    static byteBufferArray(parambuffer: ByteBuffer): number[];
    static byteBufferGet(paramsrc: ByteBuffer, paramsrcPos: number, paramdst: number[], paramdstPos: number, paramlength: number): void;
    static byteBufferPutArray(paramdst: ByteBuffer, paramdstPos: number, paramsrc: number[], paramsrcPos: number, paramsrcLength: number): void;
    static byteBufferPutSlice(paramdst: ByteBuffer, paramdstPos: number, paramsrc: ByteBuffer, paramsrcPos: number, paramsrcLimit: number): void;
    static byteBufferSlice(parambuf: ByteBuffer, parampos: number, paramlimit: number): ByteBuffer;
    static byteBufferWrap(paramarray: number[]): ByteBuffer;
    static characterIsUpperCase(paramch: string): boolean;
    static economicMapContainsKey(parammap: EconomicMap<Object, Object>, paramkey: Object | null): boolean;
    static economicMapCreate(): EconomicMap<Object, Object>;
    static economicMapGet(parammap: EconomicMap<Object, Object>, paramkey: Object | null): Object | null;
    static economicMapPut(parammap: EconomicMap<Object, Object>, paramkey: Object | null, paramvalue: Object | null): Object | null;
    static economicSetAdd(parameconomicSet: (Object | null)[], paramelement: Object | null): boolean;
    static economicSetContains(parameconomicSet: (Object | null)[], paramelement: Object | null): boolean;
    static economicSetCreate(): (Object | null)[];
    static equals(parama: Object, paramb: Object): boolean;
    static integerToString(parami: number, paramradix: number): string;
    static listAdd(paramlist: (Object | null)[], paramelement: Object | null): void;
    static listAddAll(paramlist: (Object | null)[], paramaddList: (Object | null)[]): void;
    static listContains(paramlist: (Object | null)[], paramelement: Object | null): boolean;
    static listContainsUnchecked(paramlist: (Object | null)[], paramelement: Object): boolean;
    static listEditableCopy(paramlist: (Object | null)[]): (Object | null)[];
    static listGet(paramlist: (Object | null)[], paramindex: number): Object | null;
    static listSize(paramlist: (Object | null)[]): number;
    static listToArray(paramlist: (Object | null)[]): (Object | null)[];
    static listToEditable(paramlist: (Object | null)[]): (Object | null)[];
    static listToStringArray(paramlist: string[]): (Object | null)[];
    static mapContainsKey(parammap: Map<Object | null, Object | null>, paramkey: Object | null): boolean;
    static mapEntry(paramkey: Object | null, paramvalue: Object | null): Map$Entry<Object, Object>;
    static mapGet(parammap: Map<Object | null, Object | null>, paramkey: Object | null): Object | null;
    static mapPut(parammap: Map<Object | null, Object | null>, paramkey: Object | null, paramvalue: Object | null): Object | null;
    static mapPutIfAbsent(parammap: Map<Object | null, Object | null>, paramkey: Object | null, paramvalue: Object | null): Object | null;
    static mapRemove(parammap: Map<Object | null, Object | null>, paramkey: Object | null): Object | null;
    static queueAdd(paramqueue: (Object | null)[], paramrequest: Object | null): void;
    static setContains(paramset: (Object | null)[], paramelement: Object): boolean;
    static stringFormat(paramformat: string, paramparams: (Object | null)[]): string;
    private constructor()
}