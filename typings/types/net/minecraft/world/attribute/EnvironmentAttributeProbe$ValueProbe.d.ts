import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
export class EnvironmentAttributeProbe$ValueProbe<Value extends unknown> extends Object {
    constructor(null_: EnvironmentAttributeProbe$ValueProbe<Value>)
    // private lastValue: Value;
    // private newValue: Value;
    get(attribute: EnvironmentAttribute<Value>, partialTicks: number): Value;
    // private getValueFromLevel(attribute: EnvironmentAttribute<Value>): Value;
    tick(): boolean;
}