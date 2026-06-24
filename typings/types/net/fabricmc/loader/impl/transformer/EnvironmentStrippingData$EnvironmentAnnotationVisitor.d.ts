import type { EnvironmentStrippingData$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { EnvironmentStrippingData } from '../../../../../net/fabricmc/loader/impl/transformer/EnvironmentStrippingData.d.ts'
import type { AnnotationVisitor } from '../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class EnvironmentStrippingData$EnvironmentAnnotationVisitor extends AnnotationVisitor {
    private constructor(null_: EnvironmentStrippingData, arg1: number, arg2: () => void)
    constructor(null_: EnvironmentStrippingData, arg1: number, arg2: () => void, arg3: EnvironmentStrippingData$1)
    // private onEnvMismatch: () => void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}