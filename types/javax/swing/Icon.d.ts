import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Icon extends Object{
    getIconHeight(): number;
    getIconWidth(): number;
    paintIcon(arg0: Component, arg1: Graphics, arg2: number, arg3: number): void;
}