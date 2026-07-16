import type { Function } from '../../java/util/function/Function.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Optionull extends Object {
    static first(paramcollection: (Object | null)[]): Object | null;
    static firstOrDefault(paramcollection: (Object | null)[], paramdefaultValue: Object | null): Object | null;
    static firstOrElse(paramcollection: (Object | null)[], paramelseSupplier: () => Object | null): Object | null;
    static isNullOrEmpty(paramt: (Object | null)[]): boolean;
    static isNullOrEmpty(paramt: boolean[]): boolean;
    static isNullOrEmpty(paramt: number[]): boolean;
    static isNullOrEmpty(paramt: string[]): boolean;
    static map(paramt: Object | null, parammap: (param0: Object | null) => Object | null): Object | null;
    static mapOrDefault(paramt: Object | null, parammap: (param0: Object | null) => Object | null, paramdefaultValue: Object | null): Object | null;
    static mapOrElse(paramt: Object | null, parammap: (param0: Object | null) => Object | null, paramelseSupplier: () => Object | null): Object | null;
    static orElse(paramt: Object | null, paramdefaultValue: Object | null): Object | null;
    constructor()
}