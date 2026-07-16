import type { Function } from '../../java/util/function/Function.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Optionull extends Object {
    static first<T extends unknown>(paramcollection: T[]): T;
    static firstOrDefault<T extends unknown>(paramcollection: T[], paramdefaultValue: T): T;
    static firstOrElse<T extends unknown>(paramcollection: T[], paramelseSupplier: () => T): T;
    static isNullOrEmpty<T extends unknown>(paramt: T[]): boolean;
    static isNullOrEmpty(paramt: boolean[]): boolean;
    static isNullOrEmpty(paramt: number[]): boolean;
    static isNullOrEmpty(paramt: string[]): boolean;
    static map<T extends unknown, R extends unknown>(paramt: T, parammap: (param0: T) => R): R;
    static mapOrDefault<T extends unknown, R extends unknown>(paramt: T, parammap: (param0: T) => R, paramdefaultValue: R): R;
    static mapOrElse<T extends unknown, R extends unknown>(paramt: T, parammap: (param0: T) => R, paramelseSupplier: () => R): R;
    static orElse<T extends unknown>(paramt: T, paramdefaultValue: T): T;
    constructor()
}