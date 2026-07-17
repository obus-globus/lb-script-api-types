import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChainConfig$Input } from '../../../../net/minecraft/client/renderer/PostChainConfig$Input.d.ts'
import type { UniformValue } from '../../../../net/minecraft/client/renderer/UniformValue.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostChainConfig$Pass extends Record {
    static CODEC: Codec<PostChainConfig$Pass>;
    constructor(vertexShaderId: Identifier, fragmentShaderId: Identifier, inputs: PostChainConfig$Input[], outputTarget: Identifier, uniforms: JavaMap<string, UniformValue[]>)
    // private fragmentShaderId: Identifier;
    // private inputs: PostChainConfig$Input[];
    // private outputTarget: Identifier;
    // private uniforms: JavaMap<string, UniformValue[]>;
    // private vertexShaderId: Identifier;
    equals(o: Object | null): boolean;
    fragmentShaderId(): Identifier;
    hashCode(): number;
    inputs(): PostChainConfig$Input[];
    outputTarget(): Identifier;
    referencedTargets(): Stream<Identifier>;
    toString(): string;
    uniforms(): JavaMap<string, UniformValue[]>;
    vertexShaderId(): Identifier;
}