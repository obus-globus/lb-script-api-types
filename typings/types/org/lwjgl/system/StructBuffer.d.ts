import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
export class StructBuffer<T extends Struct<T>, SELF extends T[]> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
}