import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassSignature } from '../../../../org/spongepowered/asm/util/ClassSignature.d.ts'
export class ClassSignature$Lazy extends ClassSignature {
    static of(paramarg0: string): ClassSignature;
    static of(paramarg0: ClassNode): ClassSignature;
    static ofLazy(paramarg0: ClassNode): ClassSignature;
    constructor(arg0: string)
    // private generated: ClassSignature;
    // private sig: string;
    wake(): ClassSignature;
}