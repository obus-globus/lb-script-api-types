import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleSelection extends Object{
    addAccessibleSelection(arg0: number): void;
    clearAccessibleSelection(): void;
    getAccessibleSelection(arg0: number): Accessible;
    getAccessibleSelectionCount(): number;
    isAccessibleChildSelected(arg0: number): boolean;
    removeAccessibleSelection(arg0: number): void;
    selectAllAccessibleSelection(): void;
}