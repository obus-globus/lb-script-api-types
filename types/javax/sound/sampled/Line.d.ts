import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Control } from '../../../javax/sound/sampled/Control.d.ts'
import type { Control$Type } from '../../../javax/sound/sampled/Control$Type.d.ts'
import type { Line$Info } from '../../../javax/sound/sampled/Line$Info.d.ts'
import type { LineListener } from '../../../javax/sound/sampled/LineListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Line extends AutoCloseable, Object{
    addLineListener(arg0: LineListener): void;
    close(): void;
    getControl(arg0: Control$Type): Control;
    getControls(): Control[];
    getLineInfo(): Line$Info;
    isControlSupported(arg0: Control$Type): boolean;
    isOpen(): boolean;
    open(): void;
    removeLineListener(arg0: LineListener): void;
}