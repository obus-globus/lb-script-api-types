import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinEnvironment } from '../../../../../org/spongepowered/asm/mixin/MixinEnvironment.d.ts'
import type { IRemapper } from '../../../../../org/spongepowered/asm/mixin/extensibility/IRemapper.d.ts'
import type { IClassReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/IClassReferenceMapper.d.ts'
import type { IReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/IReferenceMapper.d.ts'
export class RemappingReferenceMapper extends Object implements IClassReferenceMapper, IReferenceMapper {
    static of(paramarg0: MixinEnvironment, paramarg1: IReferenceMapper): IReferenceMapper;
    private constructor(arg0: MixinEnvironment, arg1: IReferenceMapper)
    // private mappedReferenceCache: { [key: string]: string };
    // private refMap: IReferenceMapper;
    // private remapper: IRemapper;
    getContext(): string;
    getResourceName(): string;
    getStatus(): string;
    isDefault(): boolean;
    remap(arg0: string, arg1: string): string;
    remapClassName(arg0: string, arg1: string): string;
    remapClassNameWithContext(arg0: string, arg1: string, arg2: string): string;
    remapWithContext(arg0: string, arg1: string, arg2: string): string;
    setContext(arg0: string): void;
}