import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AttributeRange<Value extends unknown> extends Object{
    sanitize(value: Value): Value;
    validate(value: Value): DataResult<Value>;
}