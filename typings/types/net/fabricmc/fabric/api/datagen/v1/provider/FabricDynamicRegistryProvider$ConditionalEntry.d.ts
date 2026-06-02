import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
export class FabricDynamicRegistryProvider$ConditionalEntry<T extends Object | number | string | boolean> extends Record {
    // private conditions: ResourceCondition[];
    // private value: T;
    conditions(): ResourceCondition[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): T;
}