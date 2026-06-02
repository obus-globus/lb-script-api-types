import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class JavaTypeEnhancement$Result extends Object {
    constructor(arg0: KotlinType, arg1: number)
    readonly subtreeSize: number;
    readonly type: KotlinType;
    getSubtreeSize(): number;
    getType(): KotlinType;
}