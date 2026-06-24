import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { FrameLayout } from '../../../../../net/minecraft/client/gui/layouts/FrameLayout.d.ts'
import type { Layout } from '../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { LayoutElement } from '../../../../../net/minecraft/client/gui/layouts/LayoutElement.d.ts'
import type { LayoutSettings } from '../../../../../net/minecraft/client/gui/layouts/LayoutSettings.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class HeaderAndFooterLayout extends Object implements Layout {
    static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
    static MAGIC_PADDING: number;
    constructor(screen: Screen)
    constructor(screen: Screen, headerAndFooterHeight: number)
    constructor(screen: Screen, headerHeight: number, footerHeight: number)
    // private contentsFrame: FrameLayout;
    // private footerFrame: FrameLayout;
    readonly footerHeight: number;
    // private headerFrame: FrameLayout;
    readonly headerHeight: number;
    // private screen: Screen;
    addTitleHeader(component: Component, font: Font): void;
    addToContents<T extends LayoutElement>(child: T): T;
    addToContents<T extends LayoutElement>(child: T, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addToFooter<T extends LayoutElement>(child: T): T;
    addToFooter<T extends LayoutElement>(child: T, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    addToHeader<T extends LayoutElement>(child: T): T;
    addToHeader<T extends LayoutElement>(child: T, layoutSettingsAdjustments: (param0: LayoutSettings) => void): T;
    arrangeElements(): void;
    getContentHeight(): number;
    getFooterHeight(): number;
    getHeaderHeight(): number;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    removeChildren(): void;
    setFooterHeight(footerHeight: number): void;
    setHeaderHeight(headerHeight: number): void;
    setX(x: number): void;
    setY(y: number): void;
    visitChildren(layoutElementVisitor: (param0: LayoutElement) => void): void;
    visitWidgets(widgetVisitor: (param0: AbstractWidget) => void): void;
}