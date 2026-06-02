import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SavedData } from '../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class CommandStorage$Container extends SavedData {
    static CODEC: Codec<CommandStorage$Container>;
    static type(paramnamespace: string): SavedDataType<CommandStorage$Container>;
    private constructor()
    private constructor(storage: { [key: string]: CompoundTag })
    // private storage: { [key: string]: CompoundTag };
    get(id: string): CompoundTag;
    getKeys(namespace: string): Stream<Identifier>;
    put(id: string, contents: CompoundTag): void;
}