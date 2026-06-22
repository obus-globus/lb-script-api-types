import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ITransformer } from '../../../../org/spongepowered/asm/service/ITransformer.d.ts'
export interface ITreeClassTransformer extends Object, ITransformer{
    getName(): string;
    isDelegationExcluded(): boolean;
    transformClassNode(arg0: string, arg1: string, arg2: ClassNode): boolean;
}