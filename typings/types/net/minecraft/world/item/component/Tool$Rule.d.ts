import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class Tool$Rule extends Record {
    static CODEC: Codec<Tool$Rule>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Tool$Rule>;
    static deniesDrops(paramblocks: Holder<T>[]): Tool$Rule;
    static minesAndDrops(paramblocks: Holder<T>[], paramspeed: number): Tool$Rule;
    static overrideSpeed(paramblocks: Holder<T>[], paramspeed: number): Tool$Rule;
    constructor(blocks: Holder<T>[], speed: Optional<number>, correctForDrops: Optional<boolean>)
    // private blocks: Holder<T>[];
    // private correctForDrops: Optional<boolean>;
    // private speed: Optional<number>;
    blocks(): Holder<T>[];
    correctForDrops(): Optional<boolean>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    speed(): Optional<number>;
    toString(): string;
}