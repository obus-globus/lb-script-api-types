import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class SubtypePathNode extends Object {
    constructor(arg0: KotlinType, arg1: SubtypePathNode)
    readonly previous: SubtypePathNode;
    readonly type: KotlinType;
    getPrevious(): SubtypePathNode;
    getType(): KotlinType;
}