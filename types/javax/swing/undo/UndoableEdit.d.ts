import type { Object } from '../../../java/lang/Object.d.ts'
export interface UndoableEdit extends Object{
    addEdit(arg0: UndoableEdit): boolean;
    canRedo(): boolean;
    canUndo(): boolean;
    die(): void;
    getPresentationName(): string;
    getRedoPresentationName(): string;
    getUndoPresentationName(): string;
    isSignificant(): boolean;
    redo(): void;
    replaceEdit(arg0: UndoableEdit): boolean;
    undo(): void;
}