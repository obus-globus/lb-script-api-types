import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../com/sun/jna/Structure.d.ts'
import type { Structure$StructField } from '../../../com/sun/jna/Structure$StructField.d.ts'
import type { TypeMapper } from '../../../com/sun/jna/TypeMapper.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Union extends Structure {
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
    // private activeField: Structure$StructField;
    // private findField(arg0: Class<Object>): Structure$StructField;
    getFieldOrder(): string[];
    getNativeAlignment(arg0: Class<Object>, arg1: Object, arg2: boolean): number;
    getTypedValue(arg0: Class<Object>): Object;
    readField(arg0: Structure$StructField): Object;
    readField(arg0: string): Object;
    setType(arg0: Class<Object>): void;
    setType(arg0: string): void;
    setTypedValue(arg0: Object): Object;
    writeField(arg0: Structure$StructField): void;
    writeField(arg0: string): void;
    writeField(arg0: string, arg1: Object): void;
}