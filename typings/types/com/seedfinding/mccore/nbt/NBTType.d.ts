import type { NBTTag } from '../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NBTType extends Object {
    static BYTE: number;
    static BYTE_ARRAY: number;
    static COMPOUND: number;
    static DOUBLE: number;
    static END: number;
    static FLOAT: number;
    static INT: number;
    static INT_ARRAY: number;
    static LIST: number;
    static LONG: number;
    static LONG_ARRAY: number;
    static REGISTRY: { [key: number]: () => NBTTag<Object> };
    static SHORT: number;
    static STRING: number;
    static createEmpty(paramarg0: number): NBTTag<Object>;
    static getTypeOf(paramarg0: Class<NBTTag<Object>>): number;
    static register(paramarg0: Class<Object>, paramarg1: number, paramarg2: () => Object | null): void;
    constructor()
}