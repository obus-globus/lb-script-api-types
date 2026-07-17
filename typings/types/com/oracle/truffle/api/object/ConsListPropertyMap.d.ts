import type { JavaMap } from '../../../../../JavaMap.d.ts'

export class ConsListPropertyMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static empty(): JavaMap<any, any>;
}