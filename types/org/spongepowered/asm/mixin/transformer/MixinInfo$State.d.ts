import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ClassNode } from '../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { Shadow } from '../../../../../org/spongepowered/asm/mixin/Shadow.d.ts'
import type { ClassInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo.d.ts'
import type { InterfaceInfo } from '../../../../../org/spongepowered/asm/mixin/transformer/InterfaceInfo.d.ts'
import type { MixinInfo$MixinClassNode } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$MixinClassNode.d.ts'
import type { MixinInfo$SubType } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinInfo$SubType.d.ts'
export class MixinInfo$State extends Object {
    constructor(null_: MixinInfo$State, arg1: ClassNode)
    constructor(null_: MixinInfo$State, arg1: ClassNode, arg2: ClassInfo)
    // private classInfo: ClassInfo;
    // private classNode: ClassNode;
    // private detachedSuper: boolean;
    // private innerClasses: string[];
    // private interfaces: string[];
    // private softImplements: InterfaceInfo[];
    // private unique: boolean;
    // private validationClassNode: MixinInfo$MixinClassNode;
    complete(): void;
    connect(): void;
    createClassNode(arg0: number): MixinInfo$MixinClassNode;
    getClassInfo(): ClassInfo;
    getClassNode(): ClassNode;
    getInnerClasses(): string[];
    getInterfaces(): string[];
    getSoftImplements(): InterfaceInfo[];
    getValidationClassNode(): MixinInfo$MixinClassNode;
    isDetachedSuper(): boolean;
    isUnique(): boolean;
    readImplementations(arg0: MixinInfo$SubType): void;
    readInnerClasses(): void;
    validate(arg0: MixinInfo$SubType, arg1: ClassInfo[]): void;
    validateChanges(arg0: MixinInfo$SubType, arg1: ClassInfo[]): void;
    // private validateClassFeatures(): void;
    // private validateInner(): void;
    // private validateRemappable(arg0: Class<Shadow>, arg1: string, arg2: AnnotationNode): void;
    // private validateRemappables(arg0: ClassInfo[]): void;
}