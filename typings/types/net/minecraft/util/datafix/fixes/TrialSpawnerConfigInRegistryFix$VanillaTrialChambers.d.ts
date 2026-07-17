import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class TrialSpawnerConfigInRegistryFix$VanillaTrialChambers extends Object {
    static CONFIGS_TO_KEY: JavaMap<Pair<Dynamic<Tag>, Dynamic<Tag>>, Identifier>;
    private constructor()
}