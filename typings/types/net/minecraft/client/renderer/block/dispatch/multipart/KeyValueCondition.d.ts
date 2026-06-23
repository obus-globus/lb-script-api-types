import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Condition } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { KeyValueCondition$Terms } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/KeyValueCondition$Terms.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
export class KeyValueCondition extends Record implements Condition {
    static CODEC: Codec<(param0: StateDefinition<Object, any>) => (param0: Object | null) => boolean>;
    static CODEC: Codec<KeyValueCondition>;
    constructor(tests: { [key: string]: KeyValueCondition$Terms })
    // private tests: { [key: string]: KeyValueCondition$Terms };
    equals(o: Object | null): boolean;
    hashCode(): number;
    instantiate<S extends StateHolder<O, S>, O extends unknown>(definition: StateDefinition<O, S>): (param0: S) => boolean;
    tests(): { [key: string]: KeyValueCondition$Terms };
    toString(): string;
}