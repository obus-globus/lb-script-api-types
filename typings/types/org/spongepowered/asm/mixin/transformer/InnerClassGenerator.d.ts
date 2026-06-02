import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { InnerClassGenerator$InnerClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/InnerClassGenerator$InnerClassInfo.d.ts'
import type { MixinCoprocessorNestHost } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinCoprocessorNestHost.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { IClassGenerator } from '../../../../../org/spongepowered/asm/mixin/transformer/ext/IClassGenerator.d.ts'
import type { ISyntheticClassInfo } from '../../../../../org/spongepowered/asm/service/ISyntheticClassInfo.d.ts'
import type { IConsumer } from '../../../../../org/spongepowered/asm/util/IConsumer.d.ts'
export class InnerClassGenerator extends Object implements IClassGenerator {
    constructor(arg0: IConsumer<ISyntheticClassInfo>, arg1: MixinCoprocessorNestHost)
    // private innerClassNames: { [key: string]: string };
    // private innerClasses: { [key: string]: InnerClassGenerator$InnerClassInfo };
    // private nestHostCoprocessor: MixinCoprocessorNestHost;
    // private registry: IConsumer<ISyntheticClassInfo>;
    generate(arg0: string, arg1: ClassNode): boolean;
    // private generate(arg0: InnerClassGenerator$InnerClassInfo, arg1: ClassNode): boolean;
    getInnerClasses(arg0: MixinInfo, arg1: string): { [key: string]: string };
    getName(): string;
    registerInnerClass(arg0: MixinInfo, arg1: ClassInfo, arg2: string): void;
}