import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelDebugName } from '../../../../../../net/minecraft/client/resources/model/ModelDebugName.d.ts'
import type { TextureSlots } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots.d.ts'
import type { TextureSlots$Data } from '../../../../../../net/minecraft/client/resources/model/sprite/TextureSlots$Data.d.ts'
export class TextureSlots$Resolver extends Object {
    constructor()
    // private entries: TextureSlots$Data[];
    addFirst(data: TextureSlots$Data): TextureSlots$Resolver;
    addLast(data: TextureSlots$Data): TextureSlots$Resolver;
    resolve(debugNameProvider: () => string): TextureSlots;
}