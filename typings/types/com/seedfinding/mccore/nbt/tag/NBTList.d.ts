import type { NBTTag } from '../../../../../com/seedfinding/mccore/nbt/tag/NBTTag.d.ts'
import type { ByteBuffer } from '../../../../../com/seedfinding/mccore/net/ByteBuffer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NBTList extends NBTTag<NBTTag<Object>[]> {
    static NULL: NBTList;
    static create(paramarg0: ByteBuffer): NBTTag<Object>;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: () => NBTTag<Object>[])
    readonly elementType: number;
    add(arg0: NBTTag<Object>): NBTList;
    contains(arg0: Object): boolean;
    get(arg0: number): NBTTag<Object>;
    get<T extends NBTTag<Object>>(arg0: number, arg1: Class<T>): T;
    getElement(arg0: number): Object;
    getElement<T extends Object | number | string | boolean>(arg0: number, arg1: Class<T>): T;
    getElementType(): number;
    getElements(): Object[];
    getElements(arg0: Class<T>): T[];
    getValue(arg0: Class<T>): T[];
    isEmpty(): boolean;
    readPayload(arg0: ByteBuffer): void;
    run(arg0: (param0: NBTList) => void): NBTList;
    size(): number;
    toString(): string;
    writePayload(arg0: ByteBuffer): void;
}