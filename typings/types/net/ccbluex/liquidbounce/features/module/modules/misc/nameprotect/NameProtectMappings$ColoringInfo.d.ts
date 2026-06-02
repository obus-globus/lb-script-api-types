import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class NameProtectMappings$ColoringInfo extends Object {
    constructor(username: Function0<Color4b>, friends: Function0<Color4b>, otherPlayers: Function0<Color4b>)
    readonly friends: () => Color4b;
    readonly otherPlayers: () => Color4b;
    readonly username: () => Color4b;
}