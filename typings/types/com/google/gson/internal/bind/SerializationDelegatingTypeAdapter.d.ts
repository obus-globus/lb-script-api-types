import type { TypeAdapter } from '../../../../../com/google/gson/TypeAdapter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class SerializationDelegatingTypeAdapter<T extends unknown> extends TypeAdapter<T> {
    constructor()
    getSerializationDelegate(): TypeAdapter<T>;
}