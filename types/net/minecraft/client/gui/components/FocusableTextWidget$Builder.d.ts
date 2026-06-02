import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { FocusableTextWidget } from '../../../../../net/minecraft/client/gui/components/FocusableTextWidget.d.ts'
import type { FocusableTextWidget$BackgroundFill } from '../../../../../net/minecraft/client/gui/components/FocusableTextWidget$BackgroundFill.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class FocusableTextWidget$Builder extends Object {
    private constructor(message: Component, font: Font)
    private constructor(message: Component, font: Font, padding: number)
    // private alwaysShowBorder: boolean;
    // private backgroundFill: FocusableTextWidget$BackgroundFill;
    // private font: Font;
    // private maxWidth: number;
    // private message: Component;
    // private padding: number;
    alwaysShowBorder(alwaysShowBorder: boolean): FocusableTextWidget$Builder;
    backgroundFill(backgroundFill: FocusableTextWidget$BackgroundFill): FocusableTextWidget$Builder;
    build(): FocusableTextWidget;
    maxWidth(maxWidth: number): FocusableTextWidget$Builder;
    textWidth(textWidth: number): FocusableTextWidget$Builder;
}