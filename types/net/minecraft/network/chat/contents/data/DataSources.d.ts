import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DataSource } from '../../../../../../net/minecraft/network/chat/contents/data/DataSource.d.ts'
export class DataSources extends Object {
    static CODEC: MapCodec<DataSource>;
    constructor()
}