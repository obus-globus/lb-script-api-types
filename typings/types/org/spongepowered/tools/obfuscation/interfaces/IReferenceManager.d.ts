import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ITargetSelectorRemappable } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { ReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/ReferenceMapper.d.ts'
import type { ObfuscationType } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
export interface IReferenceManager extends Object{
    addClassMapping(arg0: string, arg1: string, arg2: ObfuscationType[]): void;
    addFieldMapping(arg0: string, arg1: string, arg2: ITargetSelectorRemappable, arg3: ObfuscationType[]): void;
    addMethodMapping(arg0: string, arg1: string, arg2: ITargetSelectorRemappable, arg3: ObfuscationType[]): void;
    addMethodMapping(arg0: string, arg1: string, arg2: ObfuscationType[]): void;
    getAllowConflicts(): boolean;
    getMapper(): ReferenceMapper;
    setAllowConflicts(arg0: boolean): void;
    write(): void;
}