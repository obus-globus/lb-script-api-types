import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { RealmsNotification } from '../../../../com/mojang/realmsclient/dto/RealmsNotification.d.ts'
import type { RealmsNotification$UrlButton } from '../../../../com/mojang/realmsclient/dto/RealmsNotification$UrlButton.d.ts'
import type { RealmsText } from '../../../../com/mojang/realmsclient/dto/RealmsText.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { PopupScreen } from '../../../../net/minecraft/client/gui/components/PopupScreen.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class RealmsNotification$InfoPopup extends RealmsNotification {
    static parse(parambase: RealmsNotification, paramobject: JsonObject): RealmsNotification$InfoPopup;
    static parseList(paramjson: string): RealmsNotification[];
    private constructor(base: RealmsNotification, title: RealmsText, message: RealmsText, image: Identifier, urlButton: RealmsNotification$UrlButton)
    // private image: Identifier;
    // private message: RealmsText;
    // private title: RealmsText;
    // private urlButton: RealmsNotification$UrlButton;
    buildScreen(parentScreen: Screen, dismiss: (param0: UUID) => void): PopupScreen;
}