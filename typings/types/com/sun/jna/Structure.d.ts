import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Structure$FFIType } from '../../../com/sun/jna/Structure$FFIType.d.ts'
import type { Structure$LayoutInfo } from '../../../com/sun/jna/Structure$LayoutInfo.d.ts'
import type { Structure$NativeStringTracking } from '../../../com/sun/jna/Structure$NativeStringTracking.d.ts'
import type { Structure$StructField } from '../../../com/sun/jna/Structure$StructField.d.ts'
import type { TypeMapper } from '../../../com/sun/jna/TypeMapper.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Structure extends Object {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: Pointer, arg1: number)
    constructor(arg0: Pointer, arg1: number, arg2: TypeMapper)
    constructor(arg0: TypeMapper)
    constructor(arg0: number)
    constructor(arg0: number, arg1: TypeMapper)
    // private actualAlignType: number;
    // private alignType: number;
    // private array: Structure[];
    // private encoding: string;
    // private memory: Pointer;
    // private nativeStrings: { [key: string]: Structure$NativeStringTracking };
    // private readCalled: boolean;
    // private size: number;
    // private structAlignment: number;
    // private structFields: { [key: string]: Structure$StructField };
    // private typeInfo: number;
    // private typeMapper: TypeMapper;
    // private addPadding(arg0: number): number;
    // private addPadding(arg0: number, arg1: number): number;
    allocateMemory(): void;
    // private allocateMemory(arg0: boolean): void;
    allocateMemory(arg0: number): void;
    autoAllocate(arg0: number): Memory;
    autoRead(): void;
    autoWrite(): void;
    // private baseClass(): Class<Object>;
    cacheTypeInfo(arg0: Pointer): void;
    calculateSize(arg0: boolean): number;
    calculateSize(arg0: boolean, arg1: boolean): number;
    clear(): void;
    conditionalAutoRead(): void;
    dataEquals(arg0: Structure): boolean;
    dataEquals(arg0: Structure, arg1: boolean): boolean;
    // private deriveLayout(arg0: boolean, arg1: boolean): Structure$LayoutInfo;
    ensureAllocated(): void;
    // private ensureAllocated(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    fieldOffset(arg0: string): number;
    // private fieldOrder(): string[];
    fields(): { [key: string]: Structure$StructField };
    // private format(arg0: Class<Object>): string;
    getAutoRead(): boolean;
    getAutoWrite(): boolean;
    getFieldList(): Field[];
    getFieldOrder(): string[];
    getFieldTypeInfo(arg0: Structure$StructField): Structure$FFIType;
    getFieldValue(arg0: Field): Object;
    getFields(arg0: boolean): Field[];
    getNativeAlignment(arg0: Class<Object>, arg1: Object, arg2: boolean): number;
    getNativeSize(arg0: Class<Object>): number;
    getNativeSize(arg0: Class<Object>, arg1: Object): number;
    getPointer(): Pointer;
    getStringEncoding(): string;
    getStructAlignment(): number;
    getTypeInfo(): Pointer;
    getTypeMapper(): TypeMapper;
    hashCode(): number;
    // private initializeField(arg0: Field, arg1: Class<Object>): Object;
    // private initializeFields(): void;
    // private initializeTypeMapper(arg0: TypeMapper): void;
    // private layoutChanged(): void;
    read(): void;
    readField(arg0: Structure$StructField): Object;
    readField(arg0: string): Object;
    setAlignType(arg0: number): void;
    setAutoRead(arg0: boolean): void;
    setAutoSynch(arg0: boolean): void;
    setAutoWrite(arg0: boolean): void;
    setFieldValue(arg0: Field, arg1: Object): void;
    // private setFieldValue(arg0: Field, arg1: Object, arg2: boolean): void;
    setStringEncoding(arg0: string): void;
    size(): number;
    sortFields(arg0: Field[], arg1: string[]): void;
    toArray(arg0: Structure[]): Structure[];
    toArray(arg0: number): Structure[];
    toString(): string;
    toString(arg0: boolean): string;
    // private toString(arg0: number, arg1: boolean, arg2: boolean): string;
    useMemory(arg0: Pointer): void;
    useMemory(arg0: Pointer, arg1: number): void;
    useMemory(arg0: Pointer, arg1: number, arg2: boolean): void;
    // private validateField(arg0: string, arg1: Class<Object>): void;
    // private validateFields(): void;
    write(): void;
    writeField(arg0: Structure$StructField): void;
    // private writeField(arg0: Structure$StructField, arg1: Object): void;
    writeField(arg0: string): void;
    writeField(arg0: string, arg1: Object): void;
}