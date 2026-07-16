import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ContainerInput extends Enum<ContainerInput> {
    static CLONE: ContainerInput;
    static PICKUP: ContainerInput;
    static PICKUP_ALL: ContainerInput;
    static QUICK_CRAFT: ContainerInput;
    static QUICK_MOVE: ContainerInput;
    static STREAM_CODEC: StreamCodec<ByteBuf, ContainerInput>;
    static SWAP: ContainerInput;
    static THROW: ContainerInput;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ContainerInput;
    static values(): ContainerInput[];
    private constructor(id: number)
    // private id: number;
    id(): number;
    name(): "PICKUP" | "QUICK_MOVE" | "SWAP" | "CLONE" | "THROW" | "QUICK_CRAFT" | "PICKUP_ALL";
}