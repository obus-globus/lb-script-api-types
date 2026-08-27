import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TranslatableContents } from '../../../../net/minecraft/network/chat/contents/TranslatableContents.d.ts'
export class LanguageText extends TranslatableContents {
    static MAP_CODEC: MapCodec<TranslatableContents>;
    static NO_ARGS: Object[];
    static isAllowedPrimitiveArgument(paramobject: Object): boolean;
    constructor(key: string, args: (Object | null)[])
}