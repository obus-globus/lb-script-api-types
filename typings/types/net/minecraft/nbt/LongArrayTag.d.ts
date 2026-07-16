import type { Object } from '../../../java/lang/Object.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
export class LongArrayTag {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ARRAY_HEADER: number;
    static MAX_DEPTH: number;
    static OBJECT_HEADER: number;
    static OBJECT_REFERENCE: number;
    static STRING_SIZE: number;
    static TAG_BYTE: number;
    static TAG_BYTE_ARRAY: number;
    static TAG_COMPOUND: number;
    static TAG_DOUBLE: number;
    static TAG_END: number;
    static TAG_FLOAT: number;
    static TAG_INT: number;
    static TAG_INT_ARRAY: number;
    static TAG_LIST: number;
    static TAG_LONG: number;
    static TAG_LONG_ARRAY: number;
    static TAG_SHORT: number;
    static TAG_STRING: number;
    static TYPE: TagType<(Object | null)[]>;
}