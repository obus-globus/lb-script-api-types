import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinCoprocessor } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessor.d.ts'
export class MixinCoprocessorNestHost extends MixinCoprocessor {
    constructor()
    // private nestHosts: JavaMap<string, string[]>;
    couldTransform(arg0: string): boolean;
    getName(): string;
    postProcess(arg0: string, arg1: ClassNode): boolean;
    registerNestMember(arg0: string, arg1: string): void;
}