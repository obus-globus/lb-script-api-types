import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export interface Descriptor extends Serializable, Object, Cloneable{
    clone(): Object;
    getFieldNames(): string[];
    getFieldValue(arg0: string): Object;
    getFieldValues(arg0: string[]): Object[];
    getFields(): string[];
    isValid(): boolean;
    removeField(arg0: string): void;
    setField(arg0: string, arg1: Object): void;
    setFields(arg0: string[], arg1: Object[]): void;
}