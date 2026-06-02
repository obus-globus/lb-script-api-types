import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GameEventListenerRegistry } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListenerRegistry.d.ts'
export class GameEventDispatcherStorage extends Record {
    constructor()
    constructor(storage: Long2ReferenceOpenHashMap<Int2ObjectMap<GameEventListenerRegistry>>, loadedChunks: (Object | null)[])
    // private loadedChunks: (Object | null)[];
    // private storage: Long2ReferenceOpenHashMap<Int2ObjectMap<GameEventListenerRegistry>>;
    addChunk(arg0: number, arg1: Int2ObjectMap<GameEventListenerRegistry>): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): Int2ObjectMap<GameEventListenerRegistry>;
    hashCode(): number;
    loadedChunks(): (Object | null)[];
    removeChunk(arg0: number): void;
    replace(arg0: number, arg1: Int2ObjectMap<GameEventListenerRegistry>): void;
    storage(): Long2ReferenceOpenHashMap<Int2ObjectMap<GameEventListenerRegistry>>;
    toString(): string;
}