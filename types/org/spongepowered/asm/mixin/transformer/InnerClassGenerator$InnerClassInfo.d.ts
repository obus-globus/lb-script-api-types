import type { ClassVisitor } from '../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { Remapper } from '../../../../../org/objectweb/asm/commons/Remapper.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { IMixinInfo } from '../../../../../org/spongepowered/asm/mixin/extensibility/IMixinInfo.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { MixinInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo.d.ts'
import type { ISyntheticClassInfo } from '../../../../../org/spongepowered/asm/service/ISyntheticClassInfo.d.ts'
export class InnerClassGenerator$InnerClassInfo extends Remapper implements ISyntheticClassInfo {
    constructor(null_: InnerClassGenerator$InnerClassInfo, arg1: MixinInfo, arg2: ClassInfo, arg3: ClassInfo, arg4: string, arg5: string, arg6: MixinInfo)
    // private loadCounter: number;
    readonly mixin: MixinInfo;
    readonly name: string;
    // private nestHostName: string;
    // private originalName: string;
    // private owner: MixinInfo;
    // private ownerName: string;
    // private targetClassInfo: ClassInfo;
    accept(arg0: ClassVisitor): void;
    // private findRemappedName(arg0: string): string;
    getClassName(): string;
    getMixin(): IMixinInfo;
    getName(): string;
    getNestHostName(): string;
    getOriginalName(): string;
    getOwner(): MixinInfo;
    getTargetName(): string;
    isLoaded(): boolean;
    map(arg0: string): string;
    mapFieldName(arg0: string, arg1: string, arg2: string): string;
    mapMethodName(arg0: string, arg1: string, arg2: string): string;
    // private readInnerClasses(arg0: ClassNode): void;
    toString(): string;
}