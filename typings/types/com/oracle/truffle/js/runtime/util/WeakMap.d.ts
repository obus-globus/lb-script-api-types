import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WeakMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static INVERTED_WEAK_MAP_KEY: HiddenKey;
    static newInvertedMap(): JavaMap<JavaMap<any, any>, Object>;
}