import type { Component } from '../../java/awt/Component.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Container$EventTargetFilter extends Object{
    accept(arg0: Component): boolean;
}