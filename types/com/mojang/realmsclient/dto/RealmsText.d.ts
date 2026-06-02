import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsText extends Object {
    static parse(paramjsonObject: JsonObject): RealmsText;
    private constructor(translationKey: string, args: string[])
    // private args: string[];
    // private translationKey: string;
    createComponent(): Component;
    createComponent(fallback: Component): Component;
    toString(): string;
}