import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITargetSelectorRemappable } from '../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorRemappable.d.ts'
import type { ReferenceMapper } from '../../../../org/spongepowered/asm/mixin/refmap/ReferenceMapper.d.ts'
import type { ObfuscationEnvironment } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
import type { ObfuscationType } from '../../../../org/spongepowered/tools/obfuscation/ObfuscationType.d.ts'
import type { IMixinAnnotationProcessor } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor.d.ts'
import type { IReferenceManager } from '../../../../org/spongepowered/tools/obfuscation/interfaces/IReferenceManager.d.ts'
export class ReferenceManager extends Object implements IReferenceManager {
    constructor(arg0: IMixinAnnotationProcessor, arg1: ObfuscationEnvironment[])
    readonly allowConflicts: boolean;
    // private ap: IMixinAnnotationProcessor;
    // private environments: ObfuscationEnvironment[];
    // private outRefMapFileName: string;
    // private refMapper: ReferenceMapper;
    addClassMapping(arg0: string, arg1: string, arg2: ObfuscationType[]): void;
    addFieldMapping(arg0: string, arg1: string, arg2: ITargetSelectorRemappable, arg3: ObfuscationType[]): void;
    addMapping(arg0: ObfuscationType, arg1: string, arg2: string, arg3: string): void;
    addMethodMapping(arg0: string, arg1: string, arg2: ITargetSelectorRemappable, arg3: ObfuscationType[]): void;
    addMethodMapping(arg0: string, arg1: string, arg2: ObfuscationType[]): void;
    getAllowConflicts(): boolean;
    getMapper(): ReferenceMapper;
    // private newWriter(arg0: string, arg1: string): PrintWriter;
    setAllowConflicts(arg0: boolean): void;
    write(): void;
}