import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GameSessionStorage } from '../../../../../net/raphimc/viabedrock/protocol/storage/GameSessionStorage.d.ts'
import type { ResourcePackStorage } from '../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class JavaRegistries extends Object {
    static createJavaRegistries(paramarg0: GameSessionStorage, paramarg1: ResourcePackStorage): Map$Entry<string, Tag>[];
    constructor()
}