import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontDescription } from '../../../../../../net/minecraft/network/chat/FontDescription.d.ts'
export interface ObjectInfo extends Object{
    codec(): MapCodec<ObjectInfo>;
    defaultFallback(): string;
    fontDescription(): FontDescription;
}