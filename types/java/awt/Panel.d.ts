import type { Container } from '../../java/awt/Container.d.ts'
import type { LayoutManager } from '../../java/awt/LayoutManager.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Panel extends Container implements Accessible {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    constructor()
    constructor(arg0: LayoutManager)
    addNotify(): void;
    constructComponentName(): string;
    getAccessibleContext(): AccessibleContext;
}