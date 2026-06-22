import type { CodecContext } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export interface Hasher extends Ops, Object{
    context(): CodecContext;
    hash(): number;
    reset(): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeShort(arg0: number): void;
    writeString(arg0: CharSequence): void;
}