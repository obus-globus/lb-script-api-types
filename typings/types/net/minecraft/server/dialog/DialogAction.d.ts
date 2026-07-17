import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DialogAction extends Enum<DialogAction> implements StringRepresentable {
    static BY_ID: (param0: number) => DialogAction;
    static CLOSE: DialogAction;
    static CODEC: Codec<DialogAction>;
    static NONE: DialogAction;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, DialogAction>;
    static WAIT_FOR_RESPONSE: DialogAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DialogAction;
    static values(): DialogAction[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    willUnpause(): boolean;
    name(): "CLOSE" | "NONE" | "WAIT_FOR_RESPONSE";
}