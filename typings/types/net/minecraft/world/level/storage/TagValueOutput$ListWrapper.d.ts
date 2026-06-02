import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { ProblemReporter } from '../../../../../net/minecraft/util/ProblemReporter.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { ValueOutput$ValueOutputList } from '../../../../../net/minecraft/world/level/storage/ValueOutput$ValueOutputList.d.ts'
export class TagValueOutput$ListWrapper extends Object implements ValueOutput$ValueOutputList {
    private constructor(fieldName: string, problemReporter: ProblemReporter, ops: DynamicOps<Tag>, output: (Object | null)[])
    // private fieldName: string;
    // private ops: DynamicOps<Tag>;
    // private output: (Object | null)[];
    // private problemReporter: ProblemReporter;
    addChild(): ValueOutput;
    discardLast(): void;
    isEmpty(): boolean;
}