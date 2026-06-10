import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { FieldNode } from '../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AccessorGenerator } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorGenerator.d.ts'
import type { AccessorInfo$AccessorName } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo$AccessorName.d.ts'
import type { AccessorInfo$AccessorType } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo$AccessorType.d.ts'
import type { ElementNode } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ElementNode.d.ts'
import type { ISelectorContext } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { SpecialMethodInfo } from '../../../../../org/spongepowered/asm/mixin/struct/SpecialMethodInfo.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export class AccessorInfo extends SpecialMethodInfo {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    static inflectTarget(paramarg0: string, paramarg1: AccessorInfo$AccessorType, paramarg2: string, paramarg3: ISelectorContext, paramarg4: boolean): string;
    static inflectTarget(paramarg0: AccessorInfo$AccessorName, paramarg1: AccessorInfo$AccessorType, paramarg2: string, paramarg3: ISelectorContext, paramarg4: boolean): string;
    static of(paramarg0: MixinTargetContext, paramarg1: MethodNode, paramarg2: Class<Annotation>): AccessorInfo;
    constructor(arg0: MixinTargetContext, arg1: MethodNode)
    constructor(arg0: MixinTargetContext, arg1: MethodNode, arg2: Class<Annotation>)
    // private annotationClass: Class<Annotation>;
    readonly argTypes: Type[];
    // private generator: AccessorGenerator;
    // private isStatic: boolean;
    readonly returnType: Type;
    // private specifiedName: string;
    readonly target: ITargetSelector;
    targetField: FieldNode;
    readonly targetFieldType: Type;
    targetMethod: MethodNode;
    // private type: AccessorInfo$AccessorType;
    findTarget<TNode extends Object | number | string | boolean>(arg0: ElementNode<TNode>[]): TNode;
    // private findTargetField(): FieldNode;
    generate(): MethodNode;
    getArgTypes(): Type[];
    getReturnType(): Type;
    getTarget(): ITargetSelector;
    getTargetField(): FieldNode;
    getTargetFieldType(): Type;
    getTargetMethod(): MethodNode;
    getTargetName(arg0: string): string;
    inflectTarget(): string;
    initTarget(): ITargetSelector;
    initTargetFieldType(): Type;
    initType(): AccessorInfo$AccessorType;
    isStatic(): boolean;
    locate(): void;
    toString(): string;
    validate(): void;
}