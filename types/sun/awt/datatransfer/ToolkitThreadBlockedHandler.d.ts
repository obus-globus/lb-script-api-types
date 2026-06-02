import type { Object } from '../../../java/lang/Object.d.ts'
export interface ToolkitThreadBlockedHandler extends Object{
    enter(): void;
    exit(): void;
    lock(): void;
    unlock(): void;
}