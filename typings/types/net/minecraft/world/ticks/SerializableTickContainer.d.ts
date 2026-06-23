import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SavedTick } from '../../../../net/minecraft/world/ticks/SavedTick.d.ts'
export interface SerializableTickContainer<T extends unknown> extends Object{
    pack(currentTick: number): SavedTick<T>[];
}