import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { OptionalDynamic } from '../../../../../com/mojang/serialization/OptionalDynamic.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ItemStackComponentizationFix$ItemStackData extends Object {
    static read(paramdynamic: Dynamic<Object>): Optional<ItemStackComponentizationFix$ItemStackData>;
    private constructor(item: string, count: number, remainder: Dynamic<Object>)
    // private components: Dynamic<Object>;
    // private count: number;
    // private item: string;
    // private remainder: Dynamic<Object>;
    // private tag: Dynamic<Object>;
    fixSubTag(key: string, dontFixWhenFieldIsMissing: boolean, function_: (param0: Dynamic<Object>) => Object | null): void;
    hasComponent(id: string): boolean;
    is(id: string): boolean;
    is(ids: string[]): boolean;
    moveTagInto(fromKey: string, target: Dynamic<Object>, toKey: string): Dynamic<Object>;
    moveTagToComponent(key: string, type: string): void;
    moveTagToComponent(key: string, type: string, defaultValue: Dynamic<Object>): void;
    removeTag(key: string): OptionalDynamic<Object>;
    setComponent(type: string, value: Dynamic<Object>): void;
    setComponent(type: string, optionalValue: OptionalDynamic<Object>): void;
    write(): Dynamic<Object>;
}