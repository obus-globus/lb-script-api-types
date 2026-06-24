import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Input extends Record {
    static EMPTY: Input;
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, Input>;
    constructor(forward: boolean, backward: boolean, left: boolean, right: boolean, jump: boolean, shift: boolean, sprint: boolean)
    // private backward: boolean;
    // private forward: boolean;
    // private jump: boolean;
    // private left: boolean;
    // private right: boolean;
    // private shift: boolean;
    // private sprint: boolean;
    backward(): boolean;
    equals(o: Object | null): boolean;
    forward(): boolean;
    hashCode(): number;
    jump(): boolean;
    left(): boolean;
    right(): boolean;
    shift(): boolean;
    sprint(): boolean;
    toString(): string;
}