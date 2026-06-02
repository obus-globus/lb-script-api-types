import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleTable extends Object{
    getAccessibleAt(arg0: number, arg1: number): Accessible;
    getAccessibleCaption(): Accessible;
    getAccessibleColumnCount(): number;
    getAccessibleColumnDescription(arg0: number): Accessible;
    getAccessibleColumnExtentAt(arg0: number, arg1: number): number;
    getAccessibleColumnHeader(): AccessibleTable;
    getAccessibleRowCount(): number;
    getAccessibleRowDescription(arg0: number): Accessible;
    getAccessibleRowExtentAt(arg0: number, arg1: number): number;
    getAccessibleRowHeader(): AccessibleTable;
    getAccessibleSummary(): Accessible;
    getSelectedAccessibleColumns(): number[];
    getSelectedAccessibleRows(): number[];
    isAccessibleColumnSelected(arg0: number): boolean;
    isAccessibleRowSelected(arg0: number): boolean;
    isAccessibleSelected(arg0: number, arg1: number): boolean;
    setAccessibleCaption(arg0: Accessible): void;
    setAccessibleColumnDescription(arg0: number, arg1: Accessible): void;
    setAccessibleColumnHeader(arg0: AccessibleTable): void;
    setAccessibleRowDescription(arg0: number, arg1: Accessible): void;
    setAccessibleRowHeader(arg0: AccessibleTable): void;
    setAccessibleSummary(arg0: Accessible): void;
}