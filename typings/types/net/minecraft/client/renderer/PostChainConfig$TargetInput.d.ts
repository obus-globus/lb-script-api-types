import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChainConfig$Input } from '../../../../net/minecraft/client/renderer/PostChainConfig$Input.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostChainConfig$TargetInput extends Record implements PostChainConfig$Input {
    static CODEC: Codec<PostChainConfig$Input>;
    static CODEC: Codec<PostChainConfig$TargetInput>;
    constructor(samplerName: string, targetId: Identifier, useDepthBuffer: boolean, bilinear: boolean)
    // private bilinear: boolean;
    // private samplerName: string;
    // private targetId: Identifier;
    // private useDepthBuffer: boolean;
    bilinear(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    referencedTargets(): Identifier[];
    samplerName(): string;
    targetId(): Identifier;
    toString(): string;
    useDepthBuffer(): boolean;
}