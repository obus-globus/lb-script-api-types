import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ASMWrapper$LabelAccess } from '../../../../net/lenni0451/reflect/wrapper/ASMWrapper$LabelAccess.d.ts'
import type { ASMWrapper$MethodVisitorAccess } from '../../../../net/lenni0451/reflect/wrapper/ASMWrapper$MethodVisitorAccess.d.ts'
export class ASMWrapper extends Object {
    static create(paramarg0: number, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string[]): ASMWrapper;
    static desc(paramarg0: Class<Object>): string;
    static desc(paramarg0: Class<Object>[], paramarg1: Class<Object>): string;
    static desc(paramarg0: string): string;
    static desc(paramarg0: Method): string;
    static getLoadOpcode(paramarg0: Class<Object>): number;
    static getReturnOpcode(paramarg0: Class<Object>): number;
    static opcode(paramarg0: string): number;
    static slash(paramarg0: Class<Object>): string;
    static slash(paramarg0: string): string;
    private constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[])
    // private classWriter: Object;
    defineAnonymously(arg0: Class<Object>): Class<Object>;
    defineMetafactory(arg0: Class<Object>): Class<Object>;
    label(): ASMWrapper$LabelAccess;
    toByteArray(): number[];
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): ASMWrapper$MethodVisitorAccess;
}