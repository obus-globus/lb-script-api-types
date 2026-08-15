import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NameProtectMappings$MappingData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$MappingData.d.ts'
import type { Trie } from '../../../../../../../../org/ahocorasick/trie/Trie.d.ts'
/**
 * It is important for synchronization purposes that this is a class with immutable fields
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:127}
 */
export class NameProtectMappings$ReplacementInstructions extends Object {
    constructor(matcher: Trie, replacements: JavaMap<string, NameProtectMappings$MappingData>)
    readonly matcher: Trie;
    readonly replacements: JavaMap<string, NameProtectMappings$MappingData>;
}