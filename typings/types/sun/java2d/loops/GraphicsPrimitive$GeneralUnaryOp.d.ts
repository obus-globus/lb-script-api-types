import type { Object } from '../../../java/lang/Object.d.ts'
import type { Blit } from '../../../sun/java2d/loops/Blit.d.ts'
import type { CompositeType } from '../../../sun/java2d/loops/CompositeType.d.ts'
import type { GraphicsPrimitive } from '../../../sun/java2d/loops/GraphicsPrimitive.d.ts'
import type { SurfaceType } from '../../../sun/java2d/loops/SurfaceType.d.ts'
export interface GraphicsPrimitive$GeneralUnaryOp extends Object{
    getCompositeType(): CompositeType;
    getDestType(): SurfaceType;
    getPrimTypeID(): number;
    getSignature(): string;
    setPrimitives(arg0: Blit, arg1: GraphicsPrimitive, arg2: Blit): void;
}