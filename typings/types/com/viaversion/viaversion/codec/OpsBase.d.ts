import type { CodecContext } from '../../../../com/viaversion/viaversion/api/minecraft/codec/CodecContext.d.ts'
import type { Ops } from '../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class OpsBase extends Object implements Ops {
    constructor(arg0: CodecContext)
    // private context: CodecContext;
    context(): CodecContext;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeShort(arg0: number): void;
    writeString(arg0: CharSequence): void;
}