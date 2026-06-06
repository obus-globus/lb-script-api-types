import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NameProtectMappings$MappingData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$MappingData.d.ts'
import type { Trie } from '../../../../../../../../org/ahocorasick/trie/Trie.d.ts'
/**
 * It is important for synchronization purposes that this is a class with immutable fields
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L124 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:124}
 */
export class NameProtectMappings$ReplacementInstructions extends Object {
    constructor(matcher: Trie, replacements: { [key: string]: NameProtectMappings$MappingData })
    readonly matcher: Trie;
    readonly replacements: { [key: string]: NameProtectMappings$MappingData };
}