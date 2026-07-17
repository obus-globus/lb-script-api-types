import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChainConfig$InternalTarget } from '../../../../net/minecraft/client/renderer/PostChainConfig$InternalTarget.d.ts'
import type { PostChainConfig$Pass } from '../../../../net/minecraft/client/renderer/PostChainConfig$Pass.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PostChainConfig extends Record {
    static CODEC: Codec<PostChainConfig>;
    constructor(internalTargets: JavaMap<Identifier, PostChainConfig$InternalTarget>, passes: PostChainConfig$Pass[])
    // private internalTargets: JavaMap<Identifier, PostChainConfig$InternalTarget>;
    // private passes: PostChainConfig$Pass[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    internalTargets(): JavaMap<Identifier, PostChainConfig$InternalTarget>;
    passes(): PostChainConfig$Pass[];
    toString(): string;
}