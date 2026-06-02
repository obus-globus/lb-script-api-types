import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { LocalVariableDiscriminator$Context } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context.d.ts'
export class LocalVariableDiscriminator extends Object {
    static parse(paramarg0: AnnotationNode): LocalVariableDiscriminator;
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: string[], arg4: boolean)
    readonly argsOnly: boolean;
    readonly index: number;
    readonly names: string[];
    readonly ordinal: number;
    // private print: boolean;
    // private findExplicitLocal(arg0: LocalVariableDiscriminator$Context): number;
    // private findImplicitLocal(arg0: LocalVariableDiscriminator$Context): number;
    findLocal(arg0: LocalVariableDiscriminator$Context): number;
    getIndex(): number;
    getNames(): string[];
    getOrdinal(): number;
    hasNames(): boolean;
    isArgsOnly(): boolean;
    isImplicit(arg0: LocalVariableDiscriminator$Context): boolean;
    printLVT(): boolean;
    toString(): string;
    toString(arg0: LocalVariableDiscriminator$Context): string;
}