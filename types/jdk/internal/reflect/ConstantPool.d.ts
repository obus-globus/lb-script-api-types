import type { Class } from '../../../java/lang/Class.d.ts'
import type { Field } from '../../../java/lang/reflect/Field.d.ts'
import type { Member } from '../../../java/lang/reflect/Member.d.ts'
import type { ConstantPool$Tag } from '../../../jdk/internal/reflect/ConstantPool$Tag.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConstantPool extends Object {
    constructor()
    getClassAt(arg0: number): Class<Object>;
    // private getClassAt0(arg0: Object, arg1: number): Class<Object>;
    getClassAtIfLoaded(arg0: number): Class<Object>;
    // private getClassAtIfLoaded0(arg0: Object, arg1: number): Class<Object>;
    getClassRefIndexAt(arg0: number): number;
    // private getClassRefIndexAt0(arg0: Object, arg1: number): number;
    getDoubleAt(arg0: number): number;
    // private getDoubleAt0(arg0: Object, arg1: number): number;
    getFieldAt(arg0: number): Field;
    // private getFieldAt0(arg0: Object, arg1: number): Field;
    getFieldAtIfLoaded(arg0: number): Field;
    // private getFieldAtIfLoaded0(arg0: Object, arg1: number): Field;
    getFloatAt(arg0: number): number;
    // private getFloatAt0(arg0: Object, arg1: number): number;
    getIntAt(arg0: number): number;
    // private getIntAt0(arg0: Object, arg1: number): number;
    getLongAt(arg0: number): number;
    // private getLongAt0(arg0: Object, arg1: number): number;
    getMemberRefInfoAt(arg0: number): string[];
    // private getMemberRefInfoAt0(arg0: Object, arg1: number): string[];
    getMethodAt(arg0: number): Member;
    // private getMethodAt0(arg0: Object, arg1: number): Member;
    getMethodAtIfLoaded(arg0: number): Member;
    // private getMethodAtIfLoaded0(arg0: Object, arg1: number): Member;
    getNameAndTypeRefIndexAt(arg0: number): number;
    // private getNameAndTypeRefIndexAt0(arg0: Object, arg1: number): number;
    getNameAndTypeRefInfoAt(arg0: number): string[];
    // private getNameAndTypeRefInfoAt0(arg0: Object, arg1: number): string[];
    getSize(): number;
    // private getSize0(arg0: Object): number;
    getStringAt(arg0: number): string;
    // private getStringAt0(arg0: Object, arg1: number): string;
    getTagAt(arg0: number): ConstantPool$Tag;
    // private getTagAt0(arg0: Object, arg1: number): number;
    getUTF8At(arg0: number): string;
    // private getUTF8At0(arg0: Object, arg1: number): string;
}