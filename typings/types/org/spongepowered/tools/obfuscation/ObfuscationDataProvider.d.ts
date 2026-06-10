import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITargetSelectorRemappable } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { IMapping } from '../../../../org/spongepowered/asm/obfuscation/mapping/IMapping.d.ts'
import type { MappingField } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingField.d.ts'
import type { MappingMethod } from '../../../../org/spongepowered/asm/obfuscation/mapping/common/MappingMethod.d.ts'
import type { ObfuscationEnvironment } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IObfuscationDataProvider } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IObfuscationDataProvider.d.ts'
import type { TypeHandle } from '../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class ObfuscationDataProvider extends Object implements IObfuscationDataProvider {
    constructor(arg0: IMixinAnnotationProcessor, arg1: ObfuscationEnvironment[])
    // private ap: IMixinAnnotationProcessor;
    // private environments: ObfuscationEnvironment[];
    getObfClass(arg0: string): ObfuscationType[];
    getObfClass(arg0: TypeHandle): ObfuscationType[];
    getObfEntry<T extends Object | number | string | boolean>(arg0: ITargetSelectorRemappable): ObfuscationType[];
    getObfEntry<T extends Object | number | string | boolean>(arg0: IMapping<T>): ObfuscationType[];
    getObfEntryRecursive<T extends Object | number | string | boolean>(arg0: ITargetSelectorRemappable): ObfuscationType[];
    // private getObfEntryRecursive<T extends Object | number | string | boolean>(arg0: ITargetSelectorRemappable, arg1: string[]): ObfuscationType[];
    // private getObfEntryUsing<T extends Object | number | string | boolean>(arg0: ITargetSelectorRemappable, arg1: TypeHandle): ObfuscationType[];
    getObfField(arg0: ITargetSelectorRemappable): ObfuscationType[];
    getObfField(arg0: MappingField): ObfuscationType[];
    getObfFieldRecursive(arg0: ITargetSelectorRemappable): ObfuscationType[];
    getObfMethod(arg0: ITargetSelectorRemappable): ObfuscationType[];
    getObfMethod(arg0: MappingMethod): ObfuscationType[];
    getObfMethodRecursive(arg0: ITargetSelectorRemappable): ObfuscationType[];
    getRemappedMethod(arg0: ITargetSelectorRemappable): ObfuscationType[];
    // private getRemappedMethod(arg0: ITargetSelectorRemappable, arg1: boolean): ObfuscationType[];
    getRemappedMethod(arg0: MappingMethod): ObfuscationType[];
    // private getRemappedMethod(arg0: MappingMethod, arg1: boolean): ObfuscationType[];
    remapDescriptor(arg0: ObfuscationType[], arg1: ITargetSelectorRemappable): ObfuscationType[];
}