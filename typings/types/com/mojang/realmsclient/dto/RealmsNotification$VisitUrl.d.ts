import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { RealmsNotification } from '../../../../com/mojang/realmsclient/dto/RealmsNotification.d.ts'
import type { RealmsText } from '../../../../com/mojang/realmsclient/dto/RealmsText.d.ts'
import type { Button } from '../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsNotification$VisitUrl extends RealmsNotification {
    static parse(parambase: RealmsNotification, paramjsonObject: JsonObject): RealmsNotification$VisitUrl;
    static parseList(paramjson: string): RealmsNotification[];
    private constructor(base: RealmsNotification, url: string, buttonText: RealmsText, message: RealmsText)
    // private buttonText: RealmsText;
    readonly message: RealmsText;
    // private url: string;
    buildOpenLinkButton(parentScreen: Screen): Button;
    getMessage(): Component;
}