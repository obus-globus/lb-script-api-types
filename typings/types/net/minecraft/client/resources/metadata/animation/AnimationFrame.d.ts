import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AnimationFrame extends Record {
    static CODEC: Codec<AnimationFrame>;
    static FULL_CODEC: Codec<AnimationFrame>;
    // private index: number;
    // private time: Optional<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    index(): number;
    time(): Optional<number>;
    timeOr(defaultFrameTime: number): number;
    toString(): string;
}