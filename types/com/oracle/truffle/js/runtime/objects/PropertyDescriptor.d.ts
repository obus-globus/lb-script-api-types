import type { Accessor } from '../../../../../../com/oracle/truffle/js/runtime/objects/Accessor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyDescriptor extends Object {
    static undefinedDataDesc: PropertyDescriptor;
    static undefinedDataDescNotConfigurable: PropertyDescriptor;
    static createAccessor(paramgetter: Object, paramsetter: Object): PropertyDescriptor;
    static createAccessor(paramgetter: Object, paramsetter: Object, paramisEnumerable: boolean, paramisConfigurable: boolean): PropertyDescriptor;
    static createAccessor(paramgetter: Object, paramsetter: Object, paramattributes: number): PropertyDescriptor;
    static createData(paramvalue: Object): PropertyDescriptor;
    static createData(paramvalue: Object, paramisEnumerable: boolean, paramisWritable: boolean, paramisConfigurable: boolean): PropertyDescriptor;
    static createData(paramvalue: Object, paramattributes: number): PropertyDescriptor;
    static createDataDefault(paramvalue: Object): PropertyDescriptor;
    static createEmpty(): PropertyDescriptor;
    private constructor()
    // private data: Object;
    readonly flags: number;
    getConfigurable(): boolean;
    getEnumerable(): boolean;
    getFlags(): number;
    getGet(): Object;
    getIfHasConfigurable(defaultValue: boolean): boolean;
    getIfHasEnumerable(defaultValue: boolean): boolean;
    getIfHasWritable(defaultValue: boolean): boolean;
    getSet(): Object;
    getValue(): Object;
    getWritable(): boolean;
    hasConfigurable(): boolean;
    hasEnumerable(): boolean;
    hasGet(): boolean;
    hasNoFields(): boolean;
    hasSet(): boolean;
    hasValue(): boolean;
    hasWritable(): boolean;
    isAccessorDescriptor(): boolean;
    isDataDescriptor(): boolean;
    isFullyPopulatedPropertyDescriptor(): boolean;
    isGenericDescriptor(): boolean;
    setAccessor(accessor: Accessor): void;
    setConfigurable(configurable: boolean): void;
    setEnumerable(enumerable: boolean): void;
    setGet(get: Object): void;
    setSet(set: Object): void;
    setValue(value: Object): void;
    setWritable(writable: boolean): void;
    toString(): string;
}