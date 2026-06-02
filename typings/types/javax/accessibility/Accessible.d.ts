import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Accessible extends Object{
    getAccessibleContext(): AccessibleContext;
}