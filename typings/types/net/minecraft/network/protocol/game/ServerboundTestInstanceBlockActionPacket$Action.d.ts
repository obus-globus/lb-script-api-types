import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ServerboundTestInstanceBlockActionPacket$Action extends Enum<ServerboundTestInstanceBlockActionPacket$Action> {
    static EXPORT: ServerboundTestInstanceBlockActionPacket$Action;
    static INIT: ServerboundTestInstanceBlockActionPacket$Action;
    static QUERY: ServerboundTestInstanceBlockActionPacket$Action;
    static RESET: ServerboundTestInstanceBlockActionPacket$Action;
    static RUN: ServerboundTestInstanceBlockActionPacket$Action;
    static SAVE: ServerboundTestInstanceBlockActionPacket$Action;
    static SET: ServerboundTestInstanceBlockActionPacket$Action;
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundTestInstanceBlockActionPacket$Action>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServerboundTestInstanceBlockActionPacket$Action;
    static values(): ServerboundTestInstanceBlockActionPacket$Action[];
    private constructor(id: number)
    // private id: number;
    name(): "INIT" | "QUERY" | "SET" | "RESET" | "SAVE" | "EXPORT" | "RUN";
}