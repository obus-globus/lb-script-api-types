import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IDecompiler } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ext/IDecompiler.d.ts'
import type { IExtension } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
import type { ITargetClassContext } from '../../../../../../../org/spongepowered/asm/mixin/transformer/ext/ITargetClassContext.d.ts'
export class ExtensionClassExporter extends Object implements IExtension {
    constructor(arg0: MixinEnvironment)
    // private classExportDir: File;
    // private decompiler: IDecompiler;
    // private applyFilter(arg0: string, arg1: string): boolean;
    checkActive(arg0: MixinEnvironment): boolean;
    dumpClass(arg0: string, arg1: ClassNode): File;
    export(arg0: MixinEnvironment, arg1: string, arg2: boolean, arg3: ClassNode): void;
    // private initDecompiler(arg0: MixinEnvironment, arg1: File): IDecompiler;
    isDecompilerActive(): boolean;
    postApply(arg0: ITargetClassContext): void;
    preApply(arg0: ITargetClassContext): void;
    // private prepareFilter(arg0: string): string;
}