import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BuiltClass } from '../../../../../../net/lenni0451/reflect/bytecode/wrapper/BuiltClass.d.ts'
export class ASMBuiltClass extends Object implements BuiltClass {
    constructor(arg0: Object, arg1: string)
    // private classWriter: Object;
    readonly name: string;
    defineAnonymous(arg0: Class<Object>): Class<Object>;
    defineMetafactory(arg0: Class<Object>): Class<Object>;
    getName(): string;
    toBytes(): number[];
}