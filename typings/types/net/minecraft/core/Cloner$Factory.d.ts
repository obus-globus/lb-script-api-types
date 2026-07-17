import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloner } from '../../../net/minecraft/core/Cloner.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class Cloner$Factory extends Object {
    constructor()
    // private codecs: JavaMap<ResourceKey<(Object | null)[]>, Cloner<Object>>;
    addCodec<T extends unknown>(key: ResourceKey<T[]>, codec: Codec<T>): Cloner$Factory;
    cloner<T extends unknown>(key: ResourceKey<T[]>): Cloner<T>;
}