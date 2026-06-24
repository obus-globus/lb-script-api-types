import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { EnvironmentAttributeProbe } from '../../../../net/minecraft/world/attribute/EnvironmentAttributeProbe.d.ts'
export class EnvironmentAttributeProbe$ValueProbe<Value extends unknown> extends Object {
    constructor(null_: EnvironmentAttributeProbe, attribute: EnvironmentAttribute<Value>)
    // private lastValue: Value;
    // private newValue: Value;
    get(attribute: EnvironmentAttribute<Value>, partialTicks: number): Value;
    // private getValueFromLevel(attribute: EnvironmentAttribute<Value>): Value;
    tick(): boolean;
}