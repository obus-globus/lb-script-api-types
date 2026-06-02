import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class JavaTypeEnhancement$SimpleResult extends Object {
    constructor(arg0: SimpleType, arg1: number, arg2: boolean)
    readonly forWarnings: boolean;
    readonly subtreeSize: number;
    readonly type: SimpleType;
    getForWarnings(): boolean;
    getSubtreeSize(): number;
    getType(): SimpleType;
}