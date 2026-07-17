import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumUtils extends Object {
    static generateBitVector<E extends Enum<E>>(paramarg0: Class<E>, ...paramarg1: E[]): number;
    static generateBitVector<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: E[]): number;
    static generateBitVectors<E extends Enum<E>>(paramarg0: Class<E>, ...paramarg1: E[]): number[];
    static generateBitVectors<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: E[]): number[];
    static getEnum<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string): E;
    static getEnum<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string, paramarg2: E): E;
    static getEnumIgnoreCase<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string): E;
    static getEnumIgnoreCase<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string, paramarg2: E): E;
    static getEnumList<E extends Enum<E>>(paramarg0: Class<E>): E[];
    static getEnumMap<E extends Enum<E>, K extends unknown>(paramarg0: Class<E>, paramarg1: (param0: E) => K): JavaMap<K, E>;
    static getEnumMap<E extends Enum<E>>(paramarg0: Class<E>): JavaMap<string, E>;
    static getEnumSystemProperty<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string, paramarg2: E): E;
    static getFirstEnum<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: number, paramarg2: (param0: E) => number, paramarg3: E): E;
    static getFirstEnumIgnoreCase<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string, paramarg2: (param0: E) => string, paramarg3: E): E;
    static isValidEnum<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string): boolean;
    static isValidEnumIgnoreCase<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: string): boolean;
    static processBitVector<E extends Enum<E>>(paramarg0: Class<E>, paramarg1: number): E[];
    static processBitVectors<E extends Enum<E>>(paramarg0: Class<E>, ...paramarg1: number[]): E[];
    static stream<T extends unknown>(paramarg0: Class<T>): Stream<T>;
    constructor()
}