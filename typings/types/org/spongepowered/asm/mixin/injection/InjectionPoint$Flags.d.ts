import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { At } from '../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
export class InjectionPoint$Flags extends Object {
    static UNSAFE: number;
    static parse(paramarg0: AnnotationNode): number;
    static parse(paramarg0: At): number;
    constructor()
}