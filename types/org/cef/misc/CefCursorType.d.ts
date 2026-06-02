import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefCursorType extends Enum<CefCursorType> {
    static ALIAS: CefCursorType;
    static CELL: CefCursorType;
    static COLUMN_RESIZE: CefCursorType;
    static CONTEXT_MENU: CefCursorType;
    static COPY: CefCursorType;
    static CROSS: CefCursorType;
    static CUSTOM: CefCursorType;
    static EAST_PANNING: CefCursorType;
    static EAST_RESIZE: CefCursorType;
    static EAST_WEST_RESIZE: CefCursorType;
    static GRAB: CefCursorType;
    static GRABBING: CefCursorType;
    static HAND: CefCursorType;
    static HELP: CefCursorType;
    static IBEAM: CefCursorType;
    static MIDDLE_PANNING: CefCursorType;
    static MOVE: CefCursorType;
    static NONE: CefCursorType;
    static NORTH_EAST_PANNING: CefCursorType;
    static NORTH_EAST_RESIZE: CefCursorType;
    static NORTH_EAST_SOUTH_WEST_RESIZE: CefCursorType;
    static NORTH_PANNING: CefCursorType;
    static NORTH_RESIZE: CefCursorType;
    static NORTH_SOUTH_RESIZE: CefCursorType;
    static NORTH_WEST_PANNING: CefCursorType;
    static NORTH_WEST_RESIZE: CefCursorType;
    static NORTH_WEST_SOUTH_EAST_RESIZE: CefCursorType;
    static NOT_ALLOWED: CefCursorType;
    static NO_DROP: CefCursorType;
    static POINTER: CefCursorType;
    static PROGRESS: CefCursorType;
    static ROW_RESIZE: CefCursorType;
    static SOUTH_EAST_PANNING: CefCursorType;
    static SOUTH_EAST_RESIZE: CefCursorType;
    static SOUTH_PANNING: CefCursorType;
    static SOUTH_RESIZE: CefCursorType;
    static SOUTH_WEST_PANNING: CefCursorType;
    static SOUTH_WEST_RESIZE: CefCursorType;
    static VERTICAL_IBEAM: CefCursorType;
    static WAIT: CefCursorType;
    static WEST_PANNING: CefCursorType;
    static WEST_RESIZE: CefCursorType;
    static ZOOM_IN: CefCursorType;
    static ZOOM_OUT: CefCursorType;
    static fromId(paramarg0: number): CefCursorType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefCursorType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    glfwId: number;
    name(): "POINTER" | "CROSS" | "HAND" | "IBEAM" | "WAIT" | "HELP" | "EAST_RESIZE" | "NORTH_RESIZE" | "NORTH_EAST_RESIZE" | "NORTH_WEST_RESIZE" | "SOUTH_RESIZE" | "SOUTH_EAST_RESIZE" | "SOUTH_WEST_RESIZE" | "WEST_RESIZE" | "NORTH_SOUTH_RESIZE" | "EAST_WEST_RESIZE" | "NORTH_EAST_SOUTH_WEST_RESIZE" | "NORTH_WEST_SOUTH_EAST_RESIZE" | "COLUMN_RESIZE" | "ROW_RESIZE" | "MIDDLE_PANNING" | "EAST_PANNING" | "NORTH_PANNING" | "NORTH_EAST_PANNING" | "NORTH_WEST_PANNING" | "SOUTH_PANNING" | "SOUTH_EAST_PANNING" | "SOUTH_WEST_PANNING" | "WEST_PANNING" | "MOVE" | "VERTICAL_IBEAM" | "CELL" | "CONTEXT_MENU" | "ALIAS" | "PROGRESS" | "NO_DROP" | "COPY" | "NONE" | "NOT_ALLOWED" | "ZOOM_IN" | "ZOOM_OUT" | "GRAB" | "GRABBING" | "CUSTOM";
}