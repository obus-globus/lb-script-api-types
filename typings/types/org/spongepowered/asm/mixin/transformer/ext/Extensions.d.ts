import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { MixinEnvironment } from '../../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IClassGenerator } from '../../../../../../org/spongepowered/asm/mixin/transformer/ext/IClassGenerator.d.ts'
import type { IExtension } from '../../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
import type { IExtensionRegistry } from '../../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtensionRegistry.d.ts'
import type { ITargetClassContext } from '../../../../../../org/spongepowered/asm/mixin/transformer/ext/ITargetClassContext.d.ts'
import type { ISyntheticClassRegistry } from '../../../../../../org/spongepowered/asm/service/ISyntheticClassRegistry.d.ts'
export class Extensions extends Object implements IExtensionRegistry {
    constructor(arg0: ISyntheticClassRegistry)
    readonly activeExtensions: IExtension[];
    // private extensionMap: JavaMap<Class<IExtension>, IExtension>;
    readonly extensions: IExtension[];
    // private generatorMap: JavaMap<Class<IClassGenerator>, IClassGenerator>;
    readonly generators: IClassGenerator[];
    // private generatorsView: IClassGenerator[];
    readonly syntheticClassRegistry: ISyntheticClassRegistry;
    add(arg0: IClassGenerator): void;
    add(arg0: IExtension): void;
    export(arg0: MixinEnvironment, arg1: string, arg2: boolean, arg3: ClassNode): void;
    getActiveExtensions(): IExtension[];
    getExtension<T extends IExtension>(arg0: Class<IExtension>): T;
    getExtensions(): IExtension[];
    getGenerator<T extends IClassGenerator>(arg0: Class<IClassGenerator>): T;
    getGenerators(): IClassGenerator[];
    getSyntheticClassRegistry(): ISyntheticClassRegistry;
    postApply(arg0: ITargetClassContext): void;
    preApply(arg0: ITargetClassContext): void;
    select(arg0: MixinEnvironment): void;
}