import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export interface ClientPlaceholderContext extends PlaceholderContext, Object{
    addToContext(arg0: ParserContext): void;
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    asParserContext(): ParserContext;
    hasBlockPosition(): boolean;
    hasEntity(): boolean;
    hasGameProfile(): boolean;
    hasHolderLookup(): boolean;
    hasLevel(): boolean;
    hasNameAndId(): boolean;
    hasPlayer(): boolean;
    hasPosition(): boolean;
    level(): ClientLevel;
    player(): LocalPlayer;
    withView(arg0: PlaceholderContext$ViewObject): ClientPlaceholderContext;
}