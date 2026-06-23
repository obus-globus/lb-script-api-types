import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ProblemReporter } from '../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ValueOutput$TypedOutputList } from '../../../../../net/minecraft/world/level/storage/ValueOutput$TypedOutputList.d.ts'
export class TagValueOutput$TypedListWrapper<T extends unknown> extends Object implements ValueOutput$TypedOutputList<T> {
    private constructor(problemReporter: ProblemReporter, name: string, ops: DynamicOps<Tag>, codec: Codec<T>, output: (Object | null)[])
    // private codec: Codec<T>;
    // private name: string;
    // private ops: DynamicOps<Tag>;
    // private output: (Object | null)[];
    // private problemReporter: ProblemReporter;
    add(value: T): void;
    isEmpty(): boolean;
}