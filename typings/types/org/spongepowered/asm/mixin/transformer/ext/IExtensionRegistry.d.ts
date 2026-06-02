import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IExtension } from '../../../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
import type { ISyntheticClassRegistry } from '../../../../../../org/spongepowered/asm/service/ISyntheticClassRegistry.d.ts'
export interface IExtensionRegistry extends Object{
    getActiveExtensions(): IExtension[];
    getExtension<T extends IExtension>(arg0: Class<IExtension>): T;
    getExtensions(): IExtension[];
    getSyntheticClassRegistry(): ISyntheticClassRegistry;
}