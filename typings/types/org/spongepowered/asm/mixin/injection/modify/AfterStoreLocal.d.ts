import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { At } from '../../../../../../org/spongepowered/asm/mixin/injection/At.d.ts'
import type { At$Shift } from '../../../../../../org/spongepowered/asm/mixin/injection/At$Shift.d.ts'
import type { IInjectionPointContext } from '../../../../../../org/spongepowered/asm/mixin/injection/IInjectionPointContext.d.ts'
import type { InjectionPoint } from '../../../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { BeforeLoadLocal } from '../../../../../../org/spongepowered/asm/mixin/injection/modify/BeforeLoadLocal.d.ts'
import type { InjectionPointData } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionPointData.d.ts'
import type { IMixinContext } from '../../../../../../org/spongepowered/asm/mixin/refmap/IMixinContext.d.ts'
export class AfterStoreLocal extends BeforeLoadLocal {
    static DEFAULT_ALLOWED_SHIFT_BY: number;
    static MAX_ALLOWED_SHIFT_BY: number;
    static after(paramarg0: InjectionPoint): InjectionPoint;
    static and(paramarg0: (Object | null)[]): InjectionPoint;
    static before(paramarg0: InjectionPoint): InjectionPoint;
    static or(paramarg0: (Object | null)[]): InjectionPoint;
    static parse(paramarg0: IInjectionPointContext, paramarg1: AnnotationNode[]): InjectionPoint[];
    static parse(paramarg0: IMixinContext, paramarg1: MethodNode, paramarg2: AnnotationNode, paramarg3: AnnotationNode[]): InjectionPoint[];
    static parse(paramarg0: IInjectionPointContext, paramarg1: string, paramarg2: At$Shift, paramarg3: number, paramarg4: string[], paramarg5: string, paramarg6: string, paramarg7: number, paramarg8: number, paramarg9: string, paramarg10: number): InjectionPoint;
    static parse(paramarg0: IInjectionPointContext, paramarg1: AnnotationNode): InjectionPoint;
    static parse(paramarg0: IInjectionPointContext, paramarg1: At): InjectionPoint;
    static parse(paramarg0: IMixinContext, paramarg1: MethodNode, paramarg2: AnnotationNode, paramarg3: string, paramarg4: At$Shift, paramarg5: number, paramarg6: string[], paramarg7: string, paramarg8: string, paramarg9: number, paramarg10: number, paramarg11: string, paramarg12: number): InjectionPoint;
    static parse(paramarg0: IMixinContext, paramarg1: MethodNode, paramarg2: AnnotationNode, paramarg3: AnnotationNode): InjectionPoint;
    static parse(paramarg0: IMixinContext, paramarg1: MethodNode, paramarg2: AnnotationNode, paramarg3: At): InjectionPoint;
    static register(paramarg0: Class<InjectionPoint>): void;
    static register(paramarg0: Class<InjectionPoint>, paramarg1: string): void;
    static shift(paramarg0: InjectionPoint, paramarg1: number): InjectionPoint;
    constructor(arg0: InjectionPointData)
}