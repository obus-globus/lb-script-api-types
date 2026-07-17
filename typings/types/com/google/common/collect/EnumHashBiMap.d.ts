import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EnumHashBiMap<K extends Enum<K>, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<K extends Enum<K>, V extends unknown>(paramkeyType: Class<K>): JavaMap<K, V>;
    static create<K extends Enum<K>, V extends unknown>(parammap: JavaMap<K, V>): JavaMap<K, V>;
}