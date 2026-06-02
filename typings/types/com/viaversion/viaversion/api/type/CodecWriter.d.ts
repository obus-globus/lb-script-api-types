import type { Ops } from '../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CodecWriter<T extends Object | number | string | boolean> extends Object{
    write(arg0: Ops, arg1: T): void;
}