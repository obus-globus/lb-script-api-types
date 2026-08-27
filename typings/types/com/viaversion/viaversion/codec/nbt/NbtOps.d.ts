import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { CodecContext } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { Ops$ListSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$ListSerializer.d.ts'
import type { Ops$MapSerializer } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { OpsBase } from '../../../../../com/viaversion/viaversion/codec/OpsBase.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class NbtOps extends OpsBase {
    static serialize<V extends unknown>(paramarg0: CodecContext, paramarg1: Type<V>, paramarg2: V): Tag;
    constructor(arg0: CodecContext)
    // private result: Tag;
    complete(): Tag;
    // private serialize<V extends unknown>(arg0: Type<V>, arg1: V): Tag;
    // private serializeList(arg0: (param0: Ops$ListSerializer) => void): Tag;
    // private serializeMap(arg0: (param0: Ops$MapSerializer) => void): Tag;
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