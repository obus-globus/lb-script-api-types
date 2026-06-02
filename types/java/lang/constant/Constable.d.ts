import type { ConstantDesc } from '../../../java/lang/constant/ConstantDesc.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Constable extends Object{
    describeConstable(): Optional<ConstantDesc>;
}