import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NameProtectMappings$MappingData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$MappingData.d.ts'
import type { Trie } from '../../../../../../../../org/ahocorasick/trie/Trie.d.ts'
/**
 * It is important for synchronization purposes that this is a class with immutable fields
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:127}
 */
export class NameProtectMappings$ReplacementInstructions extends Object {
    constructor(matcher: Trie, replacements: { [key: string]: NameProtectMappings$MappingData })
    readonly matcher: Trie;
    readonly replacements: { [key: string]: NameProtectMappings$MappingData };
}