import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { ClassInfo } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { ClassInfo$Method } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$Method.d.ts'
import type { IExtension } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
import type { ITargetClassContext } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ext/ITargetClassContext.d.ts'
import type { PrettyPrinter } from '../../../../../../../org/spongepowered/asm/util/PrettyPrinter.d.ts'
import type { Multimap } from '../../../../../../../org/spongepowered/include/com/google/common/collect/Multimap.d.ts'
export class ExtensionCheckInterfaces extends Object implements IExtension {
    constructor()
    // private csv: File;
    // private interfaceMethods: Multimap<ClassInfo, ClassInfo$Method>;
    // private report: File;
    // private started: boolean;
    // private strict: boolean;
    // private appendToCSVReport(arg0: string, arg1: ClassInfo$Method, arg2: string): void;
    // private appendToTextReport(arg0: PrettyPrinter): void;
    checkActive(arg0: MixinEnvironment): boolean;
    export(arg0: MixinEnvironment, arg1: string, arg2: boolean, arg3: ClassNode): void;
    postApply(arg0: ITargetClassContext): void;
    preApply(arg0: ITargetClassContext): void;
    // private start(): void;
}