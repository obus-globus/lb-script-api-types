import type { Color } from '../../java/awt/Color.d.ts'
import type { Cursor } from '../../java/awt/Cursor.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Font } from '../../java/awt/Font.d.ts'
import type { FontMetrics } from '../../java/awt/FontMetrics.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { FocusListener } from '../../java/awt/event/FocusListener.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleComponent extends Object{
    addFocusListener(arg0: FocusListener): void;
    contains(arg0: Point): boolean;
    getAccessibleAt(arg0: Point): Accessible;
    getBackground(): Color;
    getBounds(): Rectangle;
    getCursor(): Cursor;
    getFont(): Font;
    getFontMetrics(arg0: Font): FontMetrics;
    getForeground(): Color;
    getLocation(): Point;
    getLocationOnScreen(): Point;
    getSize(): Dimension;
    isEnabled(): boolean;
    isFocusTraversable(): boolean;
    isShowing(): boolean;
    isVisible(): boolean;
    removeFocusListener(arg0: FocusListener): void;
    requestFocus(): void;
    setBackground(arg0: Color): void;
    setBounds(arg0: Rectangle): void;
    setCursor(arg0: Cursor): void;
    setEnabled(arg0: boolean): void;
    setFont(arg0: Font): void;
    setForeground(arg0: Color): void;
    setLocation(arg0: Point): void;
    setSize(arg0: Dimension): void;
    setVisible(arg0: boolean): void;
}