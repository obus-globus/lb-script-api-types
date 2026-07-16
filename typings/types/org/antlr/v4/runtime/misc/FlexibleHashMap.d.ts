import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FlexibleHashMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static INITAL_BUCKET_CAPACITY: number;
    static INITAL_CAPACITY: number;
    static LOAD_FACTOR: number;
    static main(paramarg0: string[]): void;
}