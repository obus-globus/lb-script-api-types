import type { CopyCustomDataFunction$CopyOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyCustomDataFunction$CopyOperation.d.ts'
import type { CopyCustomDataFunction$MergeStrategy } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyCustomDataFunction$MergeStrategy.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { NbtProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
export class CopyCustomDataFunction$Builder extends LootItemConditionalFunction$Builder<CopyCustomDataFunction$Builder> {
    private constructor(source: NbtProvider)
    // private ops: CopyCustomDataFunction$CopyOperation[];
    // private source: NbtProvider;
    build(): LootItemFunction;
    copy(sourcePath: string, targetPath: string): CopyCustomDataFunction$Builder;
    copy(sourcePath: string, targetPath: string, mergeStrategy: CopyCustomDataFunction$MergeStrategy): CopyCustomDataFunction$Builder;
    getThis(): CopyCustomDataFunction$Builder;
}