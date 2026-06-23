import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionBase } from '../../../kotlin/jvm/internal/FunctionBase.d.ts'
export abstract class Lambda<R extends unknown> extends Object implements Serializable, FunctionBase<R> {
    constructor(arity: number)
    readonly arity: number;
    toString(): string;
}