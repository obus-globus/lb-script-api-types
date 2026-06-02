import type { Component } from '../../java/awt/Component.d.ts'
import type { Container } from '../../java/awt/Container.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface LayoutManager extends Object{
    addLayoutComponent(arg0: string, arg1: Component): void;
    layoutContainer(arg0: Container): void;
    minimumLayoutSize(arg0: Container): Dimension;
    preferredLayoutSize(arg0: Container): Dimension;
    removeLayoutComponent(arg0: Component): void;
}