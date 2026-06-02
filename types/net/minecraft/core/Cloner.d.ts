import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export class Cloner<T extends Object | number | string | boolean> extends Object {
    private constructor(directCodec: Codec<T>)
    // private directCodec: Codec<T>;
    clone(value: T, from: HolderLookup$Provider, to: HolderLookup$Provider): T;
}