import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Codec } from '../../../../../../org/apache/commons/compress/harmony/pack200/Codec.d.ts'
import type { IMatcher } from '../../../../../../org/apache/commons/compress/harmony/unpack200/IMatcher.d.ts'
import type { SegmentConstantPool } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class AttributeLayout extends Object implements IMatcher {
    static ACC_ABSTRACT: string;
    static ACC_ANNOTATION: string;
    static ACC_ENUM: string;
    static ACC_FINAL: string;
    static ACC_INTERFACE: string;
    static ACC_NATIVE: string;
    static ACC_PRIVATE: string;
    static ACC_PROTECTED: string;
    static ACC_PUBLIC: string;
    static ACC_STATIC: string;
    static ACC_STRICT: string;
    static ACC_SYNCHRONIZED: string;
    static ACC_SYNTHETIC: string;
    static ACC_TRANSIENT: string;
    static ACC_VOLATILE: string;
    static ATTRIBUTE_ANNOTATION_DEFAULT: string;
    static ATTRIBUTE_CLASS_FILE_VERSION: string;
    static ATTRIBUTE_CODE: string;
    static ATTRIBUTE_CONSTANT_VALUE: string;
    static ATTRIBUTE_DEPRECATED: string;
    static ATTRIBUTE_ENCLOSING_METHOD: string;
    static ATTRIBUTE_EXCEPTIONS: string;
    static ATTRIBUTE_INNER_CLASSES: string;
    static ATTRIBUTE_LINE_NUMBER_TABLE: string;
    static ATTRIBUTE_LOCAL_VARIABLE_TABLE: string;
    static ATTRIBUTE_LOCAL_VARIABLE_TYPE_TABLE: string;
    static ATTRIBUTE_RUNTIME_INVISIBLE_ANNOTATIONS: string;
    static ATTRIBUTE_RUNTIME_INVISIBLE_PARAMETER_ANNOTATIONS: string;
    static ATTRIBUTE_RUNTIME_VISIBLE_ANNOTATIONS: string;
    static ATTRIBUTE_RUNTIME_VISIBLE_PARAMETER_ANNOTATIONS: string;
    static ATTRIBUTE_SIGNATURE: string;
    static ATTRIBUTE_SOURCE_FILE: string;
    static CONTEXT_CLASS: number;
    static CONTEXT_CODE: number;
    static CONTEXT_FIELD: number;
    static CONTEXT_METHOD: number;
    static contextNames: string[];
    constructor(arg0: string, arg1: number, arg2: string, arg3: number)
    constructor(arg0: string, arg1: number, arg2: string, arg3: number, arg4: boolean)
    readonly backwardsCallCount: number;
    readonly context: number;
    readonly index: number;
    // private isDefault: boolean;
    readonly layout: string;
    // private mask: number;
    readonly name: string;
    getCodec(): Codec;
    getContext(): number;
    getIndex(): number;
    getLayout(): string;
    getName(): string;
    getValue(arg0: number, arg1: string, arg2: SegmentConstantPool): ClassFileEntry;
    getValue(arg0: number, arg1: SegmentConstantPool): ClassFileEntry;
    hashCode(): number;
    isDefaultLayout(): boolean;
    matches(arg0: number): boolean;
    numBackwardsCallables(): number;
    setBackwardsCallCount(arg0: number): void;
    toString(): string;
}