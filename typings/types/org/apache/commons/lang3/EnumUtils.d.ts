import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EnumUtils extends Object {
    static generateBitVector(paramarg0: Class<Object>, ...paramarg1: Object | null): number;
    static generateBitVector(paramarg0: Class<Object>, paramarg1: (Object | null)[]): number;
    static generateBitVectors(paramarg0: Class<Object>, ...paramarg1: Object | null): number[];
    static generateBitVectors(paramarg0: Class<Object>, paramarg1: (Object | null)[]): number[];
    static getEnum(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static getEnum(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Object | null;
    static getEnumIgnoreCase(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static getEnumIgnoreCase(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Object | null;
    static getEnumList(paramarg0: Class<Object>): (Object | null)[];
    static getEnumMap(paramarg0: Class<Object>, paramarg1: (param0: Object | null) => Object | null): Map<Object | null, Object | null>;
    static getEnumMap(paramarg0: Class<Object>): { [key: string]: Object | null };
    static getEnumSystemProperty(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Object | null;
    static getFirstEnum(paramarg0: Class<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number, paramarg3: Object | null): Object | null;
    static getFirstEnumIgnoreCase(paramarg0: Class<Object>, paramarg1: string, paramarg2: (param0: Object | null) => string, paramarg3: Object | null): Object | null;
    static isValidEnum(paramarg0: Class<Object>, paramarg1: string): boolean;
    static isValidEnumIgnoreCase(paramarg0: Class<Object>, paramarg1: string): boolean;
    static processBitVector(paramarg0: Class<Object>, paramarg1: number): (Object | null)[];
    static processBitVectors(paramarg0: Class<Object>, ...paramarg1: number[]): (Object | null)[];
    static stream(paramarg0: Class<Object>): Stream<Object>;
    constructor()
}