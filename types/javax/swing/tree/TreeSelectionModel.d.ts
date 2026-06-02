import type { PropertyChangeListener } from '../../../java/beans/PropertyChangeListener.d.ts'
import type { TreeSelectionListener } from '../../../javax/swing/event/TreeSelectionListener.d.ts'
import type { RowMapper } from '../../../javax/swing/tree/RowMapper.d.ts'
import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeSelectionModel extends Object{
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    addSelectionPath(arg0: TreePath): void;
    addSelectionPaths(arg0: TreePath[]): void;
    addTreeSelectionListener(arg0: TreeSelectionListener): void;
    clearSelection(): void;
    getLeadSelectionPath(): TreePath;
    getLeadSelectionRow(): number;
    getMaxSelectionRow(): number;
    getMinSelectionRow(): number;
    getRowMapper(): RowMapper;
    getSelectionCount(): number;
    getSelectionMode(): number;
    getSelectionPath(): TreePath;
    getSelectionPaths(): TreePath[];
    getSelectionRows(): number[];
    isPathSelected(arg0: TreePath): boolean;
    isRowSelected(arg0: number): boolean;
    isSelectionEmpty(): boolean;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    removeSelectionPath(arg0: TreePath): void;
    removeSelectionPaths(arg0: TreePath[]): void;
    removeTreeSelectionListener(arg0: TreeSelectionListener): void;
    resetRowSelection(): void;
    setRowMapper(arg0: RowMapper): void;
    setSelectionMode(arg0: number): void;
    setSelectionPath(arg0: TreePath): void;
    setSelectionPaths(arg0: TreePath[]): void;
}