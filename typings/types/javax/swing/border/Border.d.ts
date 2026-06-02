import type { Component } from '../../../java/awt/Component.d.ts'
import type { Graphics } from '../../../java/awt/Graphics.d.ts'
import type { Insets } from '../../../java/awt/Insets.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Border extends Object{
    getBorderInsets(arg0: Component): Insets;
    isBorderOpaque(): boolean;
    paintBorder(arg0: Component, arg1: Graphics, arg2: number, arg3: number, arg4: number, arg5: number): void;
}