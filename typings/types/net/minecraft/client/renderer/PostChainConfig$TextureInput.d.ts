import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChainConfig$Input } from '../../../../net/minecraft/client/renderer/PostChainConfig$Input.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostChainConfig$TextureInput extends Record implements PostChainConfig$Input {
    static CODEC: Codec<PostChainConfig$Input>;
    static CODEC: Codec<PostChainConfig$TextureInput>;
    // private bilinear: boolean;
    // private height: number;
    // private location: Identifier;
    // private samplerName: string;
    // private width: number;
    bilinear(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    location(): Identifier;
    referencedTargets(): Identifier[];
    samplerName(): string;
    toString(): string;
    width(): number;
}