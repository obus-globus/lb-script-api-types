import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { FocusableTextWidget } from '../../../../../../net/minecraft/client/gui/components/FocusableTextWidget.d.ts'
import type { MultiLineTextWidget } from '../../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { Tab } from '../../../../../../net/minecraft/client/gui/components/tabs/Tab.d.ts'
import type { FrameLayout } from '../../../../../../net/minecraft/client/gui/layouts/FrameLayout.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LayoutElement } from '../../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class AbstractFriendsTab extends Object implements Tab {
    constructor(width: number, height: number)
    // private height: number;
    // private width: number;
    createCenteredFrame(child: LayoutElement, frameWidth: number, frameHeight: number): FrameLayout;
    createCenteredText(message: Component, font: Font, maxWidth: number): MultiLineTextWidget;
    createText(message: Component, font: Font, maxWidth: number): FocusableTextWidget;
    disable(): void;
    doLayout(screenRectangle: ScreenRectangle): void;
    entriesContainer(): Layout;
    getLayout(): Layout;
    getListContentWidth(): number;
    getTabExtraNarration(): Component;
    getTabTitle(): Component;
    rearrangeElements(): void;
    setHeight(height: number): void;
}