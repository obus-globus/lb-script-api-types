import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { FakeEnumType$Entry } from '../../../../../../com/viaversion/viaversion/api/type/types/FakeEnumType$Entry.d.ts'
import type { VarIntType } from '../../../../../../com/viaversion/viaversion/api/type/types/VarIntType.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class FakeEnumType extends VarIntType {
    static varIntLength(paramarg0: number): number;
    constructor(arg0: FakeEnumType$Entry[])
    constructor(arg0: string[], arg1: FakeEnumType$Entry[])
    // private entries: FakeEnumType$Entry[];
    entries(): FakeEnumType$Entry[];
    write(arg0: Ops, arg1: number): void;
    write(arg0: ByteBuf, arg1: number): void;
}