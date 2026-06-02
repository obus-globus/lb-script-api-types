import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { FieldSet$FieldDescriptorLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/FieldSet$FieldDescriptorLite.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class FieldSet<FieldDescriptorType extends FieldSet$FieldDescriptorLite<FieldDescriptorType>> extends Object {
    static computeFieldSize(paramarg0: FieldSet$FieldDescriptorLite<Object>, paramarg1: Object): number;
    static emptySet(): FieldSet<Object>;
    static newFieldSet(): FieldSet<Object>;
    static readPrimitiveField(paramarg0: CodedInputStream, paramarg1: WireFormat$FieldType, paramarg2: boolean): Object;
    static writeField(paramarg0: FieldSet$FieldDescriptorLite<Object>, paramarg1: Object, paramarg2: CodedOutputStream): void;
    private constructor()
    private constructor(arg0: boolean)
    // private fields: Map<FieldDescriptorType, Object>;
    // private hasLazyField: boolean;
    // private isImmutable: boolean;
    addRepeatedField(arg0: FieldDescriptorType, arg1: Object): void;
    clone(): FieldSet<FieldDescriptorType>;
    // private cloneIfMutable(arg0: Object): Object;
    getField(arg0: FieldDescriptorType): Object;
    getRepeatedField(arg0: FieldDescriptorType, arg1: number): Object;
    getRepeatedFieldCount(arg0: FieldDescriptorType): number;
    getSerializedSize(): number;
    hasField(arg0: FieldDescriptorType): boolean;
    isInitialized(): boolean;
    // private isInitialized(arg0: Map$Entry<FieldDescriptorType, Object>): boolean;
    iterator(): Iterator<Map$Entry<FieldDescriptorType, Object>>;
    makeImmutable(): void;
    mergeFrom(arg0: FieldSet<FieldDescriptorType>): void;
    // private mergeFromField(arg0: Map$Entry<FieldDescriptorType, Object>): void;
    setField(arg0: FieldDescriptorType, arg1: Object): void;
}