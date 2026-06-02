import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ObjectInfo } from '../../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
export class ObjectInfos extends Object {
    static CODEC: MapCodec<ObjectInfo>;
    constructor()
}