import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
export class EncodingKt extends Object {
    static ADDITIONAL_INFORMATION_INDEFINITE_LENGTH: number;
    static ADDITIONAL_INFO_MASK: number;
    static BEGIN_ARRAY: number;
    static BEGIN_MAP: number;
    static BREAK: number;
    static EMPTY_MAP: number;
    static FALSE: number;
    static HALF_PRECISION_EXPONENT_BIAS: number;
    static HALF_PRECISION_MAX_EXPONENT: number;
    static HALF_PRECISION_MAX_MANTISSA: number;
    static HEADER_ARRAY: number;
    static HEADER_BYTE_STRING: number;
    static HEADER_MAP: number;
    static HEADER_NEGATIVE: number;
    static HEADER_POSITIVE: number;
    static HEADER_STRING: number;
    static HEADER_TAG: number;
    static LENGTH_STACK_INDEFINITE: number;
    static MAJOR_TYPE_MASK: number;
    static NEXT_DOUBLE: number;
    static NEXT_FLOAT: number;
    static NEXT_HALF: number;
    static NULL: number;
    static SINGLE_PRECISION_EXPONENT_BIAS: number;
    static SINGLE_PRECISION_MAX_EXPONENT: number;
    static SINGLE_PRECISION_NORMALIZE_BASE: number;
    static TRUE: number;
    static findAnnotation<A extends Annotation>(self: SerialDescriptor, elementIndex: number): A | null;
    static getCborLabel(self: SerialDescriptor, index: number): number | null;
    static getKeyTags(self: SerialDescriptor, index: number): (Object | null)[] | null;
    static getObjectTags(self: SerialDescriptor): (Object | null)[] | null;
    static getValueTags(self: SerialDescriptor, index: number): (Object | null)[] | null;
    static hasArrayTag(self: SerialDescriptor): boolean;
    static isByteString(self: SerialDescriptor, index: number): boolean;
    static isInlineByteString(self: SerialDescriptor): boolean;
}