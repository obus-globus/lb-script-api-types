import type { CodecContext } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Hasher } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/hash/Hasher.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { OpsBase } from '../../../../../com/viaversion/viaversion/codec/OpsBase.d.ts'
import type { HashBuilder } from '../../../../../com/viaversion/viaversion/codec/hash/HashBuilder.d.ts'
import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HashOps extends OpsBase implements Hasher {
    constructor(arg0: CodecContext, arg1: (param0: number[], param1: number) => number)
    // private hashBuilder: HashBuilder;
    hash(): number;
    reset(): void;
    write<V extends Object | number | string | boolean>(arg0: Type<V>, arg1: V): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeBytes(arg0: number[]): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeInts(arg0: number[]): void;
    writeList(arg0: (param0: Ops$ListSerializer) => void): void;
    writeLong(arg0: number): void;
    writeLongs(arg0: number[]): void;
    writeMap(arg0: (param0: Ops$MapSerializer) => void): void;
    writeShort(arg0: number): void;
    writeString(arg0: CharSequence): void;
}