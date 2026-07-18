import type { JavaMap } from '../../../../../JavaMap.d.ts'

export class Http2Settings {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_CAPACITY: number;
    static DEFAULT_LOAD_FACTOR: number;
    static defaultSettings(): JavaMap<any, any>;
}