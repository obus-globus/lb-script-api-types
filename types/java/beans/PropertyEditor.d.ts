import type { Component } from '../../java/awt/Component.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PropertyEditor extends Object{
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    getAsText(): string;
    getCustomEditor(): Component;
    getJavaInitializationString(): string;
    getTags(): string[];
    getValue(): Object;
    isPaintable(): boolean;
    paintValue(arg0: Graphics, arg1: Rectangle): void;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    setAsText(arg0: string): void;
    setValue(arg0: Object): void;
    supportsCustomEditor(): boolean;
}