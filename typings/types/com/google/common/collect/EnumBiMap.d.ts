import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumBiMap<K extends Enum<K>, V extends Enum<V>> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<K extends Enum<K>, V extends Enum<V>>(paramkeyType: Class<K>, paramvalueType: Class<V>): Map<K, V>;
    static create<K extends Enum<K>, V extends Enum<V>>(parammap: Map<K, V>): Map<K, V>;
}