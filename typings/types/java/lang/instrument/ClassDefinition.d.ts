import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassDefinition extends Object {
    constructor(arg0: Class<Object>, arg1: number[])
    // private mClass: Class<Object>;
    // private mClassFile: number[];
    getDefinitionClass(): Class<Object>;
    getDefinitionClassFile(): number[];
}