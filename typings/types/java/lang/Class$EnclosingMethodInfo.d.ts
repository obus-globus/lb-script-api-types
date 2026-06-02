import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Class$EnclosingMethodInfo extends Object {
    constructor(arg0: Object[])
    // private descriptor: string;
    // private enclosingClass: Class<Object>;
    // private name: string;
    getDescriptor(): string;
    getEnclosingClass(): Class<Object>;
    getName(): string;
    isConstructor(): boolean;
    isMethod(): boolean;
    isPartial(): boolean;
}