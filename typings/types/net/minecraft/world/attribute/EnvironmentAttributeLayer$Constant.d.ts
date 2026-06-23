import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttributeLayer } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeLayer.d.ts'
export interface EnvironmentAttributeLayer$Constant<Value extends unknown> extends Object, EnvironmentAttributeLayer<Value>{
    applyConstant(baseValue: Value): Value;
}