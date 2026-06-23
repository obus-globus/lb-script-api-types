import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export interface RegistryContextSwapper extends Object{
    swapTo<T extends unknown>(codec: Codec<T>, value: T, newContext: HolderLookup$Provider): DataResult<T>;
}