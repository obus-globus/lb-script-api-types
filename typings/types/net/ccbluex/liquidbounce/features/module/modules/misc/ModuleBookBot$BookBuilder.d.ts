import type { PrimitiveIterator$OfInt } from '../../../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Filterable } from '../../../../../../../net/minecraft/server/network/Filterable.d.ts'
export class ModuleBookBot$BookBuilder extends Object {
    constructor()
    // private filteredPages: Filterable<Component>[];
    // private pageAmount: number;
    // private pages: string[];
    // private title: string;
    addPage(page: string): void;
    /**
     * @source <a href="https://github.com/MeteorDevelopment/meteor-client/blob/2025789457e5b4c0671f04f0d3c7e0d91a31765c/src/main/java/meteordevelopment/meteorclient/systems/modules/misc/BookBot.java#L252-L326">code section</a>
     * @contributor sqlerrorthing (<a href="https://github.com/CCBlueX/LiquidBounce/pull/5076">pull request</a>)
     * @author arlomcwalter (on Meteor Client)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt#L197 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt:197}
     */
    buildBookContent(charGenerator: PrimitiveIterator$OfInt, charWidthProvider: (param0: number) => number): void;
    writeBook(): void;
}