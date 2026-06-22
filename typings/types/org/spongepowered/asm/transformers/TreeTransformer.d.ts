import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassReader } from '../../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ILegacyClassTransformer } from '../../../../org/spongepowered/asm/service/ILegacyClassTransformer.d.ts'
export abstract class TreeTransformer extends Object implements ILegacyClassTransformer {
    constructor()
    // private classNode: ClassNode;
    // private classReader: ClassReader;
    getName(): string;
    isDelegationExcluded(): boolean;
    readClass(arg0: string, arg1: number[]): ClassNode;
    readClass(arg0: string, arg1: number[], arg2: boolean): ClassNode;
    writeClass(arg0: ClassNode): number[];
}