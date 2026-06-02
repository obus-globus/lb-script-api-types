import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { Layout } from '../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class CommonLayouts extends Object {
    static labeledElement(paramfont: Font, paramelement: LayoutElement, paramlabel: Component): Layout;
    static labeledElement(paramfont: Font, paramelement: LayoutElement, paramlabel: Component, paramsettings: (param0: LayoutSettings) => void): Layout;
    private constructor()
}