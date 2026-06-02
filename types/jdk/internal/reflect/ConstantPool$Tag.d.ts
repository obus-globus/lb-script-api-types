import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ConstantPool$Tag extends Enum<ConstantPool$Tag> {
    static CLASS: ConstantPool$Tag;
    static DOUBLE: ConstantPool$Tag;
    static FIELDREF: ConstantPool$Tag;
    static FLOAT: ConstantPool$Tag;
    static INTEGER: ConstantPool$Tag;
    static INTERFACEMETHODREF: ConstantPool$Tag;
    static INVALID: ConstantPool$Tag;
    static INVOKEDYNAMIC: ConstantPool$Tag;
    static LONG: ConstantPool$Tag;
    static METHODHANDLE: ConstantPool$Tag;
    static METHODREF: ConstantPool$Tag;
    static METHODTYPE: ConstantPool$Tag;
    static NAMEANDTYPE: ConstantPool$Tag;
    static STRING: ConstantPool$Tag;
    static UTF8: ConstantPool$Tag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ConstantPool$Tag;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private tagCode: number;
    name(): "UTF8" | "INTEGER" | "FLOAT" | "LONG" | "DOUBLE" | "CLASS" | "STRING" | "FIELDREF" | "METHODREF" | "INTERFACEMETHODREF" | "NAMEANDTYPE" | "METHODHANDLE" | "METHODTYPE" | "INVOKEDYNAMIC" | "INVALID";
}