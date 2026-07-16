import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RuntimeModuleData } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/components/RuntimeModuleData.d.ts'
export class ModuleByClassLoaderKt extends Object {
    static clearModuleByClassLoaderCache(): void;
    static getOrCreateModule(self: Class<Object>): RuntimeModuleData;
}