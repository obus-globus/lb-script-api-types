import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinInfo } from '../../../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ArgsClassGenerator$ArgsClassInfo } from '../../../../../../../org/spongepowered/asm/mixin/injection/invoke/arg/ArgsClassGenerator$ArgsClassInfo.d.ts'
import type { IClassGenerator } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ext/IClassGenerator.d.ts'
import type { ISyntheticClassInfo } from '../../../../../../../org/spongepowered/asm/service/ISyntheticClassInfo.d.ts'
import type { IConsumer } from '../../../../../../../org/spongepowered/asm/util/IConsumer.d.ts'
export class ArgsClassGenerator extends Object implements IClassGenerator {
    static ARGS_NAME: string;
    static ARGS_REF: string;
    static GETTER_PREFIX: string;
    static SYNTHETIC_PACKAGE: string;
    constructor(arg0: IConsumer<ISyntheticClassInfo>)
    // private descToClass: { [key: string]: ArgsClassGenerator$ArgsClassInfo };
    // private nameToClass: { [key: string]: ArgsClassGenerator$ArgsClassInfo };
    // private nextIndex: number;
    // private registry: IConsumer<ISyntheticClassInfo>;
    generate(arg0: string, arg1: ClassNode): boolean;
    // private generateCtor(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    // private generateFactory(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    // private generateGetters(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    // private generateIndexedSetter(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    // private generateMultiSetter(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    // private generateSetters(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    // private generateToString(arg0: ArgsClassGenerator$ArgsClassInfo, arg1: ClassVisitor): void;
    getArgsClass(arg0: string, arg1: IMixinInfo): ISyntheticClassInfo;
    getName(): string;
}