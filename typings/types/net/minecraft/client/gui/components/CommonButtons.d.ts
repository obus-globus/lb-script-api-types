import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Button$OnPress } from '../../../../../net/minecraft/client/gui/components/Button$OnPress.d.ts'
import type { FriendsButton } from '../../../../../net/minecraft/client/gui/components/FriendsButton.d.ts'
import type { SpriteIconButton } from '../../../../../net/minecraft/client/gui/components/SpriteIconButton.d.ts'
export class CommonButtons extends Object {
    static accessibility(paramwidth: number, paramonPress: Button$OnPress, paramiconOnly: boolean): SpriteIconButton;
    static friends(paramwidth: number, paramonPress: Button$OnPress, paramfriendsAvailable: boolean): FriendsButton;
    static language(paramwidth: number, paramonPress: Button$OnPress, paramiconOnly: boolean): SpriteIconButton;
    constructor()
}