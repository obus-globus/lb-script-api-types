import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnimationMetadataSectionAccessor } from '../../../../../../net/irisshaders/iris/mixin/texture/AnimationMetadataSectionAccessor.d.ts'
import type { AnimationFrame } from '../../../../../../net/minecraft/client/resources/metadata/animation/AnimationFrame.d.ts'
import type { FrameSize } from '../../../../../../net/minecraft/client/resources/metadata/animation/FrameSize.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class AnimationMetadataSection extends Record implements AnimationMetadataSectionAccessor {
    static CODEC: Codec<AnimationMetadataSection>;
    static TYPE: MetadataSectionType<AnimationMetadataSection>;
    // private defaultFrameTime: number;
    // private frames: Optional<AnimationFrame[]>;
    // private interpolatedFrames: boolean;
    calculateFrameSize(spriteWidth: number, spriteHeight: number): FrameSize;
    defaultFrameTime(): number;
    equals(o: Object | null): boolean;
    frameHeight(): Optional<number>;
    frameWidth(): Optional<number>;
    frames(): Optional<AnimationFrame[]>;
    hashCode(): number;
    interpolatedFrames(): boolean;
    toString(): string;
}