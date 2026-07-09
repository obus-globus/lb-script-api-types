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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:41}
 */
export class NameProtectMappings extends Object {
    constructor()
    // private friendMappings: { [key: string]: string };
    // private otherPlayerMappings: string[];
    // private replacementInstructions: NameProtectMappings$ReplacementInstructions | null;
    // private usernameReplacement: Pair<string, string> | null;
    /**
     * Returns a list of all emits, sorted by their start
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/nameprotect/NameProtectMappings.kt:115}
     */
    findReplacements(text: CharSequence): Pair<Emit, NameProtectMappings$MappingData>[];
    // private shouldUpdate(usernameReplacement: Pair<string, string>, friendMappings: Pair<string, string>[], otherPlayers: string[]): boolean;
    update(username: Pair<string, string>, friendMappings: Pair<string, string>[], otherPlayers: string[], coloringInfo: NameProtectMappings$ColoringInfo): void;
}