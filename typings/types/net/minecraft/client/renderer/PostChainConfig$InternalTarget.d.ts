import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PostChainConfig$InternalTarget extends Record {
    static CODEC: Codec<PostChainConfig$InternalTarget>;
    constructor(width: Optional<number>, height: Optional<number>, persistent: boolean, clearColor: number)
    // private clearColor: number;
    // private height: Optional<number>;
    // private persistent: boolean;
    // private width: Optional<number>;
    clearColor(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): Optional<number>;
    persistent(): boolean;
    toString(): string;
    width(): Optional<number>;
}