import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class SerializationDelegatingTypeAdapter<T extends Object | number | string | boolean> extends TypeAdapter<T> {
    constructor()
    getSerializationDelegate(): TypeAdapter<T>;
}