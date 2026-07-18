import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { NameProtectMappings$ColoringInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$ColoringInfo.d.ts'
import type { NameProtectMappings$MappingData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$MappingData.d.ts'
import type { NameProtectMappings$ReplacementInstructions } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings$ReplacementInstructions.d.ts'
import type { Emit } from '../../../../../../../../org/ahocorasick/trie/Emit.d.ts'
/**
 * Keeps track of the current name protect mappings and contains functions for replacement.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:41}
 */
export class NameProtectMappings extends Object {
    constructor()
    // private friendMappings: JavaMap<string, string>;
    // private otherPlayerMappings: string[];
    // private replacementInstructions: NameProtectMappings$ReplacementInstructions | null;
    // private usernameReplacement: Pair<string, string> | null;
    /**
     * Returns a list of all emits, sorted by their start
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:115}
     */
    findReplacements(text: CharSequence): Pair<Emit, NameProtectMappings$MappingData>[];
    // private shouldUpdate(usernameReplacement: Pair<string, string>, friendMappings: Pair<string, string>[], otherPlayers: string[]): boolean;
    update(username: Pair<string, string>, friendMappings: Pair<string, string>[], otherPlayers: string[], coloringInfo: NameProtectMappings$ColoringInfo): void;
}